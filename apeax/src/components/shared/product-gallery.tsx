"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  productName: string;
  placeholderColor?: string;
}

// TODO: swap placeholder blocks for real product photography once available
const PLACEHOLDER_VIEWS = ["Front", "Back", "Detail", "Worn"];

export function ProductGallery({ productName, placeholderColor }: ProductGalleryProps) {
  const [activeView, setActiveView] = useState(0);

  return (
    <div>
      <div
        className={cn(
          "aspect-[4/5] w-full rounded-sm",
          placeholderColor ?? "bg-apeax-cod-gray",
        )}
        role="img"
        aria-label={`${productName} — ${PLACEHOLDER_VIEWS[activeView]} view`}
      />
      <div className="mt-3 grid grid-cols-4 gap-2">
        {PLACEHOLDER_VIEWS.map((view, index) => (
          <button
            key={view}
            onClick={() => setActiveView(index)}
            className={cn(
              "aspect-square rounded-sm border-2 text-[10px] uppercase tracking-wide",
              placeholderColor ?? "bg-apeax-cod-gray",
              index === activeView ? "border-apeax-cod-gray" : "border-transparent opacity-60",
            )}
            aria-label={`Show ${view} view`}
            aria-pressed={index === activeView}
          >
            <span className="sr-only">{view}</span>
          </button>
        ))}
      </div>
    </div>
  );
}