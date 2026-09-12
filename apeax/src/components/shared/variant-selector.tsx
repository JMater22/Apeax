"use client";

import { useEffect, useRef, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BrandImage } from "@/components/shared/brand-image";
import { useCart } from "@/hooks/use-cart";
import { formatCurrency } from "@/lib/format-currency";
import { type ProductVariant, type ProductColorOption } from "@/types/product";

interface VariantSelectorProps {
  productSlug: string;
  productName: string;
  price: number;
  imageUrl?: string;
  variants?: ProductVariant[];
  colorOptions?: ProductColorOption[];
}

export function VariantSelector({
  productSlug,
  productName,
  price,
  imageUrl,
  variants,
  colorOptions,
}: VariantSelectorProps) {
  const { addItem } = useCart();
  const hasColors = Boolean(colorOptions && colorOptions.length > 0);

  const [selectedColorId, setSelectedColorId] = useState(colorOptions?.[0]?.id);
  const activeVariants = hasColors
    ? colorOptions!.find((c) => c.id === selectedColorId)?.variants ?? []
    : variants ?? [];

  const [selectedId, setSelectedId] = useState(
    activeVariants.find((v) => v.stock > 0)?.id ?? activeVariants[0]?.id,
  );
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  const selectedVariant = activeVariants.find((v) => v.id === selectedId);
  const isAvailable = selectedVariant && selectedVariant.stock > 0;
  const maxQuantity = selectedVariant ? Math.min(selectedVariant.stock, 10) : 1;

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleSelectColor(colorId: string) {
    setSelectedColorId(colorId);
    const nextVariants = colorOptions!.find((c) => c.id === colorId)?.variants ?? [];
    setSelectedId(nextVariants.find((v) => v.stock > 0)?.id ?? nextVariants[0]?.id);
    setQuantity(1);
  }

  function handleSelectVariant(variantId: string) {
    setSelectedId(variantId);
    setQuantity(1);
  }

  function handleAddToCart() {
    if (!selectedVariant || !isAvailable) return;
    const colorLabel = hasColors ? colorOptions!.find((c) => c.id === selectedColorId)?.label : undefined;
    const variantLabel = colorLabel ? `${colorLabel} / ${selectedVariant.label}` : selectedVariant.label;
    addItem(
      {
        id: `${productSlug}-${selectedColorId ?? "default"}-${selectedVariant.id}`,
        productSlug,
        name: productName,
        price,
        variantLabel,
        imageUrl,
      },
      quantity,
    );
    setJustAdded(true);
    setQuantity(1);
    setTimeout(() => setJustAdded(false), 2000);
  }

  const ctaLabel = !isAvailable
    ? "Sold Out"
    : justAdded
      ? "Claimed ✓"
      : `Claim This Piece (${quantity})`;

  return (
    <div>
      {hasColors && (
        <div className="mb-4">
          <p className="mb-2 font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/70">
            Color:{" "}
            <span className="font-medium text-apeax-cod-gray">
              {colorOptions!.find((c) => c.id === selectedColorId)?.label}
            </span>
          </p>
          <div className="flex gap-2">
            {colorOptions!.map((color) => (
              <button
                key={color.id}
                type="button"
                onClick={() => handleSelectColor(color.id)}
                aria-label={`Select color ${color.label}`}
                aria-pressed={selectedColorId === color.id}
                className={cn(
                  "h-8 w-8 rounded-full border-2 transition-all",
                  selectedColorId === color.id ? "border-apeax-cod-gray scale-110" : "border-transparent",
                )}
                style={{ backgroundColor: color.swatch }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {activeVariants.map((variant) => {
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
            ? `Don't miss it — only ${selectedVariant.stock} left in this size`
            : "In stock"
          : "This size has been fully claimed"}
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

      <div ref={triggerRef}>
        <Button
          variant="default"
          className="mt-4 h-11 w-full font-sans text-xs uppercase tracking-wide"
          disabled={!isAvailable}
          onClick={handleAddToCart}
        >
          {ctaLabel}
        </Button>
      </div>

      {showStickyBar && (
        <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-apeax-westar bg-white px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] md:hidden">
          <div className="relative h-12 w-10 shrink-0 overflow-hidden rounded-sm">
            <BrandImage src={imageUrl} alt={productName} className="h-full w-full" sizes="40px" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-sans text-xs font-medium text-apeax-cod-gray">
              {productName}
            </p>
            <p className="font-condensed text-sm text-apeax-cod-gray/70">
              {formatCurrency(price)}
            </p>
          </div>
          <Button
            variant="default"
            className="h-9 shrink-0 px-4 font-sans text-[11px] uppercase tracking-wide"
            disabled={!isAvailable}
            onClick={handleAddToCart}
          >
            {!isAvailable ? "Sold Out" : justAdded ? "Claimed ✓" : "Claim"}
          </Button>
        </div>
      )}
    </div>
  );
}