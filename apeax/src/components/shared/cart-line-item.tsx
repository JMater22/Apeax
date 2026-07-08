"use client";

import { Minus, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/format-currency";
import { useCart } from "@/hooks/use-cart";
import { type CartItem } from "@/types/cart";

export function CartLineItem({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 border-b border-apeax-westar py-6">
      <div
        className={cn("h-24 w-20 shrink-0 rounded-sm", item.placeholderColor ?? "bg-apeax-cod-gray")}
      />

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-sans text-sm font-medium text-apeax-cod-gray">{item.name}</p>
            {item.variantLabel && (
              <p className="font-sans text-xs text-apeax-cod-gray/60">Size: {item.variantLabel}</p>
            )}
          </div>
          <button
            onClick={() => removeItem(item.id)}
            aria-label={`Remove ${item.name} from cart`}
            className="text-apeax-cod-gray/40 hover:text-apeax-cod-gray"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center border border-apeax-westar">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              aria-label="Decrease quantity"
              className="flex h-8 w-8 items-center justify-center text-apeax-cod-gray hover:bg-apeax-cararra"
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center font-sans text-sm text-apeax-cod-gray">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              aria-label="Increase quantity"
              className="flex h-8 w-8 items-center justify-center text-apeax-cod-gray hover:bg-apeax-cararra"
            >
              <Plus size={14} />
            </button>
          </div>

          <span className="font-condensed text-base text-apeax-cod-gray">
            {formatCurrency(item.price * item.quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}