"use client";

import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { CartLineItem } from "@/components/shared/cart-line-item";
import { CartSummary } from "@/components/shared/cart-summary";
import { useCart } from "@/hooks/use-cart";

export default function CartPage() {
  const { items, subtotal } = useCart();

  return (
    <>
      <PageHeader title="Cart" />
      <Container className="py-16">
        {items.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <p className="font-body text-apeax-cod-gray/60">Your cart is empty.</p>
            <Link href="/shop">
              <Button variant="default" className="font-sans text-xs uppercase tracking-wide">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
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
        )}
      </Container>
    </>
  );
}