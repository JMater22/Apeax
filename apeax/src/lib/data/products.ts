import { type Product } from "@/types/product";

export const ALL_PRODUCTS: Product[] = [
  {
    id: "1", slug: "exceed-limits-tee", name: "Exceed Limits Tee", price: 850,
    category: "shirt", chapterId: "1", editionSize: 500, unitsSold: 500, isSoldOut: true,
    placeholderColor: "bg-apeax-cod-gray", imageUrl: "/images/mock-lookbook/Tee-Dark-Palette.png",
    variants: [{ id: "s", label: "S", stock: 0 }, { id: "m", label: "M", stock: 0 }, { id: "l", label: "L", stock: 0 }, { id: "xl", label: "XL", stock: 0 }],
    details: { material: "100% Heavyweight Cotton, 240 GSM", fit: "Oversized Fit", care: ["Machine wash cold, inside out", "Do not bleach", "Tumble dry low", "Do not iron print"] },
    narrativeHook: "Worn in Act One — The Breaking Point, where the story of exceeding limits begins.",
  },
  {
    id: "2", slug: "exceed-limits-hoodie", name: "Exceed Limits Hoodie", price: 1650,
    category: "hoodie", chapterId: "1", editionSize: 300, unitsSold: 214, isSoldOut: false,
    placeholderColor: "bg-apeax-cod-gray", imageUrl: "/images/mock-lookbook/Hoodie-Dark-Palette.png",
    variants: [{ id: "s", label: "S", stock: 12 }, { id: "m", label: "M", stock: 30 }, { id: "l", label: "L", stock: 28 }, { id: "xl", label: "XL", stock: 16 }],
    details: { material: "80% Cotton, 20% Polyester Fleece, 400 GSM", fit: "Relaxed Fit", care: ["Machine wash cold, inside out", "Do not bleach", "Tumble dry low", "Do not iron print"] },
    narrativeHook: "Worn in Act Two — The Ascent, the piece carried through the climb.",
  },
  {
    id: "3", slug: "exceed-limits-cap", name: "Exceed Limits Cap", price: 550,
    category: "cap", chapterId: "1", editionSize: 200, unitsSold: 90, isSoldOut: false,
    placeholderColor: "bg-apeax-cod-gray", imageUrl: "/images/mock-lookbook/Cap-Dark-Palette.png",
    variants: [{ id: "one-size", label: "One Size", stock: 110 }],
    details: { material: "100% Cotton Twill", fit: "Adjustable, One Size", care: ["Spot clean only", "Do not machine wash", "Air dry"] },
    narrativeHook: "Worn in Act Three — A State of Becoming, the piece that closes the chapter.",
  },
  {
    id: "4", slug: "unwritten-tee", name: "Unwritten Tee", price: 850,
    category: "shirt", chapterId: "2", editionSize: 400, unitsSold: 12, isSoldOut: false,
    placeholderColor: "bg-apeax-cararra", imageUrl: "/images/mock-lookbook/Tee-Light-Palette.png",
    variants: [{ id: "s", label: "S", stock: 100 }, { id: "m", label: "M", stock: 100 }, { id: "l", label: "L", stock: 88 }, { id: "xl", label: "XL", stock: 100 }],
    details: { material: "100% Heavyweight Cotton, 240 GSM", fit: "Oversized Fit", care: ["Machine wash cold, inside out", "Do not bleach", "Tumble dry low", "Do not iron print"] },
  },
  {
    id: "5", slug: "unwritten-hoodie", name: "Unwritten Hoodie", price: 1750,
    category: "hoodie", chapterId: "2", editionSize: 250, unitsSold: 3, isSoldOut: false,
    placeholderColor: "bg-apeax-cararra", imageUrl: "/images/mock-lookbook/Hoodie-Light-Pallete.png",
    variants: [{ id: "s", label: "S", stock: 60 }, { id: "m", label: "M", stock: 62 }, { id: "l", label: "L", stock: 62 }, { id: "xl", label: "XL", stock: 60 }],
    details: { material: "80% Cotton, 20% Polyester Fleece, 400 GSM", fit: "Relaxed Fit", care: ["Machine wash cold, inside out", "Do not bleach", "Tumble dry low", "Do not iron print"] },
  },
  {
    id: "6", slug: "unwritten-cap", name: "Unwritten Cap", price: 600,
    category: "cap", chapterId: "2", editionSize: 150, unitsSold: 0, isSoldOut: false,
    placeholderColor: "bg-apeax-cararra", imageUrl: "/images/mock-lookbook/Cap-Light-Palette.png",
    variants: [{ id: "one-size", label: "One Size", stock: 150 }],
    details: { material: "100% Cotton Twill", fit: "Adjustable, One Size", care: ["Spot clean only", "Do not machine wash", "Air dry"] },
  },
  {
    id: "7", slug: "becoming-tote", name: "Becoming Tote Bag", price: 450,
    category: "accessory", chapterId: "1", editionSize: 600, unitsSold: 120, isSoldOut: false,
    placeholderColor: "bg-apeax-westar", imageUrl: "/images/mock-lookbook/Tote-Bag.png",
    variants: [{ id: "one-size", label: "One Size", stock: 480 }],
    details: { material: "12oz Canvas Cotton", fit: "One Size", care: ["Spot clean only", "Do not machine wash"] },
  },
  {
    id: "8", slug: "becoming-beanie", name: "Becoming Beanie", price: 500,
    category: "cap", chapterId: "1", editionSize: 300, unitsSold: 300, isSoldOut: true,
    placeholderColor: "bg-apeax-westar",
    variants: [{ id: "one-size", label: "One Size", stock: 0 }],
    details: { material: "100% Acrylic Knit", fit: "One Size, Stretch Fit", care: ["Hand wash cold", "Lay flat to dry"] },
  },
  {
    id: "9", slug: "ascent-tee", name: "Ascent Tee", price: 900,
    category: "shirt", chapterId: "1", editionSize: 400, unitsSold: 88, isSoldOut: false,
    placeholderColor: "bg-apeax-cod-gray", imageUrl: "/images/mock-lookbook/Tee-Dark-Palette.png",
    variants: [{ id: "s", label: "S", stock: 78 }, { id: "m", label: "M", stock: 80 }, { id: "l", label: "L", stock: 78 }, { id: "xl", label: "XL", stock: 76 }],
    details: { material: "100% Heavyweight Cotton, 240 GSM", fit: "Oversized Fit", care: ["Machine wash cold, inside out", "Do not bleach", "Tumble dry low", "Do not iron print"] },
  },
  {
    id: "10", slug: "ascent-hoodie", name: "Ascent Hoodie", price: 1800,
    category: "hoodie", chapterId: "1", editionSize: 200, unitsSold: 45, isSoldOut: false,
    placeholderColor: "bg-apeax-cod-gray", imageUrl: "/images/mock-lookbook/Hoodie-Dark-Palette.png",
    variants: [{ id: "s", label: "S", stock: 38 }, { id: "m", label: "M", stock: 40 }, { id: "l", label: "L", stock: 39 }, { id: "xl", label: "XL", stock: 38 }],
    details: { material: "80% Cotton, 20% Polyester Fleece, 400 GSM", fit: "Relaxed Fit", care: ["Machine wash cold, inside out", "Do not bleach", "Tumble dry low", "Do not iron print"] },
  },
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