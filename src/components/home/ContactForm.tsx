"use client";

import { useEffect, useState } from "react";
import { TOPICS } from "@/lib/contact-schema";
import { profile } from "@/content/profile";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; msg: string };
type Errors = Partial<Record<"name" | "email" | "topic" | "message", string>>;

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<Errors>({});
  const [topic, setTopic] = useState<string>(TOPICS[0]);

  // Intent buttons elsewhere on the page set the topic.
  useEffect(() => {
    const on = (e: Event) => {
      const t = (e as CustomEvent<string>).detail;
      if ((TOPICS as readonly string[]).includes(t)) setTopic(t);
    };
    window.addEventListener("contact-topic", on);
    return () => window.removeEventListener("contact-topic", on);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());
    const errs: Errors = {};
    if (String(body.name ?? "").trim().length < 2) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email ?? ""))) errs.email = "Please enter a valid email address.";
    if (String(body.message ?? "").trim().length < 20) errs.message = "A couple of sentences helps me reply well (20+ characters).";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus({ kind: "sent" });
        (e.target as HTMLFormElement).reset();
        return;
      }
      if (data.fieldErrors) {
        const fe: Errors = {};
        for (const [k, v] of Object.entries(data.fieldErrors as Record<string, string[]>)) fe[k as keyof Errors] = v?.[0];
        setErrors(fe);
      }
      setStatus({ kind: "error", msg: data.error || "Sending failed. Please email directly." });
    } catch {
      setStatus({ kind: "error", msg: "Network error. Please email directly." });
    }
  }

  const field = "mt-2 w-full rounded-[14px] border border-rule bg-card-2 px-4 py-3 border-transparent text-base outline-none transition-colors placeholder:text-dim/70 focus:border-signal";
  const err = (k: keyof Errors) =>
    errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-sm text-[#e5484d]">{errors[k]}</p> : null;

  if (status.kind === "sent") {
    return (
      <div role="status" className="card p-8">
        <p className="text-2xl font-semibold tracking-tight">Message sent</p>
        <p className="mt-2 text-dim">Thanks. I’ll reply to the email you gave, usually within a couple of days.</p>
        <button onClick={() => setStatus({ kind: "idle" })} className="mt-6 text-sm text-signal underline underline-offset-4">Send another</button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="card p-6 sm:p-8" aria-describedby="form-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
          {err("name")}
        </label>
        <label className="block text-sm font-medium">
          Email
          <input name="email" type="email" autoComplete="email" inputMode="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
          {err("email")}
        </label>
        <label className="block text-sm font-medium">
          What’s this about?
          <select name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} className={field}>
            {TOPICS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label className="block text-sm font-medium">
          Company or website <span className="font-normal text-dim">(optional)</span>
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Message
          <textarea name="message" rows={5} className={`${field} resize-y`} placeholder="What are you building, or what role is this?" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
          {err("message")}
        </label>
        {/* honeypot */}
        <label className="absolute -left-[9999px]" aria-hidden>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status.kind === "error" && (
        <p role="alert" className="mt-5 rounded-[14px] border border-[#e5484d]/50 px-4 py-3 text-sm">
          {status.msg}{" "}
          <a className="text-signal underline underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p id="form-note" className="text-sm text-dim">
          Prefer email? <a href={`mailto:${profile.email}`} className="text-foreground underline decoration-rule underline-offset-4 hover:decoration-signal">{profile.email}</a>
        </p>
        <button type="submit" disabled={status.kind === "sending"} className="btn btn-primary disabled:opacity-60">
          {status.kind === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
