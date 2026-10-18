"use client";

import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Quote, X, Check } from "lucide-react";
import { collaborators, mentees, recommendations } from "@/content/people";
import { Tilt } from "./Tilt";

const initials = (n: string) => n.replace(/^Dr\.\s*/, "").split(" ").map((w) => w[0]).slice(0, 2).join("");

export function People({ banner, mentorPhoto }: { banner: string; mentorPhoto?: string }) {
  return (
    <section id="people" className="section" aria-labelledby="people-title">
      <div className="wrap">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">People</p>
            <h2 id="people-title" className="h-section mt-3">Built with <span className="grad-text grad-sunset">great people.</span></h2>
          </div>
          <p className="lede">Advisors, co-authors, and the researchers I mentor.</p>
        </div>

        <Tilt className="reveal mt-10" max={4}>
          <div className="relative overflow-hidden rounded-[28px] border border-line">
            <Image src={banner} alt="Shazan Ansar: AI/ML, data engineering, MLOps, data science" width={1400} height={350}
                   sizes="(min-width:1180px) 1100px, 100vw" className="h-auto w-full" />
            <div aria-hidden className="shine pointer-events-none absolute inset-0" />
          </div>
        </Tilt>

        <div className="mt-4 grid gap-4 lg:grid-cols-12">
          <div className="grid gap-4 lg:col-span-5">
            {recommendations.map((r) => (
              <figure key={r.name} className="reveal grad-ring-card relative overflow-hidden rounded-[28px] p-7 sm:p-9">
                <Quote aria-hidden className="size-10 text-white/90" />
                <blockquote className="mt-5 text-[clamp(1.3rem,2.2vw,1.65rem)] font-semibold leading-snug tracking-tight text-white">
                  {r.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-white/15 font-bold text-white backdrop-blur">{initials(r.name)}</span>
                  <span>
                    <span className="block font-semibold text-white">{r.name}</span>
                    <span className="block text-sm text-white/75">{r.title}</span>
                    <span className="block text-xs text-white/60">{r.relation}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <Tabs.Root defaultValue="collab" className="reveal card overflow-hidden lg:col-span-7" style={{ ["--d" as string]: "90ms" }}>
            <Tabs.List aria-label="People" className="grid grid-cols-2 gap-1 border-b border-line p-2 sm:flex">
              {[["collab", `Collaborators · ${collaborators.length}`], ["mentor", `Mentoring · ${mentees.length}`]].map(([v, l]) => (
                <Tabs.Trigger key={v} value={v}
                  className="press rounded-full px-4 py-2 text-[13px] font-semibold text-dim transition-colors hover:text-foreground data-[state=active]:bg-foreground data-[state=active]:text-background sm:text-[15px]">
                  {l}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <Tabs.Content value="collab" className="panel-in p-4 outline-none sm:p-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {collaborators.map((p) => (
                  <li key={p.name} className="hover-lift flex gap-3.5 rounded-2xl bg-card-2 p-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl text-[15px] font-bold text-white"
                          style={{ background: `linear-gradient(135deg, ${p.hue[0]}, ${p.hue[1]})` }}>{initials(p.name)}</span>
                    <span className="min-w-0">
                      <span className="block font-semibold leading-snug">{p.name}</span>
                      <span className="block text-sm text-dim">{p.role} · {p.org}</span>
                      <span className="mt-2 flex flex-wrap gap-1">
                        {p.work.map((w) => <span key={w} className="rounded-full border border-line px-2 py-0.5 text-[11px] text-dim">{w}</span>)}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Tabs.Content>

            <Tabs.Content value="mentor" className="panel-in p-4 outline-none sm:p-6">
              <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                {mentorPhoto && (
                  <Tilt className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-card-2 sm:aspect-auto" max={8}>
                    <Image src={mentorPhoto} alt="Shazan mentoring student researchers" fill sizes="(min-width:640px) 300px, 100vw" className="object-cover" style={{ objectPosition: "50% 30%" }} />
                  </Tilt>
                )}
                <ul className="grid gap-2.5">
                  {mentees.map((m) => (
                    <li key={m.name}>
                      <Dialog.Root>
                        <Dialog.Trigger className="press hover-lift group flex w-full items-center gap-3 rounded-2xl bg-card-2 p-4 text-left">
                          <span className="min-w-0 flex-1">
                            <span className="block font-semibold">{m.name}</span>
                            <span className="block text-sm text-dim">{m.pair[0]} → {m.pair[1]} · {m.program}</span>
                          </span>
                          <ArrowRight className="size-4 shrink-0 text-dim transition-transform group-hover:translate-x-1" aria-hidden />
                        </Dialog.Trigger>
                        <Dialog.Portal>
                          <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
                          <Dialog.Content className="card fixed left-1/2 top-1/2 z-[80] w-[min(92vw,520px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden p-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
                            <div className="grad-ring-card p-6">
                              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/75">{m.program} · Mentee</p>
                              <Dialog.Title className="mt-1 text-2xl font-bold tracking-tight text-white">{m.name}</Dialog.Title>
                              <p className="mt-4 flex items-center gap-3 text-lg font-semibold text-white">
                                <span className="rounded-full bg-white/15 px-3 py-1">{m.pair[0]}</span>
                                <ArrowRight className="size-5" aria-hidden />
                                <span className="rounded-full bg-white/15 px-3 py-1">{m.pair[1]}</span>
                              </p>
                            </div>
                            <div className="p-6">
                              <Dialog.Description className="text-dim">{m.focus}</Dialog.Description>
                              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-dim">Mentorship</p>
                              <ul className="mt-3 space-y-2.5">
                                {m.contributions.map((c) => (
                                  <li key={c} className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-violet" aria-hidden />{c}</li>
                                ))}
                              </ul>
                            </div>
                            <Dialog.Close className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur" aria-label="Close">
                              <X className="size-4" />
                            </Dialog.Close>
                          </Dialog.Content>
                        </Dialog.Portal>
                      </Dialog.Root>
                    </li>
                  ))}
                  <li className="px-1 pt-1 text-xs text-dim">Tap a name for details.</li>
                </ul>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
}
