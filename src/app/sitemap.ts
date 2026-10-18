import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
import { profile } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl;
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects`, changeFrequency: "monthly", priority: 0.8 },
    ...getAllProjects().map((p) => ({ url: `${base}/projects/${p.slug}`, lastModified: p.date, priority: 0.7 })),
  ];
}
