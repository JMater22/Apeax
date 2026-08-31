"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ChapterStatusBadge } from "@/components/shared/chapter-status-badge";
import { BrandImage } from "@/components/shared/brand-image";
import { type Chapter } from "@/types/chapter";
import { getProductsByChapter } from "@/lib/data/products";
export function ChapterCard({ chapter }: { chapter: Chapter }) {
  const shouldReduceMotion = useReducedMotion();
  const chapterProducts = getProductsByChapter(chapter.id);
  const claimed = chapterProducts.reduce((sum, p) => sum + (p.unitsSold ?? 0), 0);
  const total = chapterProducts.reduce((sum, p) => sum + (p.editionSize ?? 0), 0);
  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -6, boxShadow: "0 16px 28px rgba(10,10,10,0.14)" }}
      whileTap={shouldReduceMotion ? undefined : { y: -2, boxShadow: "0 8px 16px rgba(10,10,10,0.10)" }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/chapters/${chapter.slug}`} className="group block">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <BrandImage
            src={chapter.imageUrl}
            alt={chapter.title}
            className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
            placeholderVariant={chapter.status === "upcoming" ? "light" : "dark"}
          />
          <div className="absolute left-3 top-3">
            <ChapterStatusBadge status={chapter.status} />
          </div>
        </div>
        <div className="mt-3">
          <span className="font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/60">
            {chapter.number}
          </span>
          <h3 className="font-condensed text-lg uppercase tracking-wide text-apeax-cod-gray">
            {chapter.title}
          </h3>
          <p className="mt-1 line-clamp-2 font-body text-sm text-apeax-cod-gray/70">
            {chapter.storyTeaser}
          </p>
          {total > 0 && (
          <div className="mt-2">
            <div className="h-1 w-full overflow-hidden bg-apeax-westar">
              <div
                className="h-full bg-apeax-cod-gray"
                style={{ width: `${(claimed / total) * 100}%` }}
              />
            </div>
            <span className="mt-1 block font-sans text-[10px] uppercase tracking-wide text-apeax-cod-gray/50">
              {claimed} / {total} claimed across this chapter
            </span>
          </div>
        )}
        </div>
      </Link>
    </motion.div>
  );
}