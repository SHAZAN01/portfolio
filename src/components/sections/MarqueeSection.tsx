"use client"
const tech = [
  "Python","PyTorch","AWS","Apache Spark","Kafka","Airflow","Delta Lake",
  "HuggingFace","FastAPI","Docker","MLflow","LangChain","FAISS","SQL",
  "TensorFlow","scikit-learn","Pandas","Tableau","NLLB-200","mBART",
  "SageMaker","ECS","Grafana","dbt","Kubernetes",
]

export function MarqueeSection() {
  const items = [...tech, ...tech]
  return (
    <div
      className="overflow-hidden py-4"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(8,8,15,0.8)",
      }}
    >
      <div
        className="flex w-max"
        style={{ animation: "marquee 50s linear infinite" }}
      >
        {items.map((t, i) => (
          <span
            key={i}
            className="text-xs font-medium uppercase whitespace-nowrap"
            style={{
              color: "var(--text3)",
              letterSpacing: "0.08em",
              padding: "0 28px",
              borderRight: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}