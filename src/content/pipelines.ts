// Real pipelines from published work and public repos. Every node is a fact you can defend.
export type Node = { stage: string; title: string; detail: string; tool: string };
export type Kpi = { value: string; label: string };
export type Pipeline = { key: string; tab: string; title: string; source: string; status: string; href: string; outcome: string; kpis: Kpi[]; nodes: Node[] };

export const pipelines: Pipeline[] = [
  {
    key: "clinical",
    tab: "Clinical NMT",
    title: "English–Nepali clinical translation",
    source: "RANLP 2025",
    status: "Published",
    kpis: [{ value: "70k+", label: "sentence pairs" }, { value: "2", label: "models fine-tuned" }, { value: "6", label: "evaluation metrics" }],
    href: "/projects/clinical-translation",
    outcome: "NLLB-200 was more accurate and hallucinated less on clinical text.",
    nodes: [
      { stage: "Ingest", title: "Clinical text", detail: "English–Nepali medical domain", tool: "Python" },
      { stage: "Curate", title: "70k+ sentence pairs", detail: "Cleaned and aligned corpus", tool: "Python" },
      { stage: "Train", title: "Fine-tune two models", detail: "mBART and NLLB-200", tool: "PyTorch · HF" },
      { stage: "Evaluate", title: "6 metrics", detail: "BLEU, chrF++, METEOR, BERTScore, COMET, perplexity", tool: "Metric suite" },
      { stage: "Audit", title: "Errors and ethics", detail: "Error profiling for clinical use", tool: "Human review" },
    ],
  },
  {
    key: "ape",
    tab: "LLM post-editing",
    title: "Test-time domain adaptation without retraining",
    source: "ICAI 2026 · Springer CCIS",
    status: "To appear",
    kpis: [{ value: "87–92%", label: "fine-tuning gain recovered" }, { value: "4", label: "domains" }, { value: "0", label: "retraining runs" }],
    href: "/projects/llm-post-editing",
    outcome: "Recovered 87–92% of a fully fine-tuned model's gain across four domains.",
    nodes: [
      { stage: "Input", title: "Source text", detail: "Four target domains", tool: "Datasets" },
      { stage: "Draft", title: "Frozen NMT", detail: "General model, weights untouched", tool: "NMT" },
      { stage: "Adapt", title: "LLM post-edit", detail: "Domain-aware edit of the draft", tool: "LLM" },
      { stage: "Compare", title: "vs. fine-tuning", detail: "Same domains, same metrics", tool: "Evaluation" },
      { stage: "Result", title: "87–92% recovered", detail: "Zero retraining cost", tool: "Analysis" },
    ],
  },
  {
    key: "markets",
    tab: "Market data platform",
    title: "Real-time capital-markets lakehouse",
    source: "GitHub · autotradex-phase1, medallion-capital-markets",
    status: "Built",
    kpis: [{ value: "3", label: "medallion layers" }, { value: "Live", label: "streaming ingestion" }, { value: "5", label: "pipeline stages" }],
    href: "https://github.com/SHAZAN01/medallion-capital-markets",
    outcome: "Raw ticks become query-ready positions and PnL.",
    nodes: [
      { stage: "Stream", title: "Market WebSocket", detail: "Live price feed", tool: "WebSockets" },
      { stage: "Queue", title: "Kafka topics", detail: "Durable, replayable ingestion", tool: "Kafka" },
      { stage: "Bronze", title: "Raw trades", detail: "Stored as landed", tool: "Parquet" },
      { stage: "Silver", title: "Cleaned tables", detail: "Typed and validated", tool: "DuckDB" },
      { stage: "Gold", title: "Positions and PnL", detail: "Analytics-ready views", tool: "SQL · FastAPI" },
    ],
  },
  {
    key: "rl",
    tab: "RL for routing",
    title: "Neural combinatorial optimization, reproduced",
    source: "GitHub · neural-combinatorial-rl-tsp",
    status: "Reproduced",
    kpis: [{ value: "1.6%", label: "optimality gap" }, { value: "1,000", label: "test graphs" }, { value: "~2×", label: "smaller greedy gap with critic" }],
    href: "https://github.com/SHAZAN01/neural-combinatorial-rl-tsp",
    outcome: "1.6% from near-optimal; the critic baseline halved the greedy gap.",
    nodes: [
      { stage: "Data", title: "TSP20 graphs", detail: "1,000-graph test set", tool: "Generated" },
      { stage: "Model", title: "Pointer network", detail: "Attention over cities", tool: "PyTorch 2" },
      { stage: "Train", title: "REINFORCE", detail: "Critic vs. moving-average baseline", tool: "A100 GPU" },
      { stage: "Decode", title: "Greedy and sampling", detail: "Sampling with 1,280 candidates", tool: "Batched search" },
      { stage: "Benchmark", title: "vs. LKH", detail: "Optimality gap per method", tool: "Evaluation" },
    ],
  },
];
