"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BrandImage } from "@/components/shared/brand-image";
import { ProductCard } from "@/components/shared/product-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { getProductBySlug, ALL_PRODUCTS } from "@/lib/data/products";
import { formatCurrency } from "@/lib/format-currency";
import { type StoryChapter } from "@/types/story";

interface ScrollStoryProps {
  story: StoryChapter;
  chapterSlug: string;
}

export function ScrollStory({ story, chapterSlug }: ScrollStoryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

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

  const relatedProducts = ALL_PRODUCTS.filter((p) => story.relatedProductSlugs.includes(p.slug));

  return (
    <div className="relative">
      <Reveal className="px-6 pb-10 pt-16 text-center md:px-12 md:pt-24">
        <p className="font-sans text-xs uppercase tracking-[2px] text-apeax-cod-gray/50">
          {story.title}
        </p>
        <h1 className="mt-3 font-display text-4xl uppercase text-apeax-cod-gray md:text-5xl">
          The Story
        </h1>
        <p className="mt-4 font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/40">
          Scroll to explore
        </p>
      </Reveal>

      {/* Slim progress rail — desktop only, decorative, not a background element */}
      <div className="fixed right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {story.acts.map((act, i) => (
          <button
            key={act.id}
            onClick={() => jumpToAct(i)}
            aria-label={`Go to Act ${act.number}`}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              i === activeIndex ? "scale-125 bg-apeax-cod-gray" : "bg-apeax-westar",
            )}
          />
        ))}
      </div>

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
            className="flex min-h-[85vh] items-center px-6 py-16 md:px-12"
          >
            <div className="mx-auto grid w-full max-w-4xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
              <Reveal className={cn(!isEven && "md:order-2")}>
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-sm shadow-lg">
                  <BrandImage
                    src={product?.imageUrl}
                    alt={product?.name ?? ""}
                    className="h-full w-full"
                    sizes="(max-width: 768px) 60vw, 280px"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1} className={cn(!isEven && "md:order-1")}>
                <p className="font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/50">
                  Act {act.number} of {story.acts.length}
                </p>
                <h2 className="mt-3 font-display text-3xl uppercase text-apeax-cod-gray md:text-4xl">
                  {act.title}
                </h2>
                <p className="mt-5 font-body text-base leading-relaxed text-apeax-cod-gray/80">
                  {act.content}
                </p>
                {product && (
                  <Link
                    href={`/shop/${product.slug}`}
                    className="mt-6 inline-block font-sans text-xs font-bold uppercase tracking-wide text-apeax-cod-gray underline underline-offset-4 hover:opacity-70"
                  >
                    Shop {product.name} — {formatCurrency(product.price)}
                  </Link>
                )}
              </Reveal>
            </div>
          </section>
        );
      })}

      <div className="border-t border-apeax-westar px-6 py-16 md:px-12">
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
        <div className="mt-10 text-center">
          <Link
            href={`/chapters/${chapterSlug}`}
            className="font-sans text-sm font-medium uppercase tracking-wide text-apeax-cod-gray underline underline-offset-4 hover:opacity-70"
          >
            Back to Chapter
          </Link>
        </div>
      </div>
    </div>
  );
}