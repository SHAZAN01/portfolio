"use client";

import { Bar, BarChart, Cell, LabelList, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useReducedMotion } from "@/lib/useReducedMotion";

type Row = { method: string; gap: number; ours?: boolean };

export function GapChart({ data }: { data: Row[] }) {
  const reduce = useReducedMotion();
  return (
    <div className="h-[260px] w-full min-w-0 overflow-hidden" role="img" aria-label={`Optimality gap by method: ${data.map((d) => `${d.method} ${d.gap}%`).join(", ")}`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 48, bottom: 0, left: 0 }} barCategoryGap={10}>
          <defs>
            <linearGradient id="bar-ours" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#2997ff" />
              <stop offset="60%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <XAxis type="number" hide domain={[0, 18]} />
          <YAxis type="category" dataKey="method" width={150} tickLine={false} axisLine={false} tick={{ fill: "var(--dim)", fontSize: 13 }} />
          <Bar dataKey="gap" radius={[0, 10, 10, 0]} isAnimationActive={!reduce} animationDuration={1200}>
            {data.map((d) => <Cell key={d.method} fill={d.ours ? "url(#bar-ours)" : "var(--bar-muted)"} />)}
            <LabelList dataKey="gap" position="right" formatter={(v: unknown) => `${v}%`} style={{ fill: "var(--fg)", fontSize: 13, fontWeight: 600 }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function Gauge({ value, label }: { value: number; label: string }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-[220px] w-full min-w-0 overflow-hidden" role="img" aria-label={label}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart data={[{ v: value }]} innerRadius="74%" outerRadius="100%" startAngle={210} endAngle={-30}>
          <defs>
            <linearGradient id="gauge" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#2997ff" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="v" cornerRadius={20} fill="url(#gauge)" background={{ fill: "var(--card-2)" }} isAnimationActive={!reduce} animationDuration={1400} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <span className="display text-4xl">87–92%</span>
      </div>
    </div>
  );
}

/** Interval plot: where LLM post-editing lands between a frozen model (0%) and full fine-tuning (100%). */
export function RecoveryInterval({ lo, hi }: { lo: number; hi: number }) {
  const x = (v: number) => 24 + (v / 100) * 352;
  return (
    <svg viewBox="0 0 400 150" className="w-full" role="img"
         aria-label={`LLM post-editing recovers ${lo} to ${hi} percent of the gain from full fine-tuning, relative to a frozen model at 0 percent.`}>
      <defs>
        <linearGradient id="band" x1="0" x2="1"><stop offset="0" stopColor="#2997ff" /><stop offset="1" stopColor="#ec4899" /></linearGradient>
      </defs>
      {[0, 25, 50, 75, 100].map((t) => (
        <g key={t}>
          <line x1={x(t)} x2={x(t)} y1="40" y2="96" stroke="var(--line)" strokeDasharray="2 4" />
          <text x={x(t)} y="114" textAnchor="middle" fontSize="11" fill="var(--dim)">{t}%</text>
        </g>
      ))}
      <line x1={x(0)} x2={x(100)} y1="68" y2="68" stroke="var(--bar-muted)" strokeWidth="6" strokeLinecap="round" />
      <rect className="band-grow" x={x(lo)} y="56" width={x(hi) - x(lo)} height="24" rx="6" fill="url(#band)" />
      <circle cx={x(0)} cy="68" r="7" fill="var(--card)" stroke="var(--dim)" strokeWidth="2" />
      <circle cx={x(100)} cy="68" r="7" fill="var(--fg)" />
      <text x={x(0)} y="32" fontSize="11" fill="var(--dim)">Frozen NMT</text>
      <text x={x(100)} y="32" textAnchor="end" fontSize="11" fill="var(--dim)">Full fine-tune</text>
      <text x={x(hi)} y="138" textAnchor="end" fontSize="12" fontWeight="600" fill="var(--fg)">LLM post-edit · {lo}–{hi}%</text>
    </svg>
  );
}
