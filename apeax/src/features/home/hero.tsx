"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Magnetic } from "@/components/shared/magnetic";
import { SplitText } from "@/components/shared/split-text";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 120]);

  return (
    <section
      ref={ref}
      className="relative flex h-[70vh] min-h-[480px] w-full items-end overflow-hidden border-b-2 border-apeax-westar bg-apeax-cod-gray md:h-[85vh]"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src="/images/mock-lookbook/Hero.png"
          alt="APEAX latest lookbook"
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col gap-6 px-6 pb-16 md:px-12 md:pb-24">
        <h1 className="font-display text-[48px] uppercase leading-[0.95] text-white md:text-[96px]">
          <SplitText text="State of" />
          <br />
          <SplitText text="Becoming." delay={0.15} />
        </h1>
        <p className="max-w-md font-body text-sm uppercase leading-relaxed tracking-wide text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.6)] md:text-base">
          APEAX is more than clothing. It&apos;s a mindset. A commitment to
          growth. A state of becoming.
        </p>
        <Magnetic className="inline-block w-fit">
          <Link
            href="/new-in"
            className="block bg-white px-8 py-4 text-xs font-bold uppercase tracking-[1.8px] text-apeax-cod-gray transition-colors hover:bg-white/90"
          >
            Shop New In
          </Link>
        </Magnetic>
      </div>
    </section>
  );
}