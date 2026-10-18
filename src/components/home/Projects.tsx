import Link from "next/link";
import { getAllProjects, publicMetrics } from "@/lib/projects";
import { projects as more } from "@/content/projects";
import { ProjectGrid, type GridItem } from "./ProjectGrid";

const ART = [
  "radial-gradient(120% 120% at 0% 0%, #2997ff 0%, transparent 55%), radial-gradient(120% 120% at 100% 100%, #a855f7 0%, transparent 55%)",
  "radial-gradient(120% 120% at 100% 0%, #ec4899 0%, transparent 55%), radial-gradient(120% 120% at 0% 100%, #ff9f0a 0%, transparent 55%)",
  "radial-gradient(120% 120% at 0% 100%, #30d158 0%, transparent 55%), radial-gradient(120% 120% at 100% 0%, #2997ff 0%, transparent 55%)",
  "radial-gradient(120% 120% at 100% 100%, #a855f7 0%, transparent 55%), radial-gradient(120% 120% at 0% 0%, #64d2ff 0%, transparent 55%)",
  "radial-gradient(120% 120% at 50% 0%, #ff9f0a 0%, transparent 55%), radial-gradient(120% 120% at 50% 100%, #ec4899 0%, transparent 55%)",
];

export function allProjectItems(): GridItem[] {
  const cases = getAllProjects().map<GridItem>((p) => ({
    title: p.title,
    area: p.kind === "Research" ? "AI & NLP" : p.tags.includes("Data engineering") ? "Data Engineering" : p.tags.includes("MLOps") ? "MLOps & Cloud" : "AI & NLP",
    desc: p.summary,
    stack: p.stack ?? [],
    href: `/projects/${p.slug}`,
    result: (() => { const n = publicMetrics(p.metrics).find((x) => /\d/.test(x.value)); return n ? `${n.value} ${n.label.toLowerCase()}` : undefined; })(),
  }));
  return [...cases, ...more];
}

export function Projects() {
  const cases = getAllProjects();
  const items = allProjectItems();
  const others = items.filter((i) => !i.href); // case studies are already featured above

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="wrap">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 id="projects-title" className="h-section mt-3">
              {items.length} <span className="grad-text">projects.</span>
            </h2>
          </div>
          <p className="lede">Research, data platforms, and machine learning systems. Case studies first.</p>
        </div>

        {/* Featured case studies */}
        <ul className="mt-14 grid gap-4 lg:grid-cols-6">
          {cases.map((p, i) => {
            const m = publicMetrics(p.metrics).filter((x) => /\d/.test(x.value));
            const big = i < 2;
            return (
              <li key={p.slug} className={`reveal ${big ? "lg:col-span-3" : "lg:col-span-2"}`}>
                <Link href={`/projects/${p.slug}`} className="card group relative flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                  <div className={`relative ${big ? "h-48 sm:h-56" : "h-36"} overflow-hidden`}>
                    <div aria-hidden className="absolute inset-0 opacity-90 transition-transform duration-700 group-hover:scale-110" style={{ background: ART[i % ART.length] }} />
                    <div aria-hidden className="absolute inset-0 bg-[linear-gradient(transparent_60%,var(--card))]" />
                    {p.pipeline && (
                      <ol aria-hidden className="absolute inset-x-6 bottom-6 flex flex-wrap gap-1.5">
                        {p.pipeline.slice(0, big ? 5 : 3).map((s) => (
                          <li key={s} className="rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">{s}</li>
                        ))}
                      </ol>
                    )}
                    <span className="absolute left-6 top-5 rounded-full bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">{p.kind}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 pt-4">
                    <p className="text-xs text-dim">{p.status}</p>
                    <h3 className={`mt-1.5 font-bold leading-tight tracking-tight ${big ? "text-2xl sm:text-[1.75rem]" : "text-xl"}`}>{p.title}</h3>
                    <p className="mt-2 text-[15px] text-dim">{p.summary}</p>
                    {m.length > 0 && (
                      <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                        {m.slice(0, big ? 3 : 2).map((x) => (
                          <div key={x.label}>
                            <dd className="text-2xl font-bold tracking-tight">{x.value}</dd>
                            <dt className="text-xs text-dim">{x.label}</dt>
                          </div>
                        ))}
                      </dl>
                    )}
                    <span className="link mt-auto pt-5 text-[15px] font-medium">Read the case study</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-20 flex flex-wrap items-end justify-between gap-4">
          <h3 className="text-2xl font-bold tracking-tight">More projects</h3>
          <Link href="/projects" className="link text-sm">Open the full list</Link>
        </div>
        <div className="mt-6">
          <ProjectGrid items={others} />
        </div>
      </div>
    </section>
  );
}
