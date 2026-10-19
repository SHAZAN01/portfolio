import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { flagship } from "@/content/flagship";
import { allProjectItems } from "./Projects";

const ROLE_COLOR: Record<string, string> = { "Data Science": "#ec4899", "AI Architecture": "#a855f7", "Data Engineering": "#2997ff" };

export function Flagship() {
  const total = allProjectItems().length;
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="wrap">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 id="projects-title" className="h-section mt-3">Flagship <span className="grad-text grad-sunset">work.</span></h2>
          </div>
          <Link href="/projects" className="btn btn-ghost">All {total} projects</Link>
        </div>

        <ul className="m-scroll mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {flagship.map((p, i) => {
            const ext = p.href.startsWith("http");
            const c = ROLE_COLOR[p.role];
            return (
              <li key={p.title} className="reveal" style={{ ["--d" as string]: `${(i % 3) * 80}ms` }}>
                <Link href={p.href} target={ext ? "_blank" : undefined}
                      className="grad-border card group relative flex h-full flex-col overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1">
                  <span aria-hidden className="absolute inset-x-0 top-0 h-[3px]" style={{ background: c }} />
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold" style={{ color: c }}>{p.role}</span>
                    <ArrowUpRight className="size-4 text-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </div>
                  <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-[15px] text-dim">{p.line}</p>
                  <p className="mt-4 rounded-xl bg-card-2 px-3 py-2 text-sm font-semibold">{p.result}</p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {p.stack.map((s) => <li key={s} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-dim">{s}</li>)}
                  </ul>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
