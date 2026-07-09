import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/shared/product-card";
import { STORY_CHAPTERS } from "@/lib/data/story-chapters";
import { getProductBySlug, ALL_PRODUCTS } from "@/lib/data/products";
import { formatCurrency } from "@/lib/format-currency";
import { BrandImage } from "@/components/shared/brand-image";
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
  const featuredProduct = getProductBySlug(act.featuredProductSlug);

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

      {featuredProduct && (
        <div className="mx-auto mt-14 max-w-sm border-t border-apeax-westar pt-10 text-center">
          <p className="mb-4 font-sans text-[10px] uppercase tracking-[1.5px] text-apeax-cod-gray/50">
            The Piece of This Act
          </p>
          <Link href={`/shop/${featuredProduct.slug}`} className="group block">
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                        <BrandImage
                          src={featuredProduct.imageUrl}
                          alt={featuredProduct.name}
                          className="h-full w-full"
                          sizes="(max-width: 768px) 90vw, 384px"
                        />
                      </div>
            <p className="mt-4 font-condensed text-xl uppercase tracking-wide text-apeax-cod-gray">
              {featuredProduct.name}
            </p>
            <p className="mt-1 font-sans text-sm text-apeax-cod-gray/60">
              {formatCurrency(featuredProduct.price)}
            </p>
            <span className="mt-4 inline-block bg-apeax-cod-gray px-6 py-3 font-sans text-xs font-bold uppercase tracking-wide text-white group-hover:opacity-90">
              Shop This Piece
            </span>
          </Link>
        </div>
      )}

      <div className="mx-auto mt-14 flex max-w-xl items-center justify-between">
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
            Shop the Full Chapter <ArrowRight size={16} />
          </Link>
        )}
      </div>

      {!nextAct && (
        <div className="mx-auto mt-16 max-w-4xl border-t border-apeax-westar pt-16">
          <h2 className="mb-6 text-center font-condensed text-xl uppercase tracking-wide text-apeax-cod-gray">
            Shop the Full Chapter
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {ALL_PRODUCTS.filter((p) => story.relatedProductSlugs.includes(p.slug)).map(
              (product) => (
                <ProductCard key={product.id} product={product} />
              ),
            )}
          </div>
        </div>
      )}
    </Container>
  );
}