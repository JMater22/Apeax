import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/shared/product-card";
import { STORY_CHAPTERS } from "@/lib/data/story-chapters";
import { type Product } from "@/types/product";
import { ALL_PRODUCTS } from "@/lib/data/products";
interface StoryReaderPageProps {
  params: Promise<{ slug: string; act: string }>;
}

export default async function StoryReaderPage({ params }: StoryReaderPageProps) {
  const { slug, act: actSlug } = await params;
  const story = STORY_CHAPTERS[slug];
  if (!story) notFound();

  const actIndex = story.acts.findIndex((a) => a.slug === actSlug);
  if (actIndex === -1) notFound();

  const act = story.acts[actIndex];
  const prevAct = story.acts[actIndex - 1];
  const nextAct = story.acts[actIndex + 1];

  return (
    <Container className="bg-background py-16">
      <p className="text-center font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/60">
        {story.title} — Act {act.number} of {story.acts.length}
      </p>

      <h1 className="mx-auto mt-4 max-w-2xl text-center font-display text-4xl uppercase text-apeax-cod-gray md:text-5xl">
        {act.title}
      </h1>

      <p className="mx-auto mt-8 max-w-xl text-center font-body text-lg leading-relaxed text-apeax-cod-gray/80">
        {act.content}
      </p>

      <div className="mx-auto mt-12 flex max-w-xl items-center justify-between">
        {prevAct ? (
          <Link
            href={`/chapters/${slug}/story/${prevAct.slug}`}
            className="flex items-center gap-1 font-sans text-sm uppercase tracking-wide text-apeax-cod-gray/60 hover:text-apeax-cod-gray"
          >
            <ArrowLeft size={16} /> Act {prevAct.number}
          </Link>
        ) : (
          <span />
        )}

        {nextAct ? (
          <Link
            href={`/chapters/${slug}/story/${nextAct.slug}`}
            className="flex items-center gap-1 font-sans text-sm uppercase tracking-wide text-apeax-cod-gray/60 hover:text-apeax-cod-gray"
          >
            Act {nextAct.number} <ArrowRight size={16} />
          </Link>
        ) : (
          <Link
            href={`/chapters/${slug}`}
            className="flex items-center gap-1 font-sans text-sm font-medium uppercase tracking-wide text-apeax-cod-gray hover:opacity-70"
          >
            Shop This Chapter <ArrowRight size={16} />
          </Link>
        )}
      </div>

      {!nextAct && (
        <div className="mx-auto mt-16 max-w-4xl border-t border-apeax-westar pt-16">
          <h2 className="mb-6 text-center font-condensed text-xl uppercase tracking-wide text-apeax-cod-gray">
            Related Merchandise
          </h2>
          <RelatedMerch productSlugs={story.relatedProductSlugs} />
        </div>
      )}
    </Container>
  );
}

function RelatedMerch({ productSlugs }: { productSlugs: string[] }) {
  const products = ALL_PRODUCTS.filter((p) => productSlugs.includes(p.slug));
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}