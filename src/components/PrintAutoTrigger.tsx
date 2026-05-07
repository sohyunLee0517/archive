"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function PrintAutoTrigger() {
  const searchParams = useSearchParams();
  const auto = searchParams.get("auto");
  const mode = searchParams.get("mode") ?? "print";

  useEffect(() => {
    if (auto !== "1") return;
    const id = window.setTimeout(async () => {
      if (mode === "pdf") {
        const exportRoot = document.getElementById("print-export-root");
        if (!exportRoot) return;

        const html2pdfModule = await import("html2pdf.js");
        const html2pdf =
          (html2pdfModule.default ?? html2pdfModule) as unknown as () => {
            set: (options: Record<string, unknown>) => {
              from: (element: HTMLElement) => { save: () => Promise<void> };
            };
          };

        const fileName = `iso-archive-${new Date().toISOString().slice(0, 10)}.pdf`;

        await html2pdf()
          .set({
            margin: 10,
            filename: fileName,
            pagebreak: { mode: ["css", "legacy"] },
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          })
          .from(exportRoot)
          .save();
        window.close();
        return;
      }

      window.print();
    }, 120);
    return () => window.clearTimeout(id);
  }, [auto, mode]);

  return null;
}
