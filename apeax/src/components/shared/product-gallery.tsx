"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { BrandImage } from "@/components/shared/brand-image";

interface ProductGalleryProps {
  productName: string;
  imageUrl?: string;
}

const WORN_VIEW_IMAGE = "/images/mock-lookbook/Gallery-Worn-View.png";

export function ProductGallery({ productName, imageUrl }: ProductGalleryProps) {
  const views = [
    { label: "Front", src: imageUrl },
    { label: "Worn", src: WORN_VIEW_IMAGE },
  ];
  const [activeView, setActiveView] = useState(0);

  return (
    <div>
      <div className="relative aspect-[4/5] w-full">
        <BrandImage
          src={views[activeView].src}
          alt={`${productName} — ${views[activeView].label} view`}
          className="h-full w-full"
        />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {views.map((view, index) => (
          <button
            key={view.label}
            onClick={() => setActiveView(index)}
            className={cn(
              "relative aspect-square overflow-hidden rounded-sm border-2",
              index === activeView ? "border-apeax-cod-gray" : "border-transparent opacity-60",
            )}
            aria-label={`Show ${view.label} view`}
            aria-pressed={index === activeView}
          >
            <BrandImage src={view.src} alt="" className="h-full w-full" />
          </button>
        ))}
      </div>
    </div>
  );
}