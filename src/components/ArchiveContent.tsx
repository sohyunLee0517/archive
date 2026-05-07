import Link from "next/link";
import { PROJECTS, type Project } from "@/lib/projects";
import {
  ARCHIVE_BIO_DESCRIPTION,
  ARCHIVE_BIO_TITLE,
  ARCHIVE_LIST_TITLE,
} from "@/lib/siteContent";

export default function ArchiveContent() {
  return (
    <>
      <Bio />
      <Projects />
    </>
  );
}

function Bio() {
  return (
    <section className="mb-16 max-w-3xl border-l-2 border-primary py-2 pl-6">
      <div
        className="mb-4 text-primary opacity-70"
        style={{ fontFamily: "var(--font-terminal)" }}
      >
        &gt;&gt; cat bio.txt
      </div>
      <p
        className="mb-4 text-lg font-medium text-primary"
        style={{ fontFamily: "var(--font-terminal)" }}
      >
        {ARCHIVE_BIO_TITLE}
      </p>
      <p className="leading-relaxed text-on-surface-variant">
        {ARCHIVE_BIO_DESCRIPTION}
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section id="archive" className="max-w-4xl space-y-8">
      <div className="mb-8 flex items-center gap-4">
        <h2
          className="text-xs font-bold uppercase tracking-[0.2em] text-primary"
          style={{ fontFamily: "var(--font-terminal)" }}
        >
          {ARCHIVE_LIST_TITLE} ({PROJECTS.length})
        </h2>
        <div className="h-px flex-1 bg-outline-variant" />
      </div>

      {PROJECTS.map((p, idx) => (
        <ProjectCard key={p.repo} project={p} index={idx + 1} />
      ))}
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index).padStart(2, "0");

  return (
    <Link
      href={`/projects/${project.repo}`}
      className="project-card group block border border-primary bg-white p-8 transition-colors hover:bg-surface-container-low"
    >
      <div className="mb-6 flex items-start justify-between">
        <div>
          <div className="flex items-baseline gap-3">
            <span
              className="text-sm text-primary"
              style={{ fontFamily: "var(--font-terminal)" }}
            >
              {num}.
            </span>
            <h3
              className="text-2xl font-semibold tracking-tight text-primary group-hover:underline"
              style={{ fontFamily: "var(--font-terminal)" }}
            >
              {project.name}
            </h3>
          </div>
          <p
            className="mt-2 pl-8 text-[11px] tracking-[0.05em] text-secondary"
            style={{ fontFamily: "var(--font-terminal)" }}
          >
            {project.period}
          </p>
        </div>
        <span
          className="material-symbols-outlined text-primary transition-transform duration-150 group-hover:scale-110"
          aria-hidden="true"
        >
          arrow_forward
        </span>
      </div>

      <dl className="ml-8 space-y-4 text-[15px]">
        <Field label="CONCEPT">
          <p className="leading-7 text-on-surface">{project.concept}</p>
        </Field>

        <Field label="STACK">
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="stack-pill bg-primary px-2.5 py-1 text-[10px] uppercase tracking-[0.05em] text-white"
                style={{ fontFamily: "var(--font-terminal)" }}
              >
                {t}
              </li>
            ))}
          </ul>
        </Field>
      </dl>
    </Link>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-[140px_1fr] md:gap-4">
      <dt
        className="self-start pt-1 text-[10px] uppercase tracking-[0.1em] text-outline"
        style={{ fontFamily: "var(--font-terminal)" }}
      >
        [ {label} ]
      </dt>
      <dd className="min-w-0">{children}</dd>
    </div>
  );
}
