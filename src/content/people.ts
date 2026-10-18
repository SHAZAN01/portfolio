// Collaborators, mentees, and recommendations. Facts only.

export type Person = { name: string; role: string; org: string; work: string[]; hue: [string, string] };

export const collaborators: Person[] = [
  { name: "Dr. Benyamin Ahmadnia", role: "Research advisor · Thesis chair", org: "CSUDH", work: ["ICAI 2026", "J.UCS survey", "RANLP 2025", "Norris grant"], hue: ["#2997ff", "#a855f7"] },
  { name: "Dr. Sahar Hooshmand", role: "Co-author · Thesis committee", org: "CSUDH", work: ["ICAI 2026", "RANLP 2025", "TRACE-MT"], hue: ["#ec4899", "#ff9f0a"] },
  { name: "Dr. Marsa Rayani", role: "Thesis committee", org: "CSUDH", work: ["TRACE-MT"], hue: ["#30d158", "#64d2ff"] },
  { name: "Dr. Li Zhou", role: "Co-author", org: "Harvard Medical School", work: ["ICAI 2026"], hue: ["#ff375f", "#bf5af2"] },
  { name: "Sumaiya Shaikh", role: "Co-author", org: "CSUDH", work: ["J.UCS survey", "RANLP 2025"], hue: ["#64d2ff", "#2997ff"] },
  { name: "Bibek Poudel", role: "Co-author", org: "CSUDH", work: ["J.UCS survey", "RANLP 2025"], hue: ["#ff9f0a", "#ff375f"] },
];

export type Mentee = { name: string; program: string; pair: [string, string]; focus: string; contributions: string[] };

export const mentees: Mentee[] = [
  {
    name: "Genesis",
    program: "CAHSI LREU",
    pair: ["English", "Spanish"],
    focus: "NMT baseline compared with two LLM-assisted approaches.",
    contributions: ["Onboarding into ML, machine translation, and LLM fundamentals", "Scoping the baseline and comparison design", "Shaping the literature review"],
  },
  {
    name: "Danya Leyva",
    program: "GMI 2026",
    pair: ["Scottish Gaelic", "English"],
    focus: "Low-resource translation with NLLB.",
    contributions: ["Data-cleaning strategy for noisy web-scraped pairs", "Semantic filtering with LaBSE plus language ID", "Evaluation plan"],
  },
  {
    name: "Daira Aguilar",
    program: "GMI 2026",
    pair: ["English", "Cantonese"],
    focus: "Specialised-language translation with NLLB.",
    contributions: ["Consolidating scattered experiments into one reproducible pipeline", "Complete, comparable evaluation"],
  },
];

// Real words only. Paste a recommendation exactly as written, and it appears on the site.
export type Recommendation = { quote: string; name: string; title: string; relation: string };

export const recommendations: Recommendation[] = [
  {
    quote: "Shazan is an exceptional student with professional qualities. He consistently demonstrates adaptability and resilience in the face of challenges.",
    name: "Prof. G. Chandra Mohan Reddy",
    title: "Principal, Mahatma Gandhi Institute of Technology",
    relation: "Teacher · LinkedIn recommendation",
  },
  // {
  //   quote: "…their exact words…",
  //   name: "Dr. Benyamin Ahmadnia",
  //   title: "Associate Professor, Computer Science, CSUDH",
  //   relation: "Research advisor",
  // },
];
