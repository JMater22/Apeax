import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/shared/product-card";
import { getProductsByChapter } from "@/lib/data/products";

export function FeaturedProducts() {
  const products = getProductsByChapter("1").slice(0, 4);

  return (
    <section className="border-b border-apeax-westar py-16 md:py-24">
      <Container>
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