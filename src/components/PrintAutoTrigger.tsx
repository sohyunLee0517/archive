"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function PrintAutoTrigger() {
  const searchParams = useSearchParams();
  const auto = searchParams.get("auto");

  useEffect(() => {
    if (auto !== "1") return;
    const id = window.setTimeout(() => {
      window.print();
    }, 120);
    return () => window.clearTimeout(id);
  }, [auto]);

  return null;
}
