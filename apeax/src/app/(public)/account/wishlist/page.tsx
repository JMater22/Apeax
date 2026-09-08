"use client";

import { ProductCard } from "@/components/shared/product-card";
import { useWishlist } from "@/hooks/use-wishlist";
import { ALL_PRODUCTS } from "@/lib/data/products";

export default function WishlistPage() {
  const { wishlistSlugs } = useWishlist();
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
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}