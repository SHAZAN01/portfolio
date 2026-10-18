// Publications, thesis, active projects, mentoring.
// status drives the badge: be precise, never upgrade a status early.

export type PubStatus = "published" | "to-appear" | "under-review" | "in-progress";

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status: PubStatus;
  statusNote?: string;
  summary: string;
  url?: string; // add DOI / ACL Anthology / Springer link once live
  project?: string; // slug of related case study
};

export const statusLabel: Record<PubStatus, string> = {
  published: "Published",
  "to-appear": "Accepted, to appear",
  "under-review": "Under review",
  "in-progress": "In progress",
};

export const publications: Publication[] = [
  {
    id: "icai-2026",
    title:
      "Large Language Model-Based Automatic Post-Editing for Test-Time Domain Adaptation in Neural Machine Translation",
    authors: ["Shazan Ansar Mohammed", "Benyamin Ahmadnia", "Sahar Hooshmand", "Li Zhou"],
    venue: "ICAI 2026, 9th International Conference on Applied Informatics (Springer CCIS)",
    year: 2026,
    status: "to-appear",
    summary:
      "Keep the translation model frozen, let it draft, and have an LLM edit the draft for the target domain. No retraining. Across four domains this recovered 87–92% of the gain of a fully fine-tuned model.",
    project: "llm-post-editing",
  },
  {
    id: "jucs-2026",
    title: "Large Language Models for Neural Machine Translation: An Evidence-Graded Survey of Methods, Evaluation, and Deployment",
    authors: ["Benyamin Ahmadnia", "Sumaiya Shaikh", "Bibek Poudel", "Shazan Ansar Mohammed"],
    venue: "Journal of Universal Computer Science (J.UCS)",
    year: 2026,
    status: "under-review",
    statusNote: "Third review round",
    summary:
      "Grades, rather than catalogs, the evidence that LLMs match dedicated NMT systems: 40 sources, 27 primary studies, an A/B/C appraisal scheme, and a six-threat validity audit.",
  },
  {
    id: "ranlp-2025",
    title: "Advancing Clinical Translation in Nepali through Fine-Tuned Multilingual Models",
    authors: ["Benyamin Ahmadnia", "Sumaiya Shaikh", "Bibek Poudel", "Shazan Ansar", "Sahar Hooshmand"],
    venue: "RANLP 2025, Recent Advances in Natural Language Processing",
    year: 2025,
    status: "published",
    summary:
      "A domain-adapted English–Nepali medical translation pipeline comparing fine-tuned mBART and NLLB-200 across BLEU, chrF++, METEOR, BERTScore, COMET, and perplexity. NLLB-200 was more accurate and hallucinated less in clinical text.",
    project: "clinical-translation",
  },
];

export const thesis = {
  title: "TRACE-MT: Counterfactual Attribution of Retrieval Utility in Machine Translation",
  course: "Master's thesis, Fall 2026",
  committee: [
    { name: "Dr. Benyamin Ahmadnia", role: "Chair" },
    { name: "Dr. Sahar Hooshmand", role: "Member" },
    { name: "Dr. Marsa Rayani", role: "Member" },
  ],
  status: "Proposal approved, September 2026",
  claim:
    "Retrieval should only get credit for the improvement that comes from query-specific bilingual evidence, not from target-language priming, copying, prompt length, or position.",
  questions: [
    "How much apparent retrieval gain survives once target-language distribution and context budget are matched?",
    "Is a relevant example still useful if its source and target are misaligned, or does it just invite copying and confident errors?",
    "Can a cross-fitted policy predict when retrieval helps a frozen model, and skip it when it would hurt?",
  ],
  design: [
    { condition: "No context", role: "Parametric baseline" },
    { condition: "Target-only text", role: "Language and style priming" },
    { condition: "Irrelevant + aligned", role: "Generic task cue" },
    { condition: "Relevant + shuffled", role: "Similarity without valid evidence" },
    { condition: "Irrelevant + shuffled", role: "Invalid-context control" },
    { condition: "Relevant + aligned", role: "Real retrieval" },
  ],
  method:
    "About 300 terminology, ambiguity, and domain-shift queries across two directions, two domains, and two frozen open models. BM25 and a multilingual dense retriever over a license-audited translation memory. Blinded bilingual judgments plus chrF and COMET-family metrics, with hierarchical models and source-clustered intervals.",
  foundation: "Grounded in a structured review of about 190 studies across six research clusters.",
};

export const activeProjects = [
  {
    id: "norris",
    title: "LLM post-editing for Tagalog and Spanish",
    context: "Norris Research Program grant, Fall 2026",
    summary: "Can LLMs improve NLLB-200 translations for English↔Tagalog and English↔Spanish? Zero-shot, one-shot, and chain-of-thought prompting, evaluated on FLORES-200.",
  },
];

export const mentoring = [
  { name: "Genesis", topic: "English–Spanish NMT with LLMs", program: "CAHSI LREU" },
  { name: "Danya Leyva", topic: "Scottish Gaelic → English", program: "GMI 2026" },
  { name: "Daira Aguilar", topic: "English → Cantonese", program: "GMI 2026" },
];
