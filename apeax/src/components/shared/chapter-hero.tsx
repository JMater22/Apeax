"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { BrandImage } from "@/components/shared/brand-image";
import { ChapterStatusBadge } from "@/components/shared/chapter-status-badge";
import { Magnetic } from "@/components/shared/magnetic";
import { SplitText } from "@/components/shared/split-text";
import { type Chapter } from "@/types/chapter";

interface ChapterHeroProps {
  chapter: Chapter;
  hasStory: boolean;
}

export function ChapterHero({ chapter, hasStory }: ChapterHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 100]);

  return (
    <section
      ref={ref}
      className="relative flex h-[60vh] min-h-[420px] w-full items-end overflow-hidden bg-apeax-cod-gray md:h-[75vh]"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <BrandImage
          src={chapter.imageUrl}
          alt={chapter.title}
          className="h-full w-full scale-110"
          placeholderVariant={chapter.status === "upcoming" ? "light" : "dark"}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 flex w-full flex-col gap-4 px-6 pb-12 md:px-12 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ChapterStatusBadge status={chapter.status} />
        </motion.div>
        <div>
          <p className="font-sans text-xs uppercase tracking-[2px] text-white/60">
            {chapter.number}
          </p>
          <h1 className="mt-2 font-display text-5xl uppercase leading-[0.95] text-white md:text-7xl">
            <SplitText text={chapter.title} />
          </h1>
        </div>
        <p className="max-w-lg font-body text-sm leading-relaxed text-white/80 md:text-base">
          {chapter.storyTeaser}
        </p>
        {hasStory && (
          <Magnetic className="mt-2 inline-block w-fit">
            <Link
              href={`/chapters/${chapter.slug}/story`}
              className="block bg-white px-8 py-4 font-sans text-xs font-bold uppercase tracking-[1.8px] text-apeax-cod-gray hover:bg-white/90"
            >
              Read the Story
            </Link>
          </Magnetic>
        )}
      </div>
    </section>
  );
}