import ShareBar from "@/components/ShareBar";

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <ShareBar />

      <main className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-20 print:py-0">
        <header className="mb-10 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            iso archive
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            이소현
          </h1>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            만든 것들을 모아둔 작은 저장소
          </p>
        </header>

        <Section title="About">
          <p className="leading-7 text-zinc-700 dark:text-zinc-300">
            여기에 자기소개를 작성하세요. 어떤 일을 하고, 무엇에 관심이 있으며,
            어떤 도구를 즐겨 쓰는지 짧게 적으면 좋아요.
          </p>
        </Section>

        <Section title="Projects">
          <ul className="space-y-6">
            <ProjectItem
              title="프로젝트 이름"
              period="2025"
              description="한 줄 요약. 무엇을 만들었고 어떤 문제를 풀었는지."
              tags={["Next.js", "TypeScript"]}
            />
            <ProjectItem
              title="다른 프로젝트"
              period="2024"
              description="한 줄 요약."
              tags={["React"]}
            />
          </ul>
        </Section>

        <Section title="Contact">
          <ul className="space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>Email · nonlyito@gmail.com</li>
            <li>GitHub · sohyunLee0517</li>
          </ul>
        </Section>

        <footer className="mt-16 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800">
          © {new Date().getFullYear()} 이소현
        </footer>
      </main>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10 break-inside-avoid">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ProjectItem({
  title,
  period,
  description,
  tags,
}: {
  title: string;
  period: string;
  description: string;
  tags: string[];
}) {
  return (
    <li className="break-inside-avoid">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <span className="text-sm text-zinc-500">{period}</span>
      </div>
      <p className="mt-1 text-zinc-600 dark:text-zinc-400">{description}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </li>
  );
}
