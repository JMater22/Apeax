"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { type ProductVariant } from "@/types/product";

interface VariantSelectorProps {
  variants: ProductVariant[];
}

export function VariantSelector({ variants }: VariantSelectorProps) {
  const [selectedId, setSelectedId] = useState(
    variants.find((v) => v.stock > 0)?.id ?? variants[0]?.id,
  );

  const selectedVariant = variants.find((v) => v.id === selectedId);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => {
          const isOutOfStock = variant.stock === 0;
          return (
            <button
              key={variant.id}
              disabled={isOutOfStock}
              onClick={() => setSelectedId(variant.id)}
              className={cn(
                "border px-4 py-2 font-sans text-xs uppercase tracking-wide transition-colors",
                selectedId === variant.id
                  ? "border-apeax-cod-gray bg-apeax-cod-gray text-white"
                  : "border-apeax-westar text-apeax-cod-gray hover:border-apeax-cod-gray",
                isOutOfStock && "cursor-not-allowed opacity-30 line-through",
              )}
            >
              {variant.label}
            </button>
          );
        })}
      </div>

      <p className="mt-3 font-sans text-xs text-apeax-cod-gray/60">
        {selectedVariant && selectedVariant.stock > 0
          ? selectedVariant.stock <= 10
            ? `Only ${selectedVariant.stock} left in this size`
            : "In stock"
          : "Out of stock in this size"}
      </p>

      <Button
        variant="default"
        className="mt-4 h-11 w-full font-sans text-xs uppercase tracking-wide"
        disabled={!selectedVariant || selectedVariant.stock === 0}
      >
        {selectedVariant && selectedVariant.stock > 0 ? "Add to Cart" : "Notify Me"}
      </Button>
    </div>
  );
}