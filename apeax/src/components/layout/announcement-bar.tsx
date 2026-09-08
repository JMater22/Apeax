"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { getLatestLiveChapter } from "@/lib/data/chapters";
import { getProductsByChapter } from "@/lib/data/products";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const chapter = getLatestLiveChapter();
  if (!chapter || dismissed) return null;

  const products = getProductsByChapter(chapter.id);
  const totalClaimed = products.reduce((sum, p) => sum + (p.unitsSold ?? 0), 0);
  const totalEdition = products.reduce((sum, p) => sum + (p.editionSize ?? 0), 0);
  const remaining = totalEdition - totalClaimed;

  return (
    <div className="relative flex items-center justify-center bg-apeax-cod-gray px-10 py-2 text-center">
      <p className="font-sans text-[11px] font-medium uppercase tracking-wide text-white">
        {chapter.title} — {totalClaimed.toLocaleString()} of {totalEdition.toLocaleString()} claimed. Don&apos;t miss this — only {remaining.toLocaleString()} remain.
      </p>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="absolute right-3 text-white/60 hover:text-white"
      >
        <X size={14} />
      </button>
    </div>
  );
}