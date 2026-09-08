"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import Link from "next/link";

interface ChapterScarcityBlockProps {
  claimed: number;
  total: number;
  chapterSlug?: string;
}

export function ChapterScarcityBlock({ claimed, total, chapterSlug }: ChapterScarcityBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0 });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(shouldReduceMotion ? claimed : 0);
  const percent = total > 0 ? (claimed / total) * 100 : 0;

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;
    const controls = animate(0, claimed, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, claimed, shouldReduceMotion]);

  const remaining = total - claimed;

  return (
    <div ref={ref} className="border border-apeax-westar bg-apeax-cararra p-6 md:p-8">
      <p className="font-sans text-[10px] uppercase tracking-[2px] text-apeax-cod-gray/50">
        Chapter Progress
      </p>
      <div className="mt-2 flex flex-wrap items-baseline gap-2">
        <span className="font-display text-5xl leading-none text-apeax-cod-gray md:text-6xl">
          {display}
        </span>
        <span className="font-sans text-sm text-apeax-cod-gray/50">
          / {total} pieces claimed across this chapter
        </span>
      </div>
      <div className="mt-4 h-2 w-full overflow-hidden bg-apeax-westar">
        <motion.div
          className="h-full bg-apeax-cod-gray"
          initial={{ width: shouldReduceMotion ? `${percent}%` : "0%" }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      {remaining > 0 ? (
        <p className="mt-3 font-sans text-xs font-bold uppercase tracking-wide text-apeax-cod-gray">
          Don&apos;t miss this — only {remaining} pieces remain in this chapter
        </p>
      ) : (
        <p className="mt-3 font-sans text-xs font-bold uppercase tracking-wide text-apeax-cod-gray">
          This chapter is fully claimed
        </p>
      )}
      {chapterSlug && (
        <Link
          href={`/charter-members?chapter=${chapterSlug}`}
          className="mt-4 inline-block font-sans text-xs font-medium uppercase tracking-wide text-apeax-cod-gray underline underline-offset-4 hover:opacity-70"
        >
          View Charter Members
        </Link>
      )}
    </div>
  );
}