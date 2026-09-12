"use client";

import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { CartLineItem } from "@/components/shared/cart-line-item";
import { CartSummary } from "@/components/shared/cart-summary";
import { ProductCard } from "@/components/shared/product-card";
import { ShippingDeadlineBanner } from "@/components/shared/shipping-deadline-banner";
import { useCart } from "@/hooks/use-cart";
import { ALL_PRODUCTS } from "@/lib/data/products";

export default function CartPage() {
  const { items, subtotal } = useCart();

  const cartSlugs = new Set(items.map((i) => i.productSlug));
  const suggestions = ALL_PRODUCTS.filter(
    (p) => !cartSlugs.has(p.slug) && !p.isSoldOut,
  ).slice(0, 4);

  return (
    <>
      <PageHeader title="Cart" />
      <Container className="py-16">
        {items.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <p className="font-body text-apeax-cod-gray/60">
              Nothing claimed yet. The story is waiting.
            </p>
            <Link href="/shop">
              <Button variant="default" className="font-sans text-xs uppercase tracking-wide">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <ShippingDeadlineBanner />
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="md:col-span-2">
                {items.map((item) => (
                  <CartLineItem key={item.id} item={item} />
                ))}
              </div>
              <div>
                <CartSummary subtotal={subtotal} />
              </div>
            </div>

            {suggestions.length > 0 && (
              <div className="mt-8 border-t border-apeax-westar pt-10">
                <h2 className="mb-6 font-condensed text-lg uppercase tracking-wide text-apeax-cod-gray">
                  Complete the Look
                </h2>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  {suggestions.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Container>
    </>
  );
}