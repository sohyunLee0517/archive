import AboutContent from "@/components/AboutContent";

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

      <AboutContent />
    </section>
  );
}
