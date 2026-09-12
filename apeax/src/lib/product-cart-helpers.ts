import { type Product, type ProductVariant } from "@/types/product";

export interface DefaultAddableSelection {
  cartItemId: string;
  variant: ProductVariant;
  variantLabel: string;
}

/** Picks the first in-stock variant (or color+variant combo) so features like
 * "Move to Cart" can add a product without making the customer pick a size first. */
export function getDefaultAddableSelection(product: Product): DefaultAddableSelection | null {
  if (product.colorOptions && product.colorOptions.length > 0) {
    for (const color of product.colorOptions) {
      const variant = color.variants.find((v) => v.stock > 0);
      if (variant) {
        return {
          cartItemId: `${product.slug}-${color.id}-${variant.id}`,
          variant,
          variantLabel: `${color.label} / ${variant.label}`,
        };
      }
    }
    return null;
  }
  if (product.variants && product.variants.length > 0) {
    const variant = product.variants.find((v) => v.stock > 0);
    if (variant) {
      return {
        cartItemId: `${product.slug}-${variant.id}`,
        variant,
        variantLabel: variant.label,
      };
    }
  }
  return null;
}