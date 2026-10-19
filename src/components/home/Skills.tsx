"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { Check } from "lucide-react";
import { roleSkills, skillCount } from "@/content/skills";

const LEVELS = [
  { key: "advanced", label: "Advanced", dot: "grad-bg" },
  { key: "core", label: "Core", dot: "bg-blue" },
  { key: "foundations", label: "Foundations", dot: "bg-faint" },
] as const;

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="wrap">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Skills</p>
            <h2 id="skills-title" className="h-section mt-3">Built for <span className="grad-text grad-aurora">three roles.</span></h2>
          </div>
          <p className="lede">{skillCount} skills, organized by role, from advanced to foundational.</p>
        </div>

        <Tabs.Root defaultValue="ds" className="reveal card mt-10 overflow-hidden">
          <Tabs.List aria-label="Role" className="grid grid-cols-3 gap-1 border-b border-line p-2 sm:flex">
            {roleSkills.map((r) => (
              <Tabs.Trigger key={r.key} value={r.key}
                className="rounded-full px-2 py-2 text-[13px] font-semibold text-dim transition-colors hover:text-foreground data-[state=active]:bg-foreground data-[state=active]:text-background sm:px-5 sm:text-[15px]">
                {r.role}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {roleSkills.map((r) => (
            <Tabs.Content key={r.key} value={r.key} className="panel-in p-6 outline-none sm:p-8">
              <p className="text-lg font-semibold tracking-tight">{r.summary}</p>
              <div className="mt-6 grid gap-8 md:grid-cols-3">
                {LEVELS.map((l) => (
                  <div key={l.key}>
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-dim">
                      <span className={`size-2 rounded-full ${l.dot}`} aria-hidden />{l.label}
                    </p>
                    <ul className="skill-list mt-4 space-y-2.5">
                      {r[l.key].map((s) => (
                        <li key={s} className="flex items-start gap-2.5 text-[15px]">
                          <Check className={`mt-0.5 size-4 shrink-0 ${l.key === "advanced" ? "text-violet" : l.key === "core" ? "text-blue" : "text-faint"}`} aria-hidden />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}
