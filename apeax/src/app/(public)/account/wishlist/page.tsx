"use client";

import { ProductCard } from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/hooks/use-wishlist";
import { useCart } from "@/hooks/use-cart";
import { getDefaultAddableSelection } from "@/lib/product-cart-helpers";
import { ALL_PRODUCTS } from "@/lib/data/products";

export default function WishlistPage() {
  const { wishlistSlugs } = useWishlist();
  const { addItem } = useCart();
  const wishlistProducts = ALL_PRODUCTS.filter((p) => wishlistSlugs.includes(p.slug));

  return (
    <div>
      <h2 className="mb-6 font-condensed text-lg uppercase tracking-wide text-apeax-cod-gray">
        Wishlist
      </h2>

      {wishlistProducts.length === 0 ? (
        <p className="font-body text-apeax-cod-gray/60">
          Nothing saved yet. Tap the heart on any piece to hold it for later.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {wishlistProducts.map((product) => {
            const selection = getDefaultAddableSelection(product);
            return (
              <div key={product.id}>
                <ProductCard product={product} />
                <Button
                  variant="secondary"
                  disabled={!selection}
                  onClick={() => {
                    if (!selection) return;
                    addItem({
                      id: selection.cartItemId,
                      productSlug: product.slug,
                      name: product.name,
                      price: product.price,
                      variantLabel: selection.variantLabel,
                      imageUrl: product.imageUrl,
                    });
                  }}
                  className="mt-2 h-9 w-full font-sans text-[11px] uppercase tracking-wide"
                >
                  {selection ? "Move to Cart" : "Fully Claimed"}
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}