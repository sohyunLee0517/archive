import {
  ABOUT_CORE_STACK,
  ABOUT_HIGHLIGHT_TEXT,
  ABOUT_INTRO_PRIMARY,
  ABOUT_INTRO_SECONDARY,
  ABOUT_PROFILE,
  ABOUT_QUOTE,
} from "@/lib/siteContent";

export default function AboutContent() {
  const [secondaryBefore, secondaryAfter] =
    ABOUT_INTRO_SECONDARY.split(ABOUT_HIGHLIGHT_TEXT);

  return (
    <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
      <div className="space-y-6 md:col-span-7">
        <div className="break-inside-avoid border border-outline-variant bg-surface-container-low p-8 bg-white">
          <p className="leading-7 text-on-surface">{ABOUT_INTRO_PRIMARY}</p>
          <p className="mt-6 leading-7 text-on-surface">
            {secondaryBefore}
            <span className="bg-primary px-1 text-white">
              {ABOUT_HIGHLIGHT_TEXT}
            </span>
            {secondaryAfter}
          </p>
        </div>

        <div className="break-inside-avoid border-l-4 border-primary py-4 pl-6">
          <blockquote
            className="leading-8 text-on-surface-variant italic"
            style={{ fontFamily: "var(--font-terminal)" }}
          >
            &ldquo;{ABOUT_QUOTE}&rdquo;
          </blockquote>
        </div>
      </div>

      <div className="space-y-6 md:col-span-5">
        <div className="break-inside-avoid border border-outline-variant bg-surface-container-low p-6 bg-white">
          <h3
            className="mb-4 text-[11px] uppercase tracking-[0.12em] text-secondary"
            style={{ fontFamily: "var(--font-terminal)" }}
          >
            IDENTITY_PROFILE
          </h3>
          <dl className="space-y-3">
            {ABOUT_PROFILE.map((row) => (
              <MetaRow key={row.label} label={row.label} value={row.value} />
            ))}
          </dl>
        </div>

        <div className="break-inside-avoid border border-outline-variant bg-surface-container-low p-6 bg-white">
          <h3
            className="mb-4 text-[11px] uppercase tracking-[0.12em] text-secondary"
            style={{ fontFamily: "var(--font-terminal)" }}
          >
            CORE_STACK.json
          </h3>
          <div className="flex flex-wrap gap-2">
            {ABOUT_CORE_STACK.map((stack) => (
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
