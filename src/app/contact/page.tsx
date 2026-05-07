import { EMAIL, GITHUB_USER } from "@/lib/projects";

export default function ContactPage() {
  return (
    <section className="max-w-3xl">
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
