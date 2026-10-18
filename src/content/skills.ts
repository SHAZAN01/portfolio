// Skills by target role, ordered advanced → foundations.
export type RoleSkills = { key: string; role: string; summary: string; advanced: string[]; core: string[]; foundations: string[] };

export const roleSkills: RoleSkills[] = [
  {
    key: "ds",
    role: "Data Scientist",
    summary: "Rigorous modeling, experimentation, and evaluation.",
    advanced: ["Causal & counterfactual inference", "Hierarchical & mixed-effects models", "Experiment design & power analysis", "LLM fine-tuning & evaluation", "Deep learning (PyTorch, TensorFlow)", "Reinforcement learning", "Model interpretability (SHAP)", "Ablation studies"],
    core: ["Supervised & unsupervised ML", "Feature engineering", "Time-series forecasting", "NLP & transformers", "Hypothesis testing & bootstrap CIs", "A/B testing", "scikit-learn, Pandas, NumPy"],
    foundations: ["Python, R, SQL", "Statistics & probability", "Linear algebra", "EDA & visualization", "Tableau, Matplotlib, Seaborn"],
  },
  {
    key: "ai",
    role: "AI Architect",
    summary: "Designing LLM systems that are reliable, measurable, and affordable.",
    advanced: ["LLM system design", "Retrieval-augmented generation", "Evaluation harnesses & regression gates", "Guardrails & safety checks", "Latency and cost optimization", "AWS solutions architecture"],
    core: ["Embeddings & vector search (FAISS)", "Prompt engineering", "Model serving (FastAPI)", "LangChain", "Hugging Face", "MLflow", "Docker & Kubernetes"],
    foundations: ["REST API design", "Cloud fundamentals (AWS, GCP)", "CI/CD", "Git", "Linux"],
  },
  {
    key: "de",
    role: "Data Engineer",
    summary: "From raw events to trusted, query-ready data.",
    advanced: ["Lakehouse & medallion architecture", "Streaming pipelines (Kafka)", "Data quality & pipeline integrity", "Distributed processing (Spark, PySpark)", "Orchestration (Airflow)", "Schema evolution & late-arriving data"],
    core: ["ETL / ELT", "Delta Lake, Parquet, DuckDB", "BigQuery", "AWS S3, Glue, EMR, Lambda", "dbt", "Great Expectations"],
    foundations: ["SQL", "Data modeling", "Python", "Bash", "Data structures"],
  },
];

export const skillCount = roleSkills.reduce((n, r) => n + r.advanced.length + r.core.length + r.foundations.length, 0);
