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
      setToast({ message: "LINK COPIED", tone: "ok" });
    } catch {
      setToast({ message: "COPY FAILED", tone: "warn" });
    }
  }, []);

  const handleKakaoShare = useCallback(() => {
    if (!KAKAO_JS_KEY) {
      setToast({ message: "KAKAO KEY NOT SET", tone: "warn" });
      return;
    }
    if (!window.Kakao?.Share) {
      setToast({ message: "KAKAO SDK LOADING...", tone: "warn" });
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
      <div className="no-print fixed inset-x-0 bottom-0 z-50 border-t border-primary/20 bg-primary pb-[env(safe-area-inset-bottom)] text-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <div className="mx-auto flex max-w-[1120px] items-stretch justify-center px-6 md:justify-end">
          <ActionBtn
            icon="picture_as_pdf"
            label="SAVE_TO_PDF"
            onClick={handlePrint}
            divider
          />
          <ActionBtn
            icon="chat"
            label="KAKAO_SHARE"
            onClick={handleKakaoShare}
            divider
          />
          <ActionBtn
            icon="share"
            label="COPY_LINK"
            onClick={handleShareLink}
            divider
          />
          <ActionBtn icon="print" label="PRINT_DOC" onClick={handlePrint} />
        </div>
      </div>

      {toast ? (
        <div
          role="status"
          className={`no-print fixed bottom-24 left-1/2 z-[60] -translate-x-1/2 border px-4 py-2 text-xs font-medium tracking-wider shadow-lg ${
            toast.tone === "ok"
              ? "border-primary bg-white text-primary"
              : "border-amber-500 bg-amber-50 text-amber-900"
          }`}
          style={{ fontFamily: "var(--font-terminal)" }}
        >
          {toast.message}
        </div>
      ) : null}
    </>
  );
}

function ActionBtn({
  icon,
  label,
  onClick,
  divider,
}: {
  icon: string;
  label: string;
  onClick: () => void;
  divider?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ fontFamily: "var(--font-terminal)" }}
      className={`flex items-center gap-2 px-3 py-2.5 text-[11px] tracking-[0.05em] transition-colors hover:bg-white hover:text-primary sm:px-6 ${
        divider ? "border-r border-white/20" : ""
      }`}
    >
      <span className="material-symbols-outlined text-[16px]">{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
