import type { MetadataRoute } from "next";
import { ALL_PRODUCTS } from "@/lib/data/products";
import { CHAPTERS } from "@/lib/data/chapters";

const BASE_URL = "https://apeax.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/shop",
    "/chapters",
    "/new-in",
    "/about",
    "/contact",
    "/faq",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = ALL_PRODUCTS.map((product) => ({
    url: `${BASE_URL}/shop/${product.slug}`,
    lastModified: new Date(),
  }));

  const chapterRoutes = CHAPTERS.map((chapter) => ({
    url: `${BASE_URL}/chapters/${chapter.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes, ...chapterRoutes];
}