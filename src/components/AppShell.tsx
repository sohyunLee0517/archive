"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ShareBar from "@/components/ShareBar";
import { GITHUB_USER, PROJECTS, fileName } from "@/lib/projects";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";

  const path = pathname.replace(/\/$/, "") || "/";
  const detailMatch = path.match(/^\/projects\/(.+)$/);
  const activeSlug = detailMatch ? detailMatch[1] : null;
  const isHome = path === "/";

  const terminalPath = activeSlug
    ? `cd /sys/archive/projects/${activeSlug}`
    : "ls /sys/archive/";

  return (
    <>
      <TopAppBar terminalPath={terminalPath} showCursor={isHome} />

      <div className="flex flex-1 overflow-hidden print:block print:overflow-visible">
        <SideNav activeSlug={activeSlug} isHome={isHome} />

        <main className="scroll-area flex-1 overflow-y-auto print:overflow-visible">
          <div className="mx-auto max-w-[840px] px-6 py-12 lg:py-16">
            {children}
          </div>
          <Footer />
        </main>
      </div>

      <ShareBar />
    </>
  );
}

function TopAppBar({
  terminalPath,
  showCursor,
}: {
  terminalPath: string;
  showCursor: boolean;
}) {
  return (
    <header
      className="no-print w-full shrink-0 border-b border-primary bg-surface px-6 py-5"
      style={{ fontFamily: "var(--font-terminal)" }}
    >
      <div className="mx-auto flex max-w-[1120px] flex-col justify-between md:flex-row md:items-center">
        <div className="flex flex-col">
          <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-secondary">
            <span className="text-primary">$</span> {terminalPath}
          </span>
          <h1 className="mt-1 flex items-center text-2xl font-semibold tracking-tight text-primary">
            ISO ARCHIVE : 이소현
            {showCursor ? (
              <span className="cursor-blink ml-2 inline-block h-6 w-2 bg-primary" />
            ) : null}
          </h1>
        </div>
      </div>
    </header>
  );
}

function SideNav({
  activeSlug,
  isHome,
}: {
  activeSlug: string | null;
  isHome: boolean;
}) {
  return (
    <nav
      className="no-print hidden w-72 shrink-0 flex-col overflow-y-auto border-r border-outline-variant p-6 lg:flex"
      style={{ fontFamily: "var(--font-terminal)" }}
    >
      <div className="mb-8">
        <div className="mb-2 text-sm text-primary opacity-50"># system_info</div>
        <p className="text-xs font-medium tracking-[0.05em] text-primary">
          Digital Archeologist
        </p>
        <p className="text-xs font-medium tracking-[0.05em] text-primary">
          &amp; Developer
        </p>
      </div>

      <div className="space-y-1">
        <div className="mb-3 text-[10px] uppercase tracking-[0.2em] text-secondary">
          Directory Tree
        </div>

        <Link
          href="/"
          className={`tree-line flex items-center px-2 py-1 text-xs tracking-[0.05em] transition-colors ${
            isHome
              ? "bg-primary font-bold text-white"
              : "text-primary hover:bg-primary hover:text-white"
          }`}
        >
          Archive/
        </Link>

        <div className="flex flex-col">
          {PROJECTS.map((p, idx) => {
            const isLast = idx === PROJECTS.length - 1;
            const cls = isLast ? "tree-nested-last" : "tree-nested";
            const active = activeSlug === p.repo;
            return (
              <Link
                key={p.repo}
                href={`/projects/${p.repo}`}
                className={`${cls} flex items-center px-2 py-0.5 text-[11px] tracking-[0.02em] transition-colors ${
                  active
                    ? "bg-primary text-white"
                    : "text-on-surface-variant hover:bg-primary hover:text-white"
                }`}
              >
                {fileName(p.repo, idx)}
              </Link>
            );
          })}
        </div>

        <Link
          href="/#about"
          className="tree-line flex items-center px-2 py-1 text-xs tracking-[0.05em] text-on-surface-variant transition-colors hover:bg-primary hover:text-white"
        >
          About.md
        </Link>
        <Link
          href="/#contact"
          className="tree-line flex items-center px-2 py-1 text-xs tracking-[0.05em] text-on-surface-variant transition-colors hover:bg-primary hover:text-white"
        >
          Contact.sh
        </Link>
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="tree-line-last flex items-center px-2 py-1 text-xs tracking-[0.05em] text-on-surface-variant transition-colors hover:bg-primary hover:text-white"
        >
          Links/
        </a>
      </div>

      <div className="mt-auto border-t border-dashed border-outline-variant pt-8">
        <div className="text-[10px] text-outline">
          Status: Available
          <br />
          Built for permanence.
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="no-print mt-16 w-full border-t border-primary bg-white px-6 py-12">
      <div
        className="mx-auto flex max-w-[1120px] flex-col items-center justify-between text-primary md:flex-row"
        style={{ fontFamily: "var(--font-terminal)" }}
      >
        <span className="text-[11px] uppercase tracking-[0.15em] opacity-60">
          © {new Date().getFullYear()} ISO_ARCHIVE. STATUS: BUILT_FOR_PERMANENCE.
        </span>
        <div className="mt-4 flex gap-6 text-[10px] font-bold uppercase tracking-[0.15em] md:mt-0">
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 transition-colors hover:bg-primary hover:text-white"
          >
            GitHub
          </a>
          <a
            href="mailto:nonlyito@gmail.com"
            className="px-2 transition-colors hover:bg-primary hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
