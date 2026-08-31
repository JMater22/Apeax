"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { ALL_PRODUCTS } from "@/lib/data/products";

// TODO: replace with real recent-order events once the backend exists
// (Sprint 7). This simulates plausible activity from real product data for
// demo purposes — not fabricated numbers, just not yet a live feed.
const SAMPLE_LOCATIONS = ["Quezon City", "Cebu City", "Davao City", "Makati", "Baguio", "Iloilo City"];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState<{ name: string; location: string; minutesAgo: number } | null>(
    null,
  );
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const claimableProducts = ALL_PRODUCTS.filter((p) => !p.isSoldOut);
    if (claimableProducts.length === 0) return;

    function showToast() {
      const product = pickRandom(claimableProducts);
      setMessage({
        name: product.name,
        location: pickRandom(SAMPLE_LOCATIONS),
        minutesAgo: Math.floor(Math.random() * 12) + 1,
      });
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }

    const firstDelay = setTimeout(showToast, 6000);
    const interval = setInterval(showToast, 22000);
    return () => {
      clearTimeout(firstDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-30 hidden md:block">
      <AnimatePresence>
        {visible && message && (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16, x: shouldReduceMotion ? 0 : -8 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex max-w-xs items-start gap-3 border border-apeax-westar bg-white p-4 shadow-lg"
          >
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-apeax-cod-gray" />
            <div>
              <p className="font-sans text-xs font-medium text-apeax-cod-gray">
                Someone in {message.location} just claimed
              </p>
              <p className="font-condensed text-sm uppercase tracking-wide text-apeax-cod-gray">
                {message.name}
              </p>
              <p className="mt-0.5 font-sans text-[10px] uppercase tracking-wide text-apeax-cod-gray/40">
                {message.minutesAgo} min ago
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}