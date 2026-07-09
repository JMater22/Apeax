import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/shared/product-card";
import { BrandAsterisk } from "@/components/shared/brand-asterisk";
import { getProductsByChapter } from "@/lib/data/products";
import Link from "next/link";

export function FeaturedProducts() {
  const products = getProductsByChapter("1").slice(0, 4);

  return (
    <section className="relative overflow-hidden border-b border-apeax-westar py-16 md:py-24">
      <BrandAsterisk className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 text-apeax-cod-gray/[0.04] md:h-96 md:w-96" />
      <Container className="relative">
        <h2 className="mb-12 text-center font-condensed text-[28px] uppercase tracking-[1.12px] text-apeax-cod-gray">
          Recommendation
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/shop">
            <Button variant="secondary" className="uppercase tracking-[1.8px]">
              Shop
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}