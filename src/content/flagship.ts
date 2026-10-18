// Six flagship projects on the homepage. One line each, a result, a link.
export type Flagship = {
  title: string;
  role: "Data Science" | "AI Architecture" | "Data Engineering";
  line: string;
  result: string;
  stack: string[];
  href: string;
};

export const flagship: Flagship[] = [
  {
    title: "LLM Post-Editing for Domain Adaptation",
    role: "AI Architecture",
    line: "A frozen translation model drafts; an LLM adapts the draft to the target domain at inference time.",
    result: "87–92% of fine-tuning quality, zero retraining",
    stack: ["LLMs", "NMT", "Evaluation"],
    href: "/projects/llm-post-editing",
  },
  {
    title: "Clinical Machine Translation",
    role: "Data Science",
    line: "Fine-tuned mBART and NLLB-200 for English–Nepali medical text, evaluated on six metrics with an ethics review.",
    result: "70k+ sentence corpus · RANLP 2025",
    stack: ["PyTorch", "Hugging Face", "COMET"],
    href: "/projects/clinical-translation",
  },
  {
    title: "Reinforcement Learning for Routing",
    role: "Data Science",
    line: "Reproduced Google Brain's pointer-network approach to the travelling salesman problem on an A100.",
    result: "1.6% from optimal; critic baseline halved the gap",
    stack: ["PyTorch", "RL", "A100"],
    href: "https://github.com/SHAZAN01/neural-combinatorial-rl-tsp",
  },
  {
    title: "Real-Time Capital-Markets Platform",
    role: "Data Engineering",
    line: "Live market data streamed through Kafka into a medallion lakehouse that produces positions and PnL.",
    result: "Bronze → Silver → Gold, streaming to analytics",
    stack: ["Kafka", "DuckDB", "FastAPI"],
    href: "https://github.com/SHAZAN01/medallion-capital-markets",
  },
  {
    title: "Transformer Architecture Study",
    role: "Data Science",
    line: "Controlled ablation of feed-forward designs in a GPT model: width, activation, and gating.",
    result: "Width beat activation; SwiGLU most parameter-efficient",
    stack: ["PyTorch", "GPT", "Ablations"],
    href: "https://github.com/SHAZAN01/521-final-research-ffn-ablation-study-topic-5b",
  },
  {
    title: "RAG Analytics Assistant",
    role: "AI Architecture",
    line: "Grounded question-answering over business data with filtered retrieval, routing, and caching.",
    result: "Grounded answers with controlled latency and cost",
    stack: ["RAG", "Embeddings", "Caching"],
    href: "/projects/rag-analytics-assistant",
  },
];

// Real numbers from the TSP reproduction README (optimality gap vs LKH on 1,000 TSP20 graphs).
export const tspGap = [
  { method: "RL + sampling", gap: 1.6, ours: true },
  { method: "NN + 2-opt", gap: 2.6 },
  { method: "RL greedy (critic)", gap: 4.6, ours: true },
  { method: "RL greedy (moving avg)", gap: 9.0, ours: true },
  { method: "Nearest neighbour", gap: 16.9 },
];
