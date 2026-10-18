// Every project shown on the homepage grid (case studies are added automatically from content/projects/*.mdx).
// `repo` links to GitHub. `result` is only shown when it's a fact you can defend.

export type Area = "AI & NLP" | "Machine Learning" | "Data Engineering" | "MLOps & Cloud" | "Analytics" | "Software";

export type Project = {
  title: string;
  area: Area;
  desc: string;
  stack: string[];
  repo?: string;
  result?: string;
  with?: string;
};

const gh = (r: string) => `https://github.com/SHAZAN01/${r}`;

export const projects: Project[] = [
  // ── From GitHub ────────────────────────────────────────────
  {
    title: "Neural combinatorial optimization with RL",
    area: "Machine Learning",
    desc: "Reproduced Google Brain's pointer-network + REINFORCE approach to the travelling salesman problem in PyTorch 2 on an A100, and tested whether a critic or moving-average baseline trains better.",
    stack: ["PyTorch", "Reinforcement learning", "Pointer networks", "A100"],
    repo: gh("neural-combinatorial-rl-tsp"),
    result: "1.6% from near-optimal with sampling; the critic halved the greedy gap (4.6% vs 9.0%).",
    with: "Saina Zardosht",
  },
  {
    title: "FFN ablation study in transformer LLMs",
    area: "AI & NLP",
    desc: "Trained a small GPT on Tiny Shakespeare and compared feed-forward designs (none, GELU 1x/4x, ReLU 4x, SwiGLU) on loss, perplexity, parameters, and convergence.",
    stack: ["PyTorch", "Transformers", "GPT", "Ablation design"],
    repo: gh("521-final-research-ffn-ablation-study-topic-5b"),
    result: "FFN width mattered more than activation; SwiGLU was the most parameter-efficient.",
  },
  {
    title: "Medallion architecture for capital markets",
    area: "Data Engineering",
    desc: "Bronze, silver, and gold layers for trading data: raw ingestion, cleaned tables, derived positions, and PnL views.",
    stack: ["Python", "DuckDB", "Parquet", "SQL"],
    repo: gh("medallion-capital-markets"),
  },
  {
    title: "AutoTradeX: real-time market ingestion",
    area: "Data Engineering",
    desc: "Phase one of a multi-agent trading system: live market data streamed over WebSockets into Kafka, served through FastAPI.",
    stack: ["Kafka", "WebSockets", "FastAPI", "Python"],
    repo: gh("autotradex-phase1"),
  },
  {
    title: "California housing price API",
    area: "MLOps & Cloud",
    desc: "A Dockerised prediction service that separates model training from inference, with validated inputs and auto-generated API docs.",
    stack: ["FastAPI", "scikit-learn", "Docker", "Pydantic"],
    repo: gh("docker-ds-housing-api"),
  },
  {
    title: "Java web app with AWS CI/CD",
    area: "MLOps & Cloud",
    desc: "Developed and deployed a Java web app entirely in the cloud, with an automated release pipeline around it.",
    stack: ["AWS EC2", "CodeArtifact", "CI/CD", "Java"],
    repo: gh("nextwork-web-project"),
  },
  {
    title: "Power consumption forecasting with LSTMs",
    area: "Machine Learning",
    desc: "Modelled the power consumption of individual devices across a building block with recurrent neural networks.",
    stack: ["LSTM", "Time series", "Python"],
    repo: gh("Power_consumption_LSTM"),
  },
  {
    title: "Spam email detection",
    area: "AI & NLP",
    desc: "Text classification pipeline separating spam from legitimate email.",
    stack: ["NLP", "scikit-learn", "Python"],
    repo: gh("Spam_email_Detection"),
  },
  {
    title: "Google Play Store analysis",
    area: "Analytics",
    desc: "What makes an app perform well: size, price, category, ratings? Analysis to pick apps worth boosting in visibility.",
    stack: ["Pandas", "Matplotlib", "Seaborn"],
    repo: gh("Google-Play-Store-Analysis-Using-Python"),
  },
  {
    title: "Data analysis toolkit",
    area: "Analytics",
    desc: "Reusable notebooks for cleaning, preprocessing, and visualising datasets.",
    stack: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
    repo: gh("Data_Analysis"),
  },
  {
    title: "Bounded buffer with producer-consumer threads",
    area: "Software",
    desc: "Multiple producer and consumer threads sharing a five-slot circular buffer, with correct synchronisation.",
    stack: ["C", "Threads", "Concurrency"],
    repo: gh("541_proj2_Mohammed_Zardosht"),
    with: "Saina Zardosht",
  },
  {
    title: "Stack-based calculator",
    area: "Software",
    desc: "Expression evaluation built on a stack data structure.",
    stack: ["Java", "Data structures"],
    repo: gh("CSC521-proj4-Mohammed-Mmojekwu-Haouchine"),
  },
  {
    title: "Django web application",
    area: "Software",
    desc: "A complete Django project with models, views, and templates.",
    stack: ["Django", "Python"],
    repo: gh("django_pro"),
  },

  // ── Portfolio builds (add repo links when public) ──────────
  { title: "RAG system for domain knowledge", area: "AI & NLP", desc: "Retrieval over domain documents with fine-tuned models and vector search.", stack: ["FAISS", "Hugging Face", "FastAPI"] },
  { title: "LLM monitoring and cost framework", area: "MLOps & Cloud", desc: "Tracks latency, token usage, failure rates, and output quality across LLM workloads.", stack: ["CloudWatch", "Grafana", "Docker"] },
  { title: "LLM API with guardrails", area: "AI & NLP", desc: "Inference API with authentication, rate limiting, and policy-based output checks.", stack: ["FastAPI", "Docker", "AWS Lambda"] },
  { title: "Drift-triggered retraining pipeline", area: "MLOps & Cloud", desc: "Detects data drift and triggers controlled model retraining.", stack: ["Airflow", "Docker", "scikit-learn"] },
  { title: "Streaming feature pipelines", area: "Data Engineering", desc: "Real-time feature pipelines with versioning and validation for model inference.", stack: ["Kafka", "Spark", "S3"] },
  { title: "Feature engineering platform", area: "Data Engineering", desc: "ETL/ELT jobs turning raw operational data into model-ready feature tables.", stack: ["PySpark", "Airflow", "SQL"] },
  { title: "Cloud cost and observability pipeline", area: "MLOps & Cloud", desc: "Aggregates cloud usage metrics for cost and reliability visibility.", stack: ["AWS", "Spark", "CloudWatch"] },
  { title: "Enterprise medallion data lake", area: "Data Engineering", desc: "Bronze, silver, and gold layers on S3 for analytics and ML workloads.", stack: ["S3", "Spark", "Delta Lake"] },
  { title: "NLP model selection framework", area: "Analytics", desc: "Statistical comparison of model variants so promotion decisions are reproducible.", stack: ["SciPy", "MLflow", "SQL"] },
  { title: "Feature impact analysis", area: "Analytics", desc: "SHAP analysis quantifying which features drive a model's predictions.", stack: ["SHAP", "scikit-learn", "Pandas"] },
  { title: "Data quality and bias checks", area: "MLOps & Cloud", desc: "Monitors quality, schema changes, and subgroup fairness across ML datasets.", stack: ["Great Expectations", "SQL", "Airflow"] },
  { title: "End-to-end multilingual NLP pipeline", area: "AI & NLP", desc: "Ingestion through training, evaluation, and error analysis for multilingual models.", stack: ["PyTorch", "Hugging Face", "AWS"] },
  { title: "ML monitoring dashboards", area: "Analytics", desc: "Pipeline health, model performance, and compute cost in one view.", stack: ["Tableau", "Grafana", "Python"] },
];
