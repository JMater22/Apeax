"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { BrandImage } from "@/components/shared/brand-image";
import { useWishlist } from "@/hooks/use-wishlist";
import { formatCurrency } from "@/lib/format-currency";
import { type Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(product.slug);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="group"
      whileHover={shouldReduceMotion ? undefined : { y: -6, boxShadow: "0 16px 28px rgba(10,10,10,0.14)" }}
      whileTap={shouldReduceMotion ? undefined : { y: -2, boxShadow: "0 8px 16px rgba(10,10,10,0.10)" }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <BrandImage
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {product.isSoldOut && (
            <div className="absolute left-2 top-2">
              <Badge variant="destructive" className="font-sans text-[10px] uppercase tracking-wide">
                Fully Claimed
              </Badge>
            </div>
          )}

          <motion.button
            whileTap={shouldReduceMotion ? undefined : { scale: 0.85 }}
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.slug);
            }}
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={wishlisted}
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-apeax-cod-gray opacity-100 transition-opacity duration-200 hover:bg-white md:opacity-0 md:group-hover:opacity-100 aria-pressed:opacity-100"
          >
            <Heart size={16} className={cn(wishlisted && "fill-apeax-cod-gray")} />
          </motion.button>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="block font-sans text-sm font-medium text-apeax-cod-gray">
              {product.name}
            </span>
            {product.editionSize && (
              <div className="mt-1">
                <div className="h-1 w-16 overflow-hidden bg-apeax-westar">
                  <div
                    className="h-full bg-apeax-cod-gray"
                    style={{ width: `${((product.unitsSold ?? 0) / product.editionSize) * 100}%` }}
                  />
                </div>
                <span
                  className={cn(
                    "mt-1 block font-sans text-xs",
                    product.editionSize - (product.unitsSold ?? 0) <= 10 &&
                      product.editionSize - (product.unitsSold ?? 0) > 0
                      ? "font-bold text-apeax-cod-gray"
                      : "text-apeax-cod-gray/70",
                  )}
                >
                  {product.unitsSold ?? 0} / {product.editionSize} claimed
                </span>
              </div>
            )}
          </div>
          <span className="font-condensed text-base text-apeax-cod-gray/80">
            {formatCurrency(product.price)}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}