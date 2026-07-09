"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { type ProductVariant } from "@/types/product";

interface VariantSelectorProps {
  productSlug: string;
  productName: string;
  price: number;
  placeholderColor?: string;
  imageUrl?: string;
  variants: ProductVariant[];
}

export function VariantSelector({
  productSlug,
  productName,
  price,
  imageUrl,
  variants,
}: VariantSelectorProps) {
  const { addItem } = useCart();
  const [selectedId, setSelectedId] = useState(
    variants.find((v) => v.stock > 0)?.id ?? variants[0]?.id,
  );
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const selectedVariant = variants.find((v) => v.id === selectedId);
  const isAvailable = selectedVariant && selectedVariant.stock > 0;
  const maxQuantity = selectedVariant ? Math.min(selectedVariant.stock, 10) : 1;

  function handleSelectVariant(variantId: string) {
    setSelectedId(variantId);
    setQuantity(1);
  }

  function handleAddToCart() {
    if (!selectedVariant || !isAvailable) return;
    addItem(
      {
        id: `${productSlug}-${selectedVariant.id}`,
        productSlug,
        name: productName,
        price,
        variantLabel: selectedVariant.label,
        imageUrl,
      },
      quantity,
    );
    setJustAdded(true);
    setQuantity(1);
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
              onClick={() => handleSelectVariant(variant.id)}
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

      <p className="mt-3 font-sans text-xs text-apeax-cod-gray/70">
        {isAvailable
          ? selectedVariant.stock <= 10
            ? `Only ${selectedVariant.stock} left in this size`
            : "In stock"
          : "Out of stock in this size"}
      </p>

      {isAvailable && (
        <div className="mt-4 flex items-center gap-3">
          <span className="font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/70">
            Quantity
          </span>
          <div className="flex items-center border border-apeax-westar">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
              className="flex h-8 w-8 items-center justify-center text-apeax-cod-gray hover:bg-apeax-cararra disabled:opacity-30"
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center font-sans text-sm text-apeax-cod-gray">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.min(maxQuantity, q + 1))}
              disabled={quantity >= maxQuantity}
              aria-label="Increase quantity"
              className="flex h-8 w-8 items-center justify-center text-apeax-cod-gray hover:bg-apeax-cararra disabled:opacity-30"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      )}

      <Button
        variant="default"
        className="mt-4 h-11 w-full font-sans text-xs uppercase tracking-wide"
        disabled={!isAvailable}
        onClick={handleAddToCart}
      >
        {!isAvailable ? "Notify Me" : justAdded ? "Added ✓" : `Add to Cart (${quantity})`}
      </Button>
    </div>
  );
}