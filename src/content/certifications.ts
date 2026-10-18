// From LinkedIn. `featured` ones get large cards; the rest appear in a compact list.
export type Cert = {
  name: string;
  issuer: string;
  brand: "aws" | "google" | "ibm" | "tableau" | "coursera" | "udemy";
  issued: string;
  expires?: string;
  id: string;
  url?: string;
  featured?: boolean;
};

export const certifications: Cert[] = [
  { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", brand: "aws", issued: "Aug 2025", expires: "Aug 2028", id: "AWS04978855", featured: true },
  { name: "Google Data Analytics Specialization", issuer: "Google", brand: "google", issued: "Oct 2023", id: "6VE68RQ33PTT", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/6VE68RQ33PTT", featured: true },
  { name: "Machine Learning for Trading Specialization", issuer: "Google Cloud", brand: "google", issued: "Oct 2023", id: "56A24JTD527T", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/56A24JTD527T", featured: true },
  { name: "Python for Data Science", issuer: "IBM", brand: "ibm", issued: "Jun 2022", id: "4c553d747a574a97802827b425537158", url: "https://www.credly.com/badges/0d107bc7-00c6-4ced-89b9-fea0ea815e03", featured: true },
];
