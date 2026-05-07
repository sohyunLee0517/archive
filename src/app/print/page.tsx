import AboutContent from "@/components/AboutContent";
import PrintAutoTrigger from "@/components/PrintAutoTrigger";
import { EMAIL, GITHUB_USER, PROJECTS } from "@/lib/projects";
import { ARCHIVE_LIST_TITLE } from "@/lib/siteContent";

export default function PrintAllPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 text-[14px] print:space-y-8 print:text-[11px]">
      <PrintAutoTrigger />

      <section className="break-inside-avoid">
        <SectionHeader
          index="00"
          title="About.md"
          path="cd /sys/archive/about"
        />
        <AboutContent />
      </section>

      <section
        className="break-inside-avoid print:pt-1"
        style={{ breakBefore: "page", pageBreakBefore: "always" }}
      >
        <SectionHeader
          index="01"
          title="Archive/"
          path="cd /sys/archive/archive"
        />
        <div className="border border-outline-variant bg-white p-8">
          <p
            className="mb-3 text-primary"
            style={{ fontFamily: "var(--font-terminal)" }}
          >
            {ARCHIVE_LIST_TITLE} ({PROJECTS.length})
          </p>
          <ul className="space-y-2">
            {PROJECTS.map((project, idx) => (
              <li key={project.repo} className="text-on-surface">
                <span
                  className="mr-2 text-primary"
                  style={{ fontFamily: "var(--font-terminal)" }}
                >
                  {String(idx + 1).padStart(2, "0")}.
                </span>
                {project.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {PROJECTS.map((project, idx) => (
        <section
          key={project.repo}
          className="break-inside-avoid border border-outline-variant bg-white p-8 print:pt-1"
          style={{ breakBefore: "page", pageBreakBefore: "always" }}
        >
          <div
            className="mb-6 flex items-center gap-2 text-primary"
            style={{ fontFamily: "var(--font-terminal)" }}
          >
            <span className="opacity-50">&gt;&gt;</span>
            <span>cd /sys/archive/projects/{project.repo}</span>
          </div>

          <h2
            className="mb-8 text-2xl font-semibold tracking-tight text-primary print:text-xl"
            style={{ fontFamily: "var(--font-terminal)" }}
          >
            {String(idx + 1).padStart(2, "0")}. {project.name}
          </h2>

          <div className="mb-8 grid grid-cols-1 gap-6 border-b border-outline-variant pb-8 md:grid-cols-2">
            <Field label="YEAR">{project.period}</Field>
            <Field label="SUMMARY">{project.summary}</Field>
          </div>

          <div className="mb-8">
            <Field label="TECH STACK">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="stack-pill bg-primary px-2.5 py-1 text-[10px] uppercase tracking-[0.05em] text-white"
                    style={{ fontFamily: "var(--font-terminal)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Field>
          </div>

          <div className="space-y-6">
            <Field label="CONCEPT">{project.concept}</Field>
            <Field label="GOAL">{project.goal}</Field>
            <Field label="IMPLEMENTATION">
              <ul className="space-y-2">
                {project.work.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </Field>
            <Field label="CHALLENGE">{project.challenge}</Field>
            <Field label="SOLUTION">{project.solution}</Field>
            <Field label="LEARNINGS">
              <ul className="space-y-2">
                {project.takeaways.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </Field>
          </div>
        </section>
      ))}

      <section
        className="break-inside-avoid print:pt-1"
        style={{ breakBefore: "page", pageBreakBefore: "always" }}
      >
        <SectionHeader
          index="02"
          title="Contact.sh"
          path="cd /sys/archive/contact"
        />
        <div className="border border-outline-variant bg-white p-8">
          <dl
            className="space-y-3"
            style={{ fontFamily: "var(--font-terminal)" }}
          >
            <div className="grid grid-cols-1 gap-1 md:grid-cols-[140px_1fr]">
              <dt className="text-[10px] uppercase tracking-[0.1em] text-outline">
                [ EMAIL ]
              </dt>
              <dd>{EMAIL}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-[140px_1fr]">
              <dt className="text-[10px] uppercase tracking-[0.1em] text-outline">
                [ GITHUB ]
              </dt>
              <dd>{GITHUB_USER}</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  index,
  title,
  path,
}: {
  index: string;
  title: string;
  path: string;
}) {
  return (
    <div className="mb-6">
      <div
        className="mb-3 flex items-center gap-2 text-primary"
        style={{ fontFamily: "var(--font-terminal)" }}
      >
        <span className="opacity-50">&gt;&gt;</span>
        <span>{path}</span>
      </div>
      <h2
        className="border-b border-outline pb-2 text-lg font-medium text-primary print:text-base"
        style={{ fontFamily: "var(--font-terminal)" }}
      >
        {index}. {title}
      </h2>
    </div>
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
      <dd className="min-w-0 leading-relaxed text-on-surface">{children}</dd>
    </div>
  );
}
