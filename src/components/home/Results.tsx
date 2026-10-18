import { tspGap } from "@/content/flagship";
import { GapChart, RecoveryInterval } from "./ResultsCharts";
import { PipelineExplorer } from "./PipelineExplorer";

export function Results() {
  return (
    <section id="results" className="section" aria-labelledby="results-title">
      <div className="wrap">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Proven results</p>
            <h2 id="results-title" className="h-section mt-3">Measured, <span className="grad-text grad-ocean">not claimed.</span></h2>
          </div>
          <p className="lede">Results from published research and reproduced experiments, and the pipelines behind them.</p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <article className="reveal card min-w-0 p-6 sm:p-8 lg:col-span-7">
            <p className="text-sm text-dim">Reinforcement learning for routing</p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight">1.6% from optimal on TSP20</h3>
            <p className="mt-1 text-sm text-dim">Optimality gap vs. LKH across 1,000 test graphs. Lower is better.</p>
            <div className="mt-6"><GapChart data={tspGap} /></div>
            <p className="mt-2 flex items-center gap-2 text-xs text-dim"><span className="grad-bg inline-block h-2 w-5 rounded-full" /> This work <span className="ml-3 inline-block h-2 w-5 rounded-full bg-[var(--bar-muted)]" /> Classical baselines</p>
          </article>

          <article className="reveal card flex min-w-0 flex-col p-6 sm:p-8 lg:col-span-5" style={{ ["--d" as string]: "90ms" }}>
            <p className="text-sm text-dim">LLM post-editing · ICAI 2026</p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight">Fine-tuning quality, no retraining</h3>
            <p className="mt-1 text-sm text-dim">Share of the fine-tuning gain recovered, across four domains.</p>
            <div className="my-6 flex flex-1 items-center"><RecoveryInterval lo={87} hi={92} /></div>
            <dl className="grid grid-cols-3 gap-3 border-t border-line pt-4 text-center">
              <div><dt className="text-xs text-dim">Domains</dt><dd className="text-lg font-bold">4</dd></div>
              <div><dt className="text-xs text-dim">Retraining</dt><dd className="text-lg font-bold">None</dd></div>
              <div><dt className="text-xs text-dim">Recovered</dt><dd className="text-lg font-bold">87–92%</dd></div>
            </dl>
          </article>
        </div>

        <div className="reveal mt-4"><PipelineExplorer /></div>
      </div>
    </section>
  );
}
