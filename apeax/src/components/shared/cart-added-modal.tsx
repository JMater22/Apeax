"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BrandImage } from "@/components/shared/brand-image";
import { formatCurrency } from "@/lib/format-currency";
import { useCart } from "@/hooks/use-cart";

export function CartAddedModal() {
  const { notification, itemCount, subtotal } = useCart();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!notification) return;
    // Legitimate use: opening the modal in response to an external event
    // (a new item added to cart), not deriving state from a prop.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(true);
  }, [notification]);

  if (!notification) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-apeax-cod-gray" />
            <DialogTitle className="font-sans text-sm uppercase tracking-wide text-apeax-cod-gray">
              Added to Cart
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="flex gap-4 border-t border-apeax-westar pt-4">
          <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-sm">
            <BrandImage
              src={notification.item.imageUrl}
              alt={notification.item.name}
              className="h-full w-full"
              sizes="64px"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-sans text-sm font-medium text-apeax-cod-gray">
              {notification.item.name}
            </p>
            {notification.item.variantLabel && (
              <p className="font-sans text-xs text-apeax-cod-gray/60">
                {notification.item.variantLabel}
              </p>
            )}
            <p className="mt-1 font-sans text-xs text-apeax-cod-gray/60">
              Qty {notification.item.quantity} · {formatCurrency(notification.item.price)}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-apeax-westar pt-4 font-sans text-sm text-apeax-cod-gray">
          <span>
            {itemCount} item{itemCount === 1 ? "" : "s"} in cart
          </span>
          <span className="font-medium">{formatCurrency(subtotal)}</span>
        </div>

        <DialogFooter showCloseButton={false} className="mt-2 flex gap-2">
          <Button
            variant="outline"
            className="flex-1 font-sans text-xs uppercase tracking-wide"
            onClick={() => setOpen(false)}
          >
            Continue Shopping
          </Button>
          <Link href="/cart" className="flex-1" onClick={() => setOpen(false)}>
            <Button variant="default" className="w-full font-sans text-xs uppercase tracking-wide">
              View Cart
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}