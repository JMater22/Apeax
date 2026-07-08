"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProductPlaceholder } from "@/components/shared/product-placeholder";

interface ProductGalleryProps {
  productName: string;
  placeholderColor?: string;
}

const PLACEHOLDER_VIEWS = ["Front", "Back", "Detail", "Worn"];

export function ProductGallery({ productName }: ProductGalleryProps) {
  const [activeView, setActiveView] = useState(0);

  return (
    <div>
      <div
        className="aspect-[4/5] w-full overflow-hidden rounded-sm"
        role="img"
        aria-label={`${productName} — ${PLACEHOLDER_VIEWS[activeView]} view`}
      >
        <ProductPlaceholder className="h-full w-full" />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {PLACEHOLDER_VIEWS.map((view, index) => (
          <button
            key={view}
            onClick={() => setActiveView(index)}
            className={cn(
              "aspect-square overflow-hidden rounded-sm border-2",
              index === activeView ? "border-apeax-cod-gray" : "border-transparent opacity-60",
            )}
            aria-label={`Show ${view} view`}
            aria-pressed={index === activeView}
          >
            <ProductPlaceholder className="h-full w-full" />
            <span className="sr-only">{view}</span>
          </button>
        ))}
      </div>
    </div>
  );
}