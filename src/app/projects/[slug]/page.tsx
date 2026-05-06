import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GITHUB_USER, PROJECTS, type Project } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.repo }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.repo === slug);
  if (!project) return { title: "Not Found | ISO ARCHIVE" };
  return {
    title: `${project.name} | ISO ARCHIVE`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = PROJECTS.findIndex((p) => p.repo === slug);
  if (index === -1) notFound();

  const project = PROJECTS[index];
  const num = String(index + 1).padStart(2, "0");
  const repoUrl = `https://github.com/${GITHUB_USER}/${project.repo}`;
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <div className="mx-auto max-w-4xl">
      <TerminalBreadcrumb slug={slug} />

      <h1
        className="mb-12 text-[2.5rem] font-bold leading-tight tracking-tighter text-primary md:text-5xl"
        style={{ fontFamily: "var(--font-terminal)" }}
      >
        {num}. {project.name}
      </h1>

      <ProjectHero project={project} repoUrl={repoUrl} />

      <TechStack tech={project.tech} />

      <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-12">
        <Concept concept={project.concept} />
        <Goal goal={project.goal} />

        <Implementation work={project.work} />

        <Challenges
          challenge={project.challenge}
          solution={project.solution}
        />

        <Learnings takeaways={project.takeaways} />
      </div>

      <DetailNav prev={prev} next={next} />
    </div>
  );
}

function TerminalBreadcrumb({ slug }: { slug: string }) {
  return (
    <div
      className="mb-12 flex items-center gap-2 text-primary"
      style={{ fontFamily: "var(--font-terminal)" }}
    >
      <span className="opacity-50">&gt;&gt;</span>
      <span>cd /sys/archive/projects/{slug}</span>
      <span className="cursor-blink ml-1 inline-block h-4 w-2 bg-primary" />
    </div>
  );
}

function ProjectHero({
  project,
  repoUrl,
}: {
  project: Project;
  repoUrl: string;
}) {
  return (
    <section className="mb-16 grid grid-cols-1 gap-12 border-b border-outline-variant pb-12 md:grid-cols-12">
      <div className="md:col-span-12">
        <dl
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
          style={{ fontFamily: "var(--font-terminal)" }}
        >
          <div>
            <dt className="mb-2 text-[10px] uppercase tracking-widest text-outline">
              Year
            </dt>
            <dd className="font-medium text-primary">{project.period}</dd>
          </div>
          <div>
            <dt className="mb-2 text-[10px] uppercase tracking-widest text-outline">
              Summary
            </dt>
            <dd
              className="font-medium leading-snug text-primary"
              style={{ fontFamily: "var(--font-body-kr)" }}
            >
              {project.summary}
            </dd>
          </div>
          <div>
            <dt className="mb-2 text-[10px] uppercase tracking-widest text-outline">
              Repository
            </dt>
            <dd>
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="print-show-url break-all text-primary underline decoration-1 underline-offset-4 transition-colors hover:bg-primary hover:text-white"
              >
                github.com/{GITHUB_USER}/{project.repo}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function TechStack({ tech }: { tech: string[] }) {
  return (
    <section className="mb-16">
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="stack-pill bg-primary px-3 py-1 text-[10px] uppercase tracking-widest text-white"
            style={{ fontFamily: "var(--font-terminal)" }}
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

function TerminalHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="mb-6 flex items-center gap-2 text-primary"
      style={{ fontFamily: "var(--font-terminal)" }}
    >
      <span className="opacity-50">&gt;&gt;</span> {children}
    </h3>
  );
}

function Concept({ concept }: { concept: string }) {
  return (
    <div className="md:col-span-7">
      <TerminalHeader>cat concept.txt</TerminalHeader>
      <p className="max-w-2xl leading-relaxed text-on-surface-variant">
        {concept}
      </p>
    </div>
  );
}

function Goal({ goal }: { goal: string }) {
  return (
    <div className="md:col-span-5">
      <TerminalHeader>cat goal.log</TerminalHeader>
      <p className="leading-relaxed text-on-surface-variant">{goal}</p>
    </div>
  );
}

function Implementation({ work }: { work: string[] }) {
  return (
    <div className="md:col-span-12 border-t border-outline-variant pt-12">
      <TerminalHeader>ls -la implementation/</TerminalHeader>
      <ul className="mt-4 space-y-4">
        {work.map((item, i) => (
          <li key={item} className="flex gap-4 leading-relaxed">
            <span
              className="shrink-0 font-bold text-primary"
              style={{ fontFamily: "var(--font-terminal)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-on-surface">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Challenges({
  challenge,
  solution,
}: {
  challenge: string;
  solution: string;
}) {
  return (
    <div className="md:col-span-12">
      <TerminalHeader>cat challenges.txt</TerminalHeader>
      <div className="mt-4 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-3">
          <h5
            className="text-base font-medium text-primary"
            style={{ fontFamily: "var(--font-terminal)" }}
          >
            Problem
          </h5>
          <p className="leading-relaxed text-on-surface-variant">{challenge}</p>
        </div>
        <div className="space-y-3">
          <h5
            className="text-base font-medium text-primary"
            style={{ fontFamily: "var(--font-terminal)" }}
          >
            Solution
          </h5>
          <p className="leading-relaxed text-on-surface-variant">{solution}</p>
        </div>
      </div>
    </div>
  );
}

function Learnings({ takeaways }: { takeaways: string[] }) {
  return (
    <div className="md:col-span-12 border-t border-outline-variant pt-12">
      <TerminalHeader>cat learnings.md</TerminalHeader>
      <ul className="mt-4 max-w-3xl space-y-3">
        {takeaways.map((t) => (
          <li key={t} className="flex gap-3 leading-relaxed text-primary">
            <span
              className="shrink-0 opacity-50"
              style={{ fontFamily: "var(--font-terminal)" }}
            >
              ›
            </span>
            <span className="italic">{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DetailNav({ prev, next }: { prev: Project; next: Project }) {
  return (
    <nav
      className="no-print mt-16 flex flex-col items-stretch justify-between gap-4 border-t border-outline-variant pt-8 sm:flex-row sm:items-center"
      style={{ fontFamily: "var(--font-terminal)" }}
    >
      <Link
        href={`/projects/${prev.repo}`}
        className="group flex items-center gap-2 text-sm text-primary"
      >
        <span className="material-symbols-outlined text-base transition-transform group-hover:-translate-x-1">
          chevron_left
        </span>
        <span>
          <span className="block text-[10px] uppercase tracking-widest text-outline">
            prev
          </span>
          <span className="block text-xs">{prev.name}</span>
        </span>
      </Link>

      <Link
        href="/"
        className="self-center text-[10px] uppercase tracking-[0.2em] text-secondary transition-colors hover:text-primary"
      >
        ⌂ Back to Archive
      </Link>

      <Link
        href={`/projects/${next.repo}`}
        className="group flex items-center justify-end gap-2 text-sm text-primary"
      >
        <span className="text-right">
          <span className="block text-[10px] uppercase tracking-widest text-outline">
            next
          </span>
          <span className="block text-xs">{next.name}</span>
        </span>
        <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
          chevron_right
        </span>
      </Link>
    </nav>
  );
}
