import Image from "next/image";
import Link from "next/link";
import { publications, statusLabel, thesis, activeProjects, type PubStatus } from "@/content/research";
import { asset } from "@/lib/photos";
import { Tilt } from "./Tilt";

const tone: Record<PubStatus, string> = {
  published: "bg-green/15 text-green",
  "to-appear": "bg-blue/15 text-blue",
  "under-review": "bg-orange/15 text-ember",
  "in-progress": "bg-card-2 text-dim",
};
const PHOTO: Record<string, string> = { "icai-2026": "/images/research/icai.jpg", "jucs-2026": "/images/research/jucs.jpg", "ranlp-2025": "/images/research/ranlp.jpg" };

export function Research() {
  const now = [
    { k: "Thesis", t: thesis.title.split(":")[0], d: "When does retrieval truly help LLM translation, and when is it just priming?" },
    { k: "Grant project", t: activeProjects[0].title, d: "Norris Research Program, Fall 2026." },
  ];
  return (
    <section id="research" className="section" aria-labelledby="research-title">
      <div className="wrap">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Research</p>
            <h2 id="research-title" className="h-section mt-3">Published <span className="grad-text grad-violet">research.</span></h2>
          </div>
          <p className="lede">Large language models for machine translation, evaluated with care.</p>
        </div>

        <ul className="mt-10 grid gap-4 lg:grid-cols-3">
          {publications.map((p, i) => {
            const photo = PHOTO[p.id] ? asset(PHOTO[p.id], "") : "";
            return (
              <li key={p.id} className="reveal" style={{ ["--d" as string]: `${i * 80}ms` }}>
                <article className="card flex h-full flex-col overflow-hidden">
                  {photo ? (
                    <Tilt className="relative aspect-[16/10] bg-card-2" max={7}>
                      <Image src={photo} alt={`Shazan at ${p.venue.split(",")[0]}`} fill sizes="(min-width:1024px) 360px, 100vw" className="object-cover" style={{ objectPosition: "50% 30%" }} />
                    </Tilt>
                  ) : (
                    <div aria-hidden className="relative aspect-[16/10] overflow-hidden bg-card-2">
                      <div className="grad-bg absolute -right-10 -top-10 size-48 rounded-full opacity-40 blur-3xl" />
                      <p className="absolute bottom-4 left-5 text-3xl font-bold tracking-tight text-foreground/80">J.UCS</p>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2">
                      <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${tone[p.status]}`}>{statusLabel[p.status]}</span>
                      <span className="text-xs text-dim">{p.year}</span>
                    </div>
                    <h3 className="mt-3 font-bold leading-snug">{p.title}</h3>
                    <p className="mt-2 text-sm text-dim">{p.venue.split(",")[0]}</p>
                    {p.project && <Link href={`/projects/${p.project}`} className="link mt-auto pt-4 text-sm font-medium">Read the summary</Link>}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <ul className="reveal mt-4 grid divide-y divide-line overflow-hidden rounded-[28px] border border-line bg-card md:grid-cols-2 md:divide-x md:divide-y-0">
          {now.map((n) => (
            <li key={n.k} className="p-6">
              <p className="flex items-center gap-2 text-xs text-dim"><span className="node-live size-2 rounded-full bg-blue" aria-hidden />{n.k} · in progress</p>
              <p className="mt-2 font-bold tracking-tight">{n.t}</p>
              <p className="mt-1 text-sm text-dim">{n.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
