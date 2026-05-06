import Link from "next/link";
import { EMAIL, GITHUB_USER, PROJECTS, type Project } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Bio />
      <Projects />
      <AboutSection />
      <ContactSection />
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
        만든 것들을 모아둔 작은 저장소
      </p>
      <p className="leading-relaxed text-on-surface-variant">
        Next.js, Flutter, Firebase, Prisma 등을 활용해 기록을 위한 도구를
        만듭니다. 흩어진 파편들을 정렬해 영구적인 데이터로 남기는 작업을 좋아하고,
        사용자가 실제로 닿는 자리에서 매끄럽게 동작하는 결과물을 만드는 데
        집중합니다.
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
          Active Archives ({PROJECTS.length})
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

function AboutSection() {
  return (
    <section id="about" className="mt-20 max-w-3xl scroll-mt-28">
      <div className="mb-8 flex items-center gap-4">
        <h2
          className="text-xs font-bold uppercase tracking-[0.2em] text-primary"
          style={{ fontFamily: "var(--font-terminal)" }}
        >
          About.md
        </h2>
        <div className="h-px flex-1 bg-outline-variant" />
      </div>

      <div className="border border-primary bg-white p-8">
        <div
          className="mb-4 text-primary opacity-70"
          style={{ fontFamily: "var(--font-terminal)" }}
        >
          &gt;&gt; cat about.md
        </div>
        <p className="leading-7 text-on-surface">
          기록을 좋아하는 개발자입니다. 직접 손으로 만들고, 부딪힌 문제를
          기록하면서 다듬어가는 과정을 좋아해요. 웹과 모바일을 넘나들며 작은
          도구부터 끝까지 마무리해 사용자에게 닿게 하는 일에 관심이 있습니다.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="mt-20 max-w-3xl scroll-mt-28">
      <div className="mb-8 flex items-center gap-4">
        <h2
          className="text-xs font-bold uppercase tracking-[0.2em] text-primary"
          style={{ fontFamily: "var(--font-terminal)" }}
        >
          Contact.sh
        </h2>
        <div className="h-px flex-1 bg-outline-variant" />
      </div>

      <div className="border border-primary bg-white p-8">
        <div
          className="mb-4 text-primary opacity-70"
          style={{ fontFamily: "var(--font-terminal)" }}
        >
          &gt;&gt; cat contact.sh
        </div>
        <dl
          className="space-y-3 text-[15px]"
          style={{ fontFamily: "var(--font-terminal)" }}
        >
          <div className="grid grid-cols-1 gap-1 md:grid-cols-[140px_1fr]">
            <dt className="text-[10px] uppercase tracking-[0.1em] text-outline">
              [ EMAIL ]
            </dt>
            <dd>
              <a
                href={`mailto:${EMAIL}`}
                className="print-show-url text-primary underline-offset-4 hover:underline"
              >
                {EMAIL}
              </a>
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 md:grid-cols-[140px_1fr]">
            <dt className="text-[10px] uppercase tracking-[0.1em] text-outline">
              [ GITHUB ]
            </dt>
            <dd>
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="print-show-url text-primary underline-offset-4 hover:underline"
              >
                {GITHUB_USER}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
