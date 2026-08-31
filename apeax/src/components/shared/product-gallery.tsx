"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { BrandImage } from "@/components/shared/brand-image";

interface ProductGalleryProps {
  productName: string;
  imageUrl?: string;
}

const BACK_VIEW_IMAGE = "/images/mock-lookbook/Tee-Back-View.png";
const DETAIL_VIEW_IMAGE = "/images/mock-lookbook/Tee-Detail-View.png";
const WORN_VIEW_IMAGE = "/images/mock-lookbook/Gallery-Worn-View.png";

export function ProductGallery({ productName, imageUrl }: ProductGalleryProps) {
  const views = [
    { label: "Front", src: imageUrl },
    { label: "Back", src: BACK_VIEW_IMAGE },
    { label: "Detail", src: DETAIL_VIEW_IMAGE },
    { label: "Worn", src: WORN_VIEW_IMAGE },
  ];
  const [activeView, setActiveView] = useState(0);

  return (
    <div>
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <BrandImage
              src={views[activeView].src}
              alt={`${productName} — ${views[activeView].label} view`}
              className="h-full w-full"
              sizes="(max-width: 768px) 90vw, 45vw"
            />
          </motion.div>
        </AnimatePresence>
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
            <BrandImage src={view.src} alt="" className="h-full w-full" sizes="120px" />
          </button>
        ))}
      </div>
    </div>
  );
}