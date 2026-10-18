import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

// Best-effort in-memory rate limit (per server instance). For stronger guarantees use
// Vercel KV / Upstash. 5 messages per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > LIMIT;
}

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return json({ ok: false, error: "Too many messages. Try again in a few minutes, or email directly." }, 429);

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    // Honeypot filled: pretend success so bots learn nothing.
    if (fieldErrors.website) return json({ ok: true }, 200);
    return json({ ok: false, error: "Please check the highlighted fields.", fieldErrors }, 422);
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, RESEND_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !RESEND_FROM_EMAIL) {
    return json({ ok: false, error: "The contact form isn't set up yet. Please email directly." }, 503);
  }

  const { name, email, topic, company, message } = parsed.data;
  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `[shazan.dev] ${topic} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\nCompany / site: ${company || "n/a"}\n\n${message}`,
    });
    if (error) return json({ ok: false, error: "Sending failed. Please email directly." }, 502);
    return json({ ok: true }, 200);
  } catch {
    return json({ ok: false, error: "Sending failed. Please email directly." }, 502);
  }
}
