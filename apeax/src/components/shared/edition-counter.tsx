"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";

interface EditionCounterProps {
  claimed: number;
  total: number;
}

export function EditionCounter({ claimed, total }: EditionCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(shouldReduceMotion ? claimed : 0);
  const percentClaimed = total > 0 ? (claimed / total) * 100 : 0;

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;
    const controls = animate(0, claimed, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, claimed, shouldReduceMotion]);

  const remaining = total - claimed;
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
          initial={{ width: shouldReduceMotion ? `${percentClaimed}%` : "0%" }}
          whileInView={{ width: `${percentClaimed}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {remaining <= 0 ? (
        <p className="mt-3 font-sans text-xs font-bold uppercase tracking-wide text-apeax-cod-gray">
          Fully Claimed
        </p>
      ) : isAlmostGone ? (
        <p className="mt-3 inline-block bg-apeax-cod-gray px-2.5 py-1 font-sans text-xs font-bold uppercase tracking-wide text-white">
          Don&apos;t Miss This — Only {remaining} Left
        </p>
      ) : isSellingFast ? (
        <p className="mt-3 font-sans text-xs font-bold uppercase tracking-wide text-apeax-cod-gray">
          Going Fast — Don&apos;t Miss Out
        </p>
      ) : (
        <p className="mt-3 font-sans text-xs text-apeax-cod-gray/60">
          {remaining} pieces remaining
        </p>
      )}
    </div>
  );
}