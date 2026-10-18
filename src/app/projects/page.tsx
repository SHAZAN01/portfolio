import type { Metadata } from "next";
import Link from "next/link";
import { allProjectItems } from "@/components/home/Projects";
import { ProjectGrid } from "@/components/home/ProjectGrid";

export const metadata: Metadata = {
  title: "All projects",
  description: "Research case studies, data engineering, ML, MLOps, and analytics projects by Shazan Ansar Mohammed.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const items = allProjectItems();
  return (
    <section className="section pt-12">
      <div className="wrap">
        <Link href="/#projects" className="link text-sm">Back to home</Link>
        <h1 className="h-section mt-6">All {items.length} <span className="grad-text">projects.</span></h1>
        <div className="mt-12"><ProjectGrid items={items} /></div>
      </div>
    </section>
  );
}
