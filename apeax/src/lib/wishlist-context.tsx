"use client";

import { createContext, useState, type ReactNode } from "react";

interface WishlistContextValue {
  wishlistSlugs: string[];
  isWishlisted: (slug: string) => boolean;
  toggleWishlist: (slug: string) => void;
}

export const WishlistContext = createContext<WishlistContextValue | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlistSlugs, setWishlistSlugs] = useState<string[]>([]);

  function isWishlisted(slug: string) {
    return wishlistSlugs.includes(slug);
  }

  function toggleWishlist(slug: string) {
    setWishlistSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  }

  return (
    <WishlistContext.Provider value={{ wishlistSlugs, isWishlisted, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}