import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/shared/product-card";
import { type Product } from "@/types/product";

// TODO: replace with a real fetch from services/product.service.ts (Sprint 7)
const FEATURED_PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "linen-vest",
    name: "Linen Vest",
    price: 650,
    placeholderColor: "bg-gradient-to-b from-[#2a2520] to-[#1a1510]",
  },
  {
    id: "2",
    slug: "faux-leather-jacket",
    name: "Faux Leather Jacket",
    price: 650,
    placeholderColor: "bg-gradient-to-b from-[#1a1510] to-[#2a2520]",
  },
  {
    id: "3",
    slug: "crop-top",
    name: "Crop Top",
    price: 650,
    placeholderColor: "bg-gradient-to-b from-[#c8c4be] to-[#b0aba4]",
  },
  {
    id: "4",
    slug: "oversized-cotton-shirt",
    name: "Oversized Cotton Shirt",
    price: 650,
    placeholderColor: "bg-gradient-to-b from-[#e0dbd5] to-[#d0cbc4]",
  },
];

export function FeaturedProducts() {
  return (
    <section className="border-b border-apeax-westar py-16 md:py-24">
      <Container>
        <h2 className="mb-12 text-center font-condensed text-[28px] uppercase tracking-[1.12px] text-apeax-cod-gray">
          Recommendation
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="secondary" className="uppercase tracking-[1.8px]">
            Shop
          </Button>
        </div>
      </Container>
    </section>
  );
}