import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/shared/product-card";
import { ChapterCard } from "@/components/shared/chapter-card";
import { ChapterHero } from "@/components/shared/chapter-hero";
import { ChapterScarcityBlock } from "@/components/shared/chapter-scarcity-block";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { getChapterBySlug, CHAPTERS } from "@/lib/data/chapters";
import { getProductsByChapter } from "@/lib/data/products";
import { STORY_CHAPTERS } from "@/lib/data/story-chapters";

interface ChapterDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ChapterDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) return { title: "Chapter Not Found | APEAX" };
  return {
    title: `${chapter.title} | APEAX`,
    description: chapter.storyTeaser,
  };
}

export default async function ChapterDetailPage({ params }: ChapterDetailPageProps) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) notFound();

  const products = getProductsByChapter(chapter.id);
  const hasStory = Boolean(STORY_CHAPTERS[chapter.slug]);
  const claimed = products.reduce((sum, p) => sum + (p.unitsSold ?? 0), 0);
  const total = products.reduce((sum, p) => sum + (p.editionSize ?? 0), 0);
  const otherChapters = CHAPTERS.filter((c) => c.id !== chapter.id);

  return (
    <>
      <ChapterHero chapter={chapter} hasStory={hasStory} />

      <Container className="py-16 md:py-24">
        {products.length > 0 ? (
          <>
            <Reveal className="mb-12 md:mb-16">
              <ChapterScarcityBlock claimed={claimed} total={total} chapterSlug={chapter.slug} />
            </Reveal>

            <Reveal>
              <h2 className="mb-8 font-condensed text-xl uppercase tracking-wide text-apeax-cod-gray md:text-2xl">
                Shop This Chapter — {products.length} Pieces
              </h2>
            </Reveal>

            <RevealGroup className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
              {products.map((product) => (
                <RevealItem key={product.id}>
                  <ProductCard product={product} />
                </RevealItem>
              ))}
            </RevealGroup>
          </>
        ) : (
          <Reveal className="mx-auto max-w-md text-center">
            <p className="font-display text-3xl uppercase text-apeax-cod-gray">Coming Soon</p>
            <p className="mt-4 font-body text-sm leading-relaxed text-apeax-cod-gray/70">
              This chapter hasn&apos;t dropped yet. Check back soon, or explore
              what&apos;s already live below.
            </p>
          </Reveal>
        )}

        {otherChapters.length > 0 && (
          <div className="mt-24 border-t border-apeax-westar pt-16 md:mt-32">
            <Reveal>
              <h2 className="mb-8 text-center font-condensed text-xl uppercase tracking-wide text-apeax-cod-gray md:text-2xl">
                Continue the Story
              </h2>
            </Reveal>
            <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {otherChapters.map((c) => (
                <RevealItem key={c.id}>
                  <ChapterCard chapter={c} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        )}
      </Container>
    </>
  );
}