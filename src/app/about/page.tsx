const CORE_STACK = [
  "Next.js",
  "TypeScript",
  "Flutter",
  "Firebase",
  "Prisma",
  "Tailwind",
  "Node.js",
];

export default function AboutPage() {
  return (
    <section className="max-w-5xl">
      <div className="mb-8 flex items-center gap-4">
        <h2
          className="text-xs font-bold uppercase tracking-[0.2em] text-primary"
          style={{ fontFamily: "var(--font-terminal)" }}
        >
          About.md
        </h2>
        <div className="h-px flex-1 bg-outline-variant" />
      </div>

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
        <div className="space-y-6 md:col-span-7">
          <div className="break-inside-avoid border border-outline-variant bg-surface-container-low p-8 bg-white">
            <p className="leading-7 text-on-surface">
              저는{" "}
              <strong className="font-semibold text-primary">이소현</strong>
              입니다. 흩어진 디지털 결과물을 오래 남는 구조로 정리하는 일에
              관심이 많고, 기록과 소프트웨어 설계를 한 흐름으로 다루는 작업을
              좋아합니다.
            </p>
            <p className="mt-6 leading-7 text-on-surface">
              빠르게 사라지는 콘텐츠보다 오래 읽히는 형식을 지향합니다. 그래서
              제가 만드는 서비스는 항상{" "}
              <span className="bg-primary px-1 text-white">
                유지보수 가능한 구조와 인쇄 가능한 기록성
              </span>
              을 함께 고려합니다.
            </p>
          </div>

          <div className="break-inside-avoid border-l-4 border-primary py-4 pl-6">
            <blockquote
              className="leading-8 text-on-surface-variant italic"
              style={{ fontFamily: "var(--font-terminal)" }}
            >
              &ldquo;가장 오래가는 아카이브는 저장소 안이 아니라, 오픈 시스템의
              설계 안에 남는다.&rdquo;
            </blockquote>
          </div>
        </div>

        <div className="space-y-6 md:col-span-5">
          <div className="break-inside-avoid border border-outline-variant bg-surface-container-low p-6">
            <h3
              className="mb-4 text-[11px] uppercase tracking-[0.12em] text-secondary"
              style={{ fontFamily: "var(--font-terminal)" }}
            >
              IDENTITY_PROFILE
            </h3>
            <dl className="space-y-3">
              <MetaRow label="Role" value="Front-End Engineer" />
              <MetaRow label="Interests" value="History, Product, DX" />
              <MetaRow label="Location" value="Seoul, KR / Remote" />
              <MetaRow label="Status" value="Compiling_Next" />
            </dl>
          </div>

          <div className="break-inside-avoid border border-outline-variant bg-surface-container-low p-6">
            <h3
              className="mb-4 text-[11px] uppercase tracking-[0.12em] text-secondary"
              style={{ fontFamily: "var(--font-terminal)" }}
            >
              CORE_STACK.json
            </h3>
            <div className="flex flex-wrap gap-2">
              {CORE_STACK.map((stack) => (
                <span
                  key={stack}
                  className="bg-primary px-2 py-1 text-[10px] uppercase tracking-[0.06em] text-white"
                  style={{ fontFamily: "var(--font-terminal)" }}
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-dotted border-outline-variant pb-1">
      <dt
        className="text-[10px] uppercase tracking-[0.08em] text-primary"
        style={{ fontFamily: "var(--font-terminal)" }}
      >
        {label}
      </dt>
      <dd className="text-right text-sm text-on-surface">{value}</dd>
    </div>
  );
}
