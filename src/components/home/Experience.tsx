import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { certifications } from "@/content/certifications";
import Image from "next/image";
import { CertLogo } from "./CertLogo";
import { asset } from "@/lib/photos";
import { Tilt } from "./Tilt";

export function Experience() {
  const roles = experience.filter((r) => r.period !== "Undergraduate");
  const lead = experience.find((r) => r.period === "Undergraduate");
  const leadPhoto = asset("/images/me/leadership.jpg", "");
  return (
    <section id="experience" className="section" aria-labelledby="exp-title">
      <div className="wrap">
        <div className="reveal">
          <p className="eyebrow">Experience</p>
          <h2 id="exp-title" className="h-section mt-3">Experience &amp; <span className="grad-text grad-ocean">credentials.</span></h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <ol className="reveal card divide-y divide-line overflow-hidden lg:col-span-7">
            {roles.map((r) => (
              <li key={r.title + r.period} className="p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-bold tracking-tight">{r.title}</h3>
                  <span className="text-sm text-dim">{r.period}</span>
                </div>
                <p className="text-sm text-dim">{r.org}</p>
                <p className="mt-3 text-[15px]">{r.points[0]}</p>
              </li>
            ))}
            <li className="p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-bold tracking-tight">M.S. Computer Science</h3>
                <span className="text-sm text-dim">{profile.education.period}</span>
              </div>
              <p className="text-sm text-dim">{profile.education.school} · GPA {profile.education.gpa}</p>
            </li>
          </ol>

          <div className="grid gap-4 lg:col-span-5">
            <ul className="reveal card divide-y divide-line overflow-hidden" style={{ ["--d" as string]: "90ms" }}>
              {certifications.map((c) => (
                <li key={c.id}>
                  {(() => {
                    const body = (
                      <>
                        <CertLogo brand={c.brand} />
                        <span className="min-w-0">
                          <span className="block font-semibold leading-snug">{c.name}</span>
                          <span className="text-sm text-dim">{c.issuer} · {c.issued}{c.expires ? ` – ${c.expires}` : ""}</span>
                        </span>
                      </>
                    );
                    return c.url ? (
                      <a href={c.url} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 transition-colors hover:bg-card-2">{body}</a>
                    ) : (
                      <div className="flex items-center gap-4 p-4">{body}</div>
                    );
                  })()}
                </li>
              ))}
            </ul>
            {lead && (
              <article className="reveal card overflow-hidden" style={{ ["--d" as string]: "160ms" }}>
                {leadPhoto && (
                  <Tilt className="relative aspect-[16/9] bg-card-2" max={6}>
                    <Image src={leadPhoto} alt="Shazan speaking on a leadership panel" fill sizes="(min-width:1024px) 460px, 100vw"
                           className="object-cover" style={{ objectPosition: "90% 35%" }} />
                    <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">Leadership</span>
                  </Tilt>
                )}
                <div className="p-5">
                  <h3 className="font-bold tracking-tight">{lead.title}</h3>
                  <p className="text-sm text-dim">{lead.org}</p>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
