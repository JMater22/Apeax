import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { ProductGallery } from "@/components/shared/product-gallery";
import { VariantSelector } from "@/components/shared/variant-selector";
import { ProductDetailsSection } from "@/components/shared/product-details-section";
import { ProductCard } from "@/components/shared/product-card";
import { EditionCounter } from "@/components/shared/edition-counter";
import { ReviewsSection } from "@/components/shared/reviews-section";
import { getProductBySlug, getRelatedProducts } from "@/lib/data/products";
import { getReviewsForProduct, getAverageRating } from "@/lib/data/reviews";
import { getChapterById } from "@/lib/data/chapters";
import { STORY_CHAPTERS } from "@/lib/data/story-chapters";
import { formatCurrency } from "@/lib/format-currency";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found | APEAX" };
  return {
    title: `${product.name} | APEAX`,
    description: product.story,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product);
  const reviews = getReviewsForProduct(slug);
  const averageRating = getAverageRating(reviews);

  const chapter = product.chapterId ? getChapterById(product.chapterId) : undefined;
  const hasFullStory = chapter ? Boolean(STORY_CHAPTERS[chapter.slug]) : false;

  return (
    <>
      <PageHeader title={product.name} />
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <ProductGallery productName={product.name} imageUrl={product.imageUrl} />

          <div>
            <h1 className="font-condensed text-3xl uppercase tracking-wide text-apeax-cod-gray">
              {product.name}
            </h1>
            <p className="mt-2 font-display text-2xl text-apeax-cod-gray">
              {formatCurrency(product.price)}
            </p>

            {product.editionSize && (
              <EditionCounter claimed={product.unitsSold ?? 0} total={product.editionSize} />
            )}

            <div className="mt-6 border-l-2 border-apeax-westar pl-4">
              <p className="font-sans text-[10px] uppercase tracking-[2px] text-apeax-cod-gray/40">
                The Story
              </p>
              <p className="mt-2 font-body text-sm italic leading-relaxed text-apeax-cod-gray/80">
                {product.story}
              </p>
              {chapter && hasFullStory && (
                <Link
                  href={`/chapters/${chapter.slug}/story`}
                  className="mt-3 inline-block font-sans text-xs font-medium uppercase tracking-wide text-apeax-cod-gray underline underline-offset-4 hover:opacity-70"
                >
                  Read the Full Chapter Story
                </Link>
              )}
            </div>

            {product.variants && product.variants.length > 0 && (
              <div className="mt-8">
                <VariantSelector
                  productSlug={product.slug}
                  productName={product.name}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  variants={product.variants}
                />
              </div>
            )}

            {product.details && <ProductDetailsSection details={product.details} />}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t border-apeax-westar pt-16">
            <h2 className="mb-6 text-center font-condensed text-xl uppercase tracking-wide text-apeax-cod-gray">
              Related Products
            </h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-20">
          <ReviewsSection reviews={reviews} averageRating={averageRating} />
        </div>
      </Container>
    </>
  );
}