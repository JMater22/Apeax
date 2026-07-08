import { type Product } from "@/types/product";

// TODO: replace with a real fetch from services/product.service.ts (Sprint 7)
export const ALL_PRODUCTS: Product[] = [
  { id: "1", slug: "exceed-limits-tee", name: "Exceed Limits Tee", price: 850, category: "shirt", chapterId: "1", editionSize: 500, unitsSold: 500, isSoldOut: true, placeholderColor: "bg-apeax-cod-gray", variants: [{ id: "s", label: "S", stock: 0 }, { id: "m", label: "M", stock: 0 }, { id: "l", label: "L", stock: 0 }, { id: "xl", label: "XL", stock: 0 }] },
  { id: "2", slug: "exceed-limits-hoodie", name: "Exceed Limits Hoodie", price: 1650, category: "hoodie", chapterId: "1", editionSize: 300, unitsSold: 214, isSoldOut: false, placeholderColor: "bg-apeax-cod-gray", variants: [{ id: "s", label: "S", stock: 12 }, { id: "m", label: "M", stock: 30 }, { id: "l", label: "L", stock: 28 }, { id: "xl", label: "XL", stock: 16 }] },
  { id: "3", slug: "exceed-limits-cap", name: "Exceed Limits Cap", price: 550, category: "cap", chapterId: "1", editionSize: 200, unitsSold: 90, isSoldOut: false, placeholderColor: "bg-apeax-cod-gray", variants: [{ id: "one-size", label: "One Size", stock: 110 }] },
  { id: "4", slug: "unwritten-tee", name: "Unwritten Tee", price: 850, category: "shirt", chapterId: "2", editionSize: 400, unitsSold: 12, isSoldOut: false, placeholderColor: "bg-apeax-cararra", variants: [{ id: "s", label: "S", stock: 100 }, { id: "m", label: "M", stock: 100 }, { id: "l", label: "L", stock: 88 }, { id: "xl", label: "XL", stock: 100 }] },
  { id: "5", slug: "unwritten-hoodie", name: "Unwritten Hoodie", price: 1750, category: "hoodie", chapterId: "2", editionSize: 250, unitsSold: 3, isSoldOut: false, placeholderColor: "bg-apeax-cararra", variants: [{ id: "s", label: "S", stock: 60 }, { id: "m", label: "M", stock: 62 }, { id: "l", label: "L", stock: 62 }, { id: "xl", label: "XL", stock: 60 }] },
  { id: "6", slug: "unwritten-cap", name: "Unwritten Cap", price: 600, category: "cap", chapterId: "2", editionSize: 150, unitsSold: 0, isSoldOut: false, placeholderColor: "bg-apeax-cararra", variants: [{ id: "one-size", label: "One Size", stock: 150 }] },
  { id: "7", slug: "becoming-tote", name: "Becoming Tote Bag", price: 450, category: "accessory", chapterId: "1", editionSize: 600, unitsSold: 120, isSoldOut: false, placeholderColor: "bg-apeax-westar", variants: [{ id: "one-size", label: "One Size", stock: 480 }] },
  { id: "8", slug: "becoming-beanie", name: "Becoming Beanie", price: 500, category: "cap", chapterId: "1", editionSize: 300, unitsSold: 300, isSoldOut: true, placeholderColor: "bg-apeax-westar", variants: [{ id: "one-size", label: "One Size", stock: 0 }] },
  { id: "9", slug: "ascent-tee", name: "Ascent Tee", price: 900, category: "shirt", chapterId: "1", editionSize: 400, unitsSold: 88, isSoldOut: false, placeholderColor: "bg-apeax-cod-gray", variants: [{ id: "s", label: "S", stock: 78 }, { id: "m", label: "M", stock: 80 }, { id: "l", label: "L", stock: 78 }, { id: "xl", label: "XL", stock: 76 }] },
  { id: "10", slug: "ascent-hoodie", name: "Ascent Hoodie", price: 1800, category: "hoodie", chapterId: "1", editionSize: 200, unitsSold: 45, isSoldOut: false, placeholderColor: "bg-apeax-cod-gray", variants: [{ id: "s", label: "S", stock: 38 }, { id: "m", label: "M", stock: 40 }, { id: "l", label: "L", stock: 39 }, { id: "xl", label: "XL", stock: 38 }] },
];

export function getProductBySlug(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByChapter(chapterId: string): Product[] {
  return ALL_PRODUCTS.filter((p) => p.chapterId === chapterId);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return ALL_PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category,
  ).slice(0, limit);
}