"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { type ProductVariant } from "@/types/product";

interface VariantSelectorProps {
  productSlug: string;
  productName: string;
  price: number;
  placeholderColor?: string;
  variants: ProductVariant[];
}

export function VariantSelector({
  productSlug,
  productName,
  price,
  placeholderColor,
  variants,
}: VariantSelectorProps) {
  const { addItem } = useCart();
  const [selectedId, setSelectedId] = useState(
    variants.find((v) => v.stock > 0)?.id ?? variants[0]?.id,
  );
  const [justAdded, setJustAdded] = useState(false);

  const selectedVariant = variants.find((v) => v.id === selectedId);
  const isAvailable = selectedVariant && selectedVariant.stock > 0;

  function handleAddToCart() {
    if (!selectedVariant || !isAvailable) return;
    addItem({
      id: `${productSlug}-${selectedVariant.id}`,
      productSlug,
      name: productName,
      price,
      variantLabel: selectedVariant.label,
      placeholderColor,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  }

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
        {isAvailable
          ? selectedVariant.stock <= 10
            ? `Only ${selectedVariant.stock} left in this size`
            : "In stock"
          : "Out of stock in this size"}
      </p>

      <Button
        variant="default"
        className="mt-4 h-11 w-full font-sans text-xs uppercase tracking-wide"
        disabled={!isAvailable}
        onClick={handleAddToCart}
      >
        {!isAvailable ? "Notify Me" : justAdded ? "Added ✓" : "Add to Cart"}
      </Button>
    </div>
  );
}