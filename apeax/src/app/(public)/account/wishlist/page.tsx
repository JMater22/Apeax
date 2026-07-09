"use client";

import { useState } from "react";
import { ProductCard } from "@/components/shared/product-card";
import { MOCK_WISHLIST_SLUGS } from "@/lib/data/mock-account";
import { ALL_PRODUCTS } from "@/lib/data/products";

export default function WishlistPage() {
  const [wishlistSlugs, setWishlistSlugs] = useState<string[]>(MOCK_WISHLIST_SLUGS);
  const wishlistProducts = ALL_PRODUCTS.filter((p) => wishlistSlugs.includes(p.slug));

  return (
    <div>
      <h2 className="mb-6 font-condensed text-lg uppercase tracking-wide text-apeax-cod-gray">
        Wishlist
      </h2>

      {wishlistProducts.length === 0 ? (
        <p className="font-body text-apeax-cod-gray/60">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {wishlistProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
              <button
                onClick={() =>
                  setWishlistSlugs((prev) => prev.filter((slug) => slug !== product.slug))
                }
                className="mt-2 font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/50 hover:text-destructive"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}