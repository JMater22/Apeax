import { notFound } from "next/navigation";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { ProductGallery } from "@/components/shared/product-gallery";
import { VariantSelector } from "@/components/shared/variant-selector";
import { ProductCard } from "@/components/shared/product-card";
import { ReviewsSection } from "@/components/shared/reviews-section";
import { getProductBySlug, getRelatedProducts } from "@/lib/data/products";
import { getReviewsForProduct, getAverageRating } from "@/lib/data/reviews";
import { formatCurrency } from "@/lib/format-currency";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product);
  const reviews = getReviewsForProduct(slug);
  const averageRating = getAverageRating(reviews);

  return (
    <>
      <PageHeader title={product.name} />
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <ProductGallery productName={product.name} placeholderColor={product.placeholderColor} />

          <div>
            <h1 className="font-condensed text-3xl uppercase tracking-wide text-apeax-cod-gray">
              {product.name}
            </h1>
            <p className="mt-2 font-display text-2xl text-apeax-cod-gray">
              {formatCurrency(product.price)}
            </p>

            {product.editionSize && (
              <p className="mt-2 font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/60">
                Limited Edition — {product.unitsSold ?? 0} / {product.editionSize} claimed
              </p>
            )}

            <p className="mt-6 font-body text-sm leading-relaxed text-apeax-cod-gray/80">
              Part of the APEAX story-driven collection. Every piece carries
              the narrative of its chapter — worn, not just bought.
            </p>

            {product.variants && product.variants.length > 0 && (
              <div className="mt-8">
                <VariantSelector variants={product.variants} />
              </div>
            )}
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