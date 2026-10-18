// ─────────────────────────────────────────────────────────────
// Edit this file to update who you are, links, and availability.
// Nothing here should be a claim you can't back up in an interview.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Shazan Ansar Mohammed",
  shortName: "Shazan",
  location: "California",
  email: "shazanansar@gmail.com",
  resumeUrl: "/resume.pdf", // put your PDF at public/resume.pdf
  photo: "/images/profile.jpg",
  banner: "/images/banner.jpg", // public/images/banner.jpg (your LinkedIn banner)
  siteUrl: "https://shazan.dev",

  roles: ["Data Scientist", "AI Architect", "Data Engineer"],
  headline: "Rigorous models. Reliable data systems.",
  bio: "Data scientist specializing in NLP and large language models, with a data engineer's discipline for pipelines and an architect's eye for systems. Published research on LLM-based machine translation at RANLP 2025 and ICAI 2026.",

  intro: [
    "Data scientist and data engineer working where pipelines, models, and language meet.",
    "Engineering instinct first: trustworthy data, reproducible experiments, and results that hold up under scrutiny.",
  ],

  spoken: ["English", "Hindi", "Urdu", "Telugu", "Arabic"],

  recommendation: {
    quote: "Shazan is an exceptional student with professional qualities.",
    by: "Prof. G. Chandra Mohan Reddy",
    title: "Principal, Mahatma Gandhi Institute of Technology, Hyderabad",
  },

  focus: ["Data science", "Data engineering", "ML and AI engineering", "NLP research"],

  availability: {
    open: true,
    summary: "Seeking Data Scientist and Data Engineer internships for Summer and Fall 2027.",
    alsoOpenTo: "Early-stage startups, founding-engineer conversations, and research collaborations.",
  },

  // Order = order shown everywhere. Edit handles/URLs here only.
  social: [
    { key: "linkedin", label: "LinkedIn", handle: "shazan-ansar", href: "https://www.linkedin.com/in/shazan-ansar/" },
    { key: "github", label: "GitHub", handle: "SHAZAN01", href: "https://github.com/SHAZAN01" },
    { key: "instagram", label: "Instagram", handle: "@shazan_ansar", href: "https://www.instagram.com/shazan_ansar" },
    { key: "threads", label: "Threads", handle: "@shazan_ansar", href: "https://www.threads.com/@shazan_ansar" },
    { key: "medium", label: "Medium", handle: "@shazanansar", href: "https://medium.com/@shazanansar" },
  ],

  venture: {
    name: "Wise Torch",
    role: "Founder",
    href: "https://www.instagram.com/wise.torch",
    logo: "/images/wisetorch.png",
  },

  education: {
    degree: "M.S. Computer Science (Software Engineering track)",
    school: "California State University, Dominguez Hills",
    period: "2024 – present",
    gpa: "4.0",
  },

} as const;
