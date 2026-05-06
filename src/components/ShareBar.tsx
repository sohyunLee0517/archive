"use client";

import { useCallback, useEffect, useState } from "react";

declare global {
  interface Window {
    Kakao?: {
      isInitialized: () => boolean;
      init: (key: string) => void;
      Share?: {
        sendDefault: (options: Record<string, unknown>) => void;
      };
    };
  }
}

const KAKAO_JS_KEY = process.env.NEXT_PUBLIC_KAKAO_JS_KEY ?? "";

type Toast = { message: string; tone: "ok" | "warn" } | null;

export default function ShareBar() {
  const [toast, setToast] = useState<Toast>(null);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 1800);
    return () => window.clearTimeout(id);
  }, [toast]);

  useEffect(() => {
    if (!KAKAO_JS_KEY) return;
    if (typeof window === "undefined") return;
    if (window.Kakao?.isInitialized()) return;

    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-kakao-sdk="true"]',
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js";
    script.async = true;
    script.dataset.kakaoSdk = "true";
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(KAKAO_JS_KEY);
      }
    };
    document.head.appendChild(script);
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleShareLink = useCallback(async () => {
    const url = window.location.href;
    const title = document.title;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch (err) {
        if ((err as DOMException).name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setToast({ message: "링크가 복사되었어요", tone: "ok" });
    } catch {
      setToast({ message: "복사에 실패했어요", tone: "warn" });
    }
  }, []);

  const handleKakaoShare = useCallback(() => {
    if (!KAKAO_JS_KEY) {
      setToast({
        message: "카카오 키가 아직 등록되지 않았어요",
        tone: "warn",
      });
      return;
    }
    if (!window.Kakao?.Share) {
      setToast({ message: "카카오 SDK 로딩 중", tone: "warn" });
      return;
    }
    window.Kakao.Share.sendDefault({
      objectType: "text",
      text: `${document.title}\n이소현의 작업 아카이브`,
      link: {
        mobileWebUrl: window.location.href,
        webUrl: window.location.href,
      },
    });
  }, []);

  return (
    <>
      <div className="no-print sticky top-4 z-20 mx-auto flex w-full max-w-3xl flex-wrap items-center justify-end gap-2 px-4">
        <ActionButton onClick={handlePrint} label="PDF 다운로드" icon="pdf" />
        <ActionButton onClick={handleKakaoShare} label="카카오톡" icon="kakao" />
        <ActionButton onClick={handleShareLink} label="링크 공유" icon="link" />
        <ActionButton onClick={handlePrint} label="프린트" icon="print" />
      </div>

      {toast ? (
        <div
          role="status"
          className={`no-print fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full px-4 py-2 text-sm shadow-lg ${
            toast.tone === "ok"
              ? "bg-zinc-900 text-white"
              : "bg-amber-500 text-black"
          }`}
        >
          {toast.message}
        </div>
      ) : null}
    </>
  );
}

function ActionButton({
  onClick,
  label,
  icon,
}: {
  onClick: () => void;
  label: string;
  icon: "pdf" | "kakao" | "link" | "print";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white/80 px-3.5 py-2 text-sm font-medium text-zinc-800 shadow-sm backdrop-blur transition hover:border-zinc-300 hover:bg-white active:scale-[0.98] dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:bg-zinc-900"
    >
      <Icon name={icon} />
      <span>{label}</span>
    </button>
  );
}

function Icon({ name }: { name: "pdf" | "kakao" | "link" | "print" }) {
  const common = "h-4 w-4";
  if (name === "pdf") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M12 18v-6" />
        <path d="m9 15 3 3 3-3" />
      </svg>
    );
  }
  if (name === "kakao") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C6.48 3 2 6.58 2 11c0 2.86 1.93 5.36 4.83 6.78l-1.2 4.4c-.1.36.3.65.61.45L11.4 19.6c.2.01.4.02.6.02 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
      </svg>
    );
  }
  if (name === "link") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1 1" />
        <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1-1" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9V2h12v7" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  );
}
