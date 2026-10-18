export type Role = {
  org: string;
  title: string;
  period: string;
  current?: boolean;
  points: string[];
  links?: { label: string; href: string }[];
};

export const experience: Role[] = [
  {
    org: "California State University, Dominguez Hills",
    title: "Graduate Research Assistant, NLP and machine translation",
    period: "Jan 2026 – present",
    current: true,
    points: [
      "LLM post-editing for test-time domain adaptation: 87–92% of fine-tuning quality with no retraining (ICAI 2026).",
      "Evidence-graded survey on LLMs in neural machine translation, under review at J.UCS.",
      "Norris-funded study of LLM post-editing for Tagalog and Spanish.",
      "Mentorship of three undergraduate NMT researchers.",
    ],
  },
  {
    org: "California State University, Dominguez Hills",
    title: "Research Assistant, clinical NLP",
    period: "Feb 2025 – Aug 2025",
    points: [
      "Medical-domain English–Nepali translation pipeline with fine-tuned mBART and NLLB-200 in PyTorch.",
      "Domain-specific parallel corpus of 70k+ entries, curated and cleaned.",
      "Six-metric evaluation, error profiling, and an ethics review for clinical use.",
      "Published at RANLP 2025.",
    ],
  },
  {
    org: "Code for India Foundation",
    title: "Data Science in AI & ML Intern",
    period: "Mar 2023 – Nov 2023",
    points: [
      "Sentiment analysis models, trained and evaluated.",
      "EDA workflows surfacing trends, anomalies, and data quality issues.",
      "Automated preprocessing pipelines and stakeholder reporting.",
    ],
  },
  {
    org: "Mahatma Gandhi Institute of Technology, Hyderabad",
    title: "Program Manager, Idea Incubator (R&D)",
    period: "Undergraduate",
    points: ["Program leadership for the student R&D incubator."],
  },
];
