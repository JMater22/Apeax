"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { BrandImage } from "@/components/shared/brand-image";
import { ProductCard } from "@/components/shared/product-card";
import { ChapterScarcityBlock } from "@/components/shared/chapter-scarcity-block";
import { ReadingProgressBar } from "@/components/shared/reading-progress-bar";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { Magnetic } from "@/components/shared/magnetic";
import { SplitText } from "@/components/shared/split-text";
import { getProductBySlug, getProductsByChapter } from "@/lib/data/products";
import { CHAPTERS } from "@/lib/data/chapters";
import { formatCurrency } from "@/lib/format-currency";
import { type StoryChapter, type Act } from "@/types/story";
import { type Chapter } from "@/types/chapter";

interface ScrollStoryProps {
  story: StoryChapter;
  chapter: Chapter;
}

function estimateReadTime(acts: Act[]): number {
  const wordCount = acts.reduce((sum, act) => sum + act.content.join(" ").split(/\s+/).length, 0);
  return Math.max(1, Math.round(wordCount / 200));
}

function ActVisual({ imageUrl, alt }: { imageUrl?: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [40, -40]);

  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-sm shadow-2xl" ref={ref}>
      <motion.div style={{ y }} className="absolute inset-0">
        <BrandImage
          src={imageUrl}
          alt={alt}
          className="h-full w-full"
          sizes="(max-width: 768px) 70vw, 320px"
        />
      </motion.div>
    </div>
  );
}

export function ScrollStory({ story, chapter }: ScrollStoryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const introRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const readTime = estimateReadTime(story.acts);

  const { scrollYProgress: introProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end start"],
  });
  const introImageY = useTransform(introProgress, [0, 1], [0, shouldReduceMotion ? 0 : 120]);
  const introOverlayOpacity = useTransform(introProgress, [0, 1], [0.55, 0.85]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number((entry.target as HTMLElement).dataset.index));
          }
        });
      },
      { threshold: 0.5, rootMargin: "-35% 0px -35% 0px" },
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function jumpToAct(index: number) {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  const products = getProductsByChapter(chapter.id);
  const claimed = products.reduce((sum, p) => sum + (p.unitsSold ?? 0), 0);
  const total = products.reduce((sum, p) => sum + (p.editionSize ?? 0), 0);
  const relatedProducts = products.filter((p) => story.relatedProductSlugs.includes(p.slug));
  const nextChapter =
    CHAPTERS.find((c) => c.id !== chapter.id && c.status === "live") ??
    CHAPTERS.find((c) => c.id !== chapter.id);

  const headline = story.title.replace(`${chapter.number}: `, "");

  return (
    <div className="relative">
      <ReadingProgressBar />

      <section
        ref={introRef}
        className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden bg-apeax-cod-gray"
      >
        <motion.div className="absolute inset-0" style={{ y: introImageY }}>
          <BrandImage src={chapter.imageUrl} alt={chapter.title} className="h-full w-full scale-110" />
        </motion.div>
        <motion.div className="absolute inset-0 bg-black" style={{ opacity: introOverlayOpacity }} />

        <div className="relative z-10 flex max-w-2xl flex-col items-center gap-5 px-6 text-center">
          <p className="font-sans text-xs uppercase tracking-[3px] text-white/60">
            {chapter.number} — {story.acts.length} Acts
          </p>
          <h1 className="font-display text-5xl uppercase leading-[0.95] text-white md:text-8xl">
            <SplitText text={headline} />
          </h1>
          <p className="font-body text-base italic leading-relaxed text-white/80 md:text-lg">
            {story.dek}
          </p>
          <p className="mt-2 font-sans text-[11px] uppercase tracking-wide text-white/40">
            {story.byline} · {readTime} min read
          </p>
        </div>

        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 z-10"
        >
          <ArrowDown size={20} className="text-white/60" />
        </motion.div>
      </section>

      <div className="pointer-events-none fixed right-6 top-1/2 z-[100] hidden -translate-y-1/2 flex-col items-center gap-1 lg:flex">
        {story.acts.map((act, i) => (
          <button
            key={act.id}
            type="button"
            onClick={() => jumpToAct(i)}
            aria-label={`Go to Act ${act.number}`}
            className="pointer-events-auto flex h-8 w-8 cursor-pointer items-center justify-center"
          >
            <span
              className={cn(
                "block h-2 w-2 rounded-full transition-all",
                i === activeIndex ? "scale-125 bg-apeax-cod-gray" : "bg-apeax-westar",
              )}
            />
          </button>
        ))}
      </div>

      <Reveal className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <p className="mb-6 text-center font-sans text-[11px] uppercase tracking-[2px] text-apeax-cod-gray/40">
          In This Chapter
        </p>
        <div className="border-t border-apeax-westar">
          {story.acts.map((act, i) => (
            <button
              key={act.id}
              onClick={() => jumpToAct(i)}
              className="flex w-full items-start justify-between gap-4 border-b border-apeax-westar py-5 text-left hover:opacity-70"
            >
              <div className="flex gap-4">
                <span className="font-display text-2xl leading-none text-apeax-cod-gray/30">
                  {String(act.number).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-condensed text-lg uppercase tracking-wide text-apeax-cod-gray">
                    {act.title}
                  </p>
                  <p className="mt-1 max-w-md font-body text-sm text-apeax-cod-gray/60">{act.dek}</p>
                </div>
              </div>
              <ArrowRight size={16} className="mt-1.5 shrink-0 text-apeax-cod-gray/40" />
            </button>
          ))}
        </div>
      </Reveal>

      {story.acts.map((act, index) => {
        const product = getProductBySlug(act.featuredProductSlug);
        const isEven = index % 2 === 0;
        return (
          <section
            key={act.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            data-index={index}
            className={cn(
              "relative overflow-hidden px-6 py-20 md:px-12 md:py-28",
              index % 2 === 1 ? "bg-apeax-cararra" : "bg-background",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute select-none font-display text-[240px] leading-none text-apeax-cod-gray/[0.04] md:text-[420px]",
                isEven ? "-left-10 -top-16 md:-left-16" : "-right-10 -top-16 md:-right-16",
              )}
            >
              {String(act.number).padStart(2, "0")}
            </span>

            <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-20">
              <Reveal className={cn("md:sticky md:top-28", !isEven && "md:order-2")}>
                <ActVisual imageUrl={product?.imageUrl} alt={product?.name ?? ""} />
              </Reveal>

              <Reveal delay={0.1} className={cn(!isEven && "md:order-1")}>
                <p className="font-sans text-xs uppercase tracking-[2px] text-apeax-cod-gray/50">
                  Act {act.number} of {story.acts.length}
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] text-apeax-cod-gray md:text-6xl">
                  {act.title}
                </h2>
                <p className="mt-4 font-body text-lg italic leading-relaxed text-apeax-cod-gray/60">
                  {act.dek}
                </p>

                <div className="mt-8 flex max-w-lg flex-col gap-5">
                  {act.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className={cn(
                        "font-body text-base leading-[1.8] text-apeax-cod-gray/85",
                        index === 0 &&
                          pIndex === 0 &&
                          "first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.75] first-letter:text-apeax-cod-gray",
                      )}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <blockquote className="my-8 max-w-lg border-l-2 border-apeax-cod-gray pl-5">
                  <p className="font-display text-2xl italic leading-tight text-apeax-cod-gray md:text-3xl">
                    &ldquo;{act.pullQuote}&rdquo;
                  </p>
                </blockquote>

                {product && (
                  <Magnetic className="mt-4 inline-block w-fit">
                    <Link
                      href={`/shop/${product.slug}`}
                      className="block bg-apeax-cod-gray px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-wide text-white hover:opacity-90"
                    >
                      Shop {product.name} — {formatCurrency(product.price)}
                    </Link>
                  </Magnetic>
                )}
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="relative overflow-hidden bg-apeax-cod-gray px-6 py-24 text-center md:px-12 md:py-32">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[3px] text-white/40">
            End of {chapter.number}
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] text-white md:text-7xl">
            To Be Continued
          </h2>
        </Reveal>
      </section>

      <div className="border-t border-apeax-westar bg-background px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-12">
            <ChapterScarcityBlock claimed={claimed} total={total} chapterSlug={chapter.slug} />
          </Reveal>

          <Reveal>
            <h2 className="mb-8 text-center font-condensed text-xl uppercase tracking-wide text-apeax-cod-gray">
              Shop the Full Chapter
            </h2>
          </Reveal>
          <RevealGroup className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {relatedProducts.map((product) => (
              <RevealItem key={product.id}>
                <ProductCard product={product} />
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={`/chapters/${chapter.slug}`}
              className="flex items-center gap-1 font-sans text-sm font-medium uppercase tracking-wide text-apeax-cod-gray/60 hover:text-apeax-cod-gray"
            >
              <ArrowLeft size={16} /> Back to Chapter
            </Link>
            {nextChapter && (
              <Link
                href={`/chapters/${nextChapter.slug}`}
                className="flex items-center gap-1 font-sans text-sm font-medium uppercase tracking-wide text-apeax-cod-gray hover:opacity-70"
              >
                Explore {nextChapter.title} <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}