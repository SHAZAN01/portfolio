import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug, getProjectSlugs, publicLinks, publicMetrics } from "@/lib/projects";
import { Mdx } from "@/components/site/Mdx";
import { PipelineDiagram } from "@/components/home/PipelineDiagram";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) return {};
  return { title: p.title, description: p.summary, alternates: { canonical: `/projects/${slug}` } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) notFound();

  const all = getAllProjects();
  const idx = all.findIndex((x) => x.slug === slug);
  const next = all[(idx + 1) % all.length];
  const metrics = publicMetrics(p.metrics);
  const links = publicLinks(p.links);

  return (
    <article className="section pt-12">
      <div className="wrap">
        <Link href="/#work" className="text-sm text-dim hover:text-foreground">Back to selected work</Link>

        <header className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-sm text-dim">{p.kind}{p.status ? `, ${p.status}` : ""}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">{p.title}</h1>
            <p className="lede mt-6">{p.summary}</p>
          </div>
          <dl className="space-y-4 text-sm lg:col-span-4 lg:pt-8">
            {p.role && (<div><dt className="text-dim">Role</dt><dd className="mt-0.5">{p.role}</dd></div>)}
            {p.stack?.length ? (<div><dt className="text-dim">Stack</dt><dd className="mt-0.5">{p.stack.join(", ")}</dd></div>) : null}
            {links.length > 0 && (
              <div><dt className="text-dim">Links</dt>
                <dd className="mt-0.5 flex flex-col gap-1">{links.map((l) => <a key={l.href} href={l.href} className="text-signal underline-offset-4 hover:underline">{l.label}</a>)}</dd>
              </div>
            )}
          </dl>
        </header>

        {p.pipeline?.length ? (
          <div className="mt-12 rounded-[28px] border border-rule bg-card p-5 sm:p-7">
            <PipelineDiagram stages={p.pipeline} label={p.title} />
          </div>
        ) : null}

        {metrics.length > 0 && (
          <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-rule py-6 sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label}>
                <dt className="text-xs text-dim">{m.label}</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="prose-case mt-4 max-w-3xl">
          <Mdx source={p.content} />
        </div>

        {next && next.slug !== slug && (
          <Link href={`/projects/${next.slug}`} className="group mt-20 block border-t border-rule pt-8">
            <span className="text-sm text-dim">Next project</span>
            <span className="mt-2 block text-3xl font-semibold tracking-tight group-hover:text-signal">{next.title}</span>
          </Link>
        )}
      </div>
    </article>
  );
}
