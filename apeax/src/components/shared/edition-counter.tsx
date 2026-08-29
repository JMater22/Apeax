"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface EditionCounterProps {
  claimed: number;
  total: number;
}

export function EditionCounter({ claimed, total }: EditionCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(shouldReduceMotion ? claimed : 0);
  const [barWidth, setBarWidth] = useState(shouldReduceMotion ? (claimed / total) * 100 : 0);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;
    const controls = animate(0, claimed, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    const timeout = setTimeout(() => setBarWidth((claimed / total) * 100), 50);
    return () => {
      controls.stop();
      clearTimeout(timeout);
    };
  }, [isInView, claimed, total, shouldReduceMotion]);

  const remaining = total - claimed;
  const percentClaimed = (claimed / total) * 100;
  const isAlmostGone = remaining > 0 && remaining <= 10;
  const isSellingFast = !isAlmostGone && remaining > 0 && remaining <= total * 0.3;

  return (
    <div ref={ref} className="mt-3 border border-apeax-cod-gray/15 p-4">
      <p className="font-sans text-[10px] uppercase tracking-[2px] text-apeax-cod-gray/50">
        Limited Edition
      </p>

      <div className="mt-2 flex items-baseline gap-1.5">
        <span className="font-display text-4xl leading-none text-apeax-cod-gray">
          {display}
        </span>
        <span className="font-sans text-sm text-apeax-cod-gray/50">/ {total} claimed</span>
      </div>

      <div className="mt-3 h-1.5 w-full overflow-hidden bg-apeax-westar">
        <motion.div
          className="h-full bg-apeax-cod-gray"
          initial={false}
          animate={{ width: `${barWidth}%` }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: shouldReduceMotion ? `${percentClaimed}%` : undefined }}
        />
      </div>

      {remaining <= 0 ? (
        <p className="mt-3 font-sans text-xs font-bold uppercase tracking-wide text-apeax-cod-gray">
          Fully Claimed
        </p>
      ) : isAlmostGone ? (
        <p className="mt-3 inline-block bg-apeax-cod-gray px-2.5 py-1 font-sans text-xs font-bold uppercase tracking-wide text-white">
          Only {remaining} Left — Almost Gone
        </p>
      ) : isSellingFast ? (
        <p className="mt-3 font-sans text-xs font-bold uppercase tracking-wide text-apeax-cod-gray">
          Selling Fast — {remaining} Remaining
        </p>
      ) : (
        <p className={cn("mt-3 font-sans text-xs text-apeax-cod-gray/60")}>
          {remaining} pieces remaining
        </p>
      )}
    </div>
  );
}