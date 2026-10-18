"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SocialIcon } from "@/components/site/SocialIcon";

export type GridItem = {
  title: string;
  area: string;
  desc: string;
  stack: string[];
  href?: string; // case study
  repo?: string;
  result?: string;
  with?: string;
};

const AREA_COLOR: Record<string, string> = {
  "AI & NLP": "#a855f7",
  "Machine Learning": "#ec4899",
  "Data Engineering": "#2997ff",
  "MLOps & Cloud": "#30d158",
  Analytics: "#ff9f0a",
  Software: "#64d2ff",
};

const INITIAL = 9;

export function ProjectGrid({ items }: { items: GridItem[] }) {
  const areas = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.area)))], [items]);
  const [area, setArea] = useState("All");
  const [all, setAll] = useState(false);
  const filtered = items.filter((i) => area === "All" || i.area === area);
  const shown = all ? filtered : filtered.slice(0, INITIAL);

  return (
    <div>
      <div className="-mx-[clamp(1.25rem,4vw,2.5rem)] flex gap-2 overflow-x-auto px-[clamp(1.25rem,4vw,2.5rem)] pb-1" role="group" aria-label="Filter projects">
        {areas.map((a) => {
          const n = a === "All" ? items.length : items.filter((i) => i.area === a).length;
          const on = a === area;
          return (
            <button key={a} aria-pressed={on} onClick={() => { setArea(a); setAll(false); }}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${on ? "bg-foreground text-background" : "bg-card text-dim hover:text-foreground"}`}>
              {a} <span className="ml-1 opacity-60">{n}</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => {
          const color = AREA_COLOR[p.area] ?? "#2997ff";
          const link = p.href ?? p.repo;
          return (
            <li key={p.title} className="grad-border card group relative flex flex-col overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1">
              <span aria-hidden className="absolute inset-x-0 top-0 h-[3px]" style={{ background: color }} />
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold" style={{ color }}>{p.area}</span>
                {p.repo && (
                  <span className="flex items-center gap-1 text-xs text-dim"><SocialIcon name="github" className="size-3.5" /> GitHub</span>
                )}
                {p.href && !p.repo && <span className="text-xs text-dim">Case study</span>}
              </div>
              <h3 className="mt-3 text-[1.2rem] font-bold leading-snug tracking-tight">
                {link ? (
                  <Link href={link} target={p.repo && !p.href ? "_blank" : undefined} className="after:absolute after:inset-0">
                    {p.title}
                  </Link>
                ) : p.title}
              </h3>
              <p className="mt-2 text-[15px] text-dim">{p.desc}</p>
              {p.result && <p className="mt-3 rounded-xl bg-card-2 px-3 py-2 text-sm font-medium">{p.result}</p>}
              <div className="mt-auto pt-5">
                <ul className="flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 4).map((s) => <li key={s} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-dim">{s}</li>)}
                </ul>
                {p.with && <p className="mt-3 text-xs text-dim">With {p.with}</p>}
              </div>
              {link && <ArrowUpRight aria-hidden className="absolute bottom-6 right-6 size-5 text-dim opacity-0 transition-opacity group-hover:opacity-100" />}
            </li>
          );
        })}
      </ul>

      {filtered.length > INITIAL && (
        <div className="mt-8 flex justify-center">
          <button onClick={() => setAll((v) => !v)} className="btn btn-ghost">
            {all ? "Show fewer" : `Show all ${filtered.length} projects`}
          </button>
        </div>
      )}
    </div>
  );
}
