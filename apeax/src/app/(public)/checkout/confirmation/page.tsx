"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { formatCurrency } from "@/lib/format-currency";

interface OrderItemSnapshot {
  name: string;
  variantLabel?: string;
  quantity: number;
  price: number;
  editionNumber: number | null;
  editionSize: number;
}

interface OrderSnapshot {
  items: OrderItemSnapshot[];
  total: number;
}

export default function OrderConfirmationPage() {
  const [order] = useState<OrderSnapshot | null>(() => {
    if (typeof window === "undefined") return null;

    const raw = window.sessionStorage.getItem("apeax_last_order");
    return raw ? (JSON.parse(raw) as OrderSnapshot) : null;
  });

  const highlightItem = order?.items.find((item) => item.editionNumber !== null);

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
      <CheckCircle2 size={48} className="text-apeax-cod-gray" />
      <h1 className="mt-6 font-condensed text-3xl uppercase tracking-wide text-apeax-cod-gray">
        Order Confirmed
      </h1>
      <p className="mt-2 max-w-md font-body text-apeax-cod-gray/70">
        Thank you for becoming part of the story. A confirmation will be sent
        to your email once order tracking is connected.
      </p>

      {highlightItem && (
        <Reveal delay={0.2} className="mt-10 w-full max-w-sm border border-apeax-westar p-6">
          <p className="font-sans text-[10px] uppercase tracking-[2px] text-apeax-cod-gray/50">
            You Now Own
          </p>
          <p className="mt-3 font-display text-4xl text-apeax-cod-gray">
            Piece {highlightItem.editionNumber} / {highlightItem.editionSize}
          </p>
          <p className="mt-2 font-sans text-sm text-apeax-cod-gray/70">{highlightItem.name}</p>
        </Reveal>
      )}

      {order && order.items.length > 0 && (
        <div className="mt-10 w-full max-w-sm text-left">
          <ul className="flex flex-col gap-2">
            {order.items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between font-sans text-xs text-apeax-cod-gray/70"
              >
                <span>
                  {item.name} {item.variantLabel && `(${item.variantLabel})`} × {item.quantity}
                </span>
                <span>{formatCurrency(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-apeax-westar pt-4 font-sans text-sm font-medium text-apeax-cod-gray">
            <span>Total</span>
            <span>{formatCurrency(order.total)}</span>
          </div>
        </div>
      )}

      <Link href="/shop" className="mt-8">
        <Button variant="default" className="font-sans text-xs uppercase tracking-wide">
          Continue Shopping
        </Button>
      </Link>
    </Container>
  );
}