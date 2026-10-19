"use client";

import Link from "next/link";
import * as Tabs from "@radix-ui/react-tabs";
import { ArrowUpRight } from "lucide-react";
import { pipelines } from "@/content/pipelines";
import { DataCanvas } from "./DataCanvas";

const STAGE = ["#2997ff", "#6366f1", "#a855f7", "#ec4899", "#ff9f0a"];

/** Pipelines dashboard: DAG on a live data canvas, plus an inspector with real numbers. */
export function PipelineExplorer() {
  return (
    <Tabs.Root defaultValue={pipelines[0].key} className="card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <span className="relative flex size-2.5"><span className="absolute inline-flex size-full animate-ping rounded-full bg-green opacity-60 motion-reduce:hidden" /><span className="relative inline-flex size-2.5 rounded-full bg-green" /></span>
          <div>
            <p className="font-semibold leading-tight">Pipelines</p>
            <p className="text-xs text-dim">How each result was produced</p>
          </div>
        </div>
        <Tabs.List aria-label="Pipelines" className="-mx-1 flex gap-1 overflow-x-auto rounded-full border border-line bg-card-2 p-1">
          {pipelines.map((p) => (
            <Tabs.Trigger key={p.key} value={p.key}
              className="press shrink-0 rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-dim transition-colors hover:text-foreground data-[state=active]:bg-foreground data-[state=active]:text-background">
              {p.tab}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </div>

      {pipelines.map((p) => (
        <Tabs.Content key={p.key} value={p.key} className="panel-in outline-none">
          <div className="dag-canvas relative overflow-hidden border-b border-line px-5 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pt-6">
            <DataCanvas className="opacity-60" />
            <div className="relative flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
              <h3 className="text-lg font-bold leading-snug tracking-tight sm:text-2xl">{p.title}</h3>
              <span className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-green/15 px-2.5 py-1 font-semibold text-green">{p.status}</span>
                <span className="text-dim">{p.source}</span>
              </span>
            </div>

            {/* Mobile: compact stepper */}
            <ol className="relative mt-5 lg:hidden" aria-label={`${p.title} pipeline`}>
              {p.nodes.map((n, i) => (
                <li key={n.stage} className="step relative flex gap-3 pb-4 last:pb-0" style={{ ["--i" as string]: i, ["--c" as string]: STAGE[i] }}>
                  {i < p.nodes.length - 1 && <span aria-hidden className="step-line" style={{ ["--c1" as string]: STAGE[i], ["--c2" as string]: STAGE[i + 1] }} />}
                  <span className="relative z-[1] grid size-7 shrink-0 place-items-center rounded-full text-[11px] font-bold text-white" style={{ background: STAGE[i] }}>{i + 1}</span>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <p className="flex flex-wrap items-baseline justify-between gap-x-2">
                      <span className="font-semibold leading-snug">{n.title}</span>
                      <span className="font-mono text-[10px] text-dim">{n.tool}</span>
                    </p>
                    <p className="text-[13px] leading-snug text-dim">{n.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Desktop: DAG */}
            <ol className="dag relative mt-7 hidden gap-0 lg:grid lg:grid-cols-5" aria-label={`${p.title} pipeline`}>
              {p.nodes.map((n, i) => (
                <li key={n.stage} className="relative flex">
                  {i > 0 && <span aria-hidden className="edge" style={{ ["--i" as string]: i, ["--c1" as string]: STAGE[i - 1], ["--c2" as string]: STAGE[i] }} />}
                  <div className="node group relative z-[1] min-w-0 flex-1 overflow-hidden rounded-2xl border border-line bg-card/90 p-4 backdrop-blur lg:mx-3"
                       style={{ ["--i" as string]: i, ["--c" as string]: STAGE[i] }}>
                    <span aria-hidden className="absolute inset-x-0 top-0 h-[3px]" style={{ background: STAGE[i] }} />
                    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: STAGE[i] }}>
                      <span className="grid size-5 place-items-center rounded-md text-[10px] text-white" style={{ background: STAGE[i] }}>{i + 1}</span>
                      {n.stage}
                    </p>
                    <p className="mt-2 font-semibold leading-snug">{n.title}</p>
                    <p className="mt-1 text-[13px] leading-snug text-dim">{n.detail}</p>
                    <p className="mt-3 inline-block rounded-full border border-line bg-card-2 px-2 py-0.5 font-mono text-[11px] text-dim">{n.tool}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid grid-cols-3 gap-px bg-line lg:grid-cols-[repeat(3,minmax(0,1fr))_1.4fr]">
            {p.kpis.map((k) => (
              <div key={k.label} className="bg-card p-4 sm:p-6">
                <p className="display grad-text text-2xl sm:text-4xl">{k.value}</p>
                <p className="mt-1 text-xs text-dim sm:text-sm">{k.label}</p>
              </div>
            ))}
            <div className="col-span-3 flex flex-col justify-between gap-3 bg-card p-5 sm:p-6 lg:col-span-1">
              <p className="text-[15px]"><span className="font-semibold">Outcome.</span> <span className="text-dim">{p.outcome}</span></p>
              <Link href={p.href} target={p.href.startsWith("http") ? "_blank" : undefined} className="link inline-flex items-center gap-1 text-sm font-medium">
                {p.href.startsWith("http") ? "View the code" : "Read the case study"} <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
