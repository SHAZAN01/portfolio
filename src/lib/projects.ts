import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ProjectMetric = { label: string; value: string; verified?: boolean };
export type ProjectLink = { label: string; href: string };

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  date: string;
  order?: number;
  kind?: "Research" | "Engineering";
  status?: string;
  tags: string[];
  summary: string;
  role?: string;
  stack?: string[];
  pipeline?: string[];
  metrics?: ProjectMetric[];
  links?: ProjectLink[];
  featured?: boolean;
};

export type Project = ProjectFrontmatter & { content: string };

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/** Only metrics marked verified are ever shown publicly. */
export function publicMetrics(m?: ProjectMetric[]) {
  return (m ?? []).filter((x) => x.verified === true);
}

/** Links with an empty href are placeholders and stay hidden. */
export function publicLinks(l?: ProjectLink[]) {
  return (l ?? []).filter((x) => x.href && x.href.trim().length > 0);
}

export function getAllProjects(): ProjectFrontmatter[] {
  return getProjectSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(PROJECTS_DIR, `${slug}.mdx`), "utf8");
      return matter(raw).data as ProjectFrontmatter;
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getProjectBySlug(slug: string): Project | null {
  const file = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return { ...(data as ProjectFrontmatter), content };
}
