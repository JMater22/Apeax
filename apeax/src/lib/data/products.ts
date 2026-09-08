import { type Product } from "@/types/product";

// TODO: replace with a real fetch from services/product.service.ts (Sprint 7)
export const ALL_PRODUCTS: Product[] = [
  {
    id: "1", slug: "exceed-limits-tee", name: "Exceed Limits Tee", price: 850,
    category: "shirt", chapterId: "1", editionSize: 500, unitsSold: 500, isSoldOut: true,
    placeholderColor: "bg-apeax-cod-gray", imageUrl: "/images/mock-lookbook/Tee-Dark-Palette.png",
    variants: [{ id: "s", label: "S", stock: 0 }, { id: "m", label: "M", stock: 0 }, { id: "l", label: "L", stock: 0 }, { id: "xl", label: "XL", stock: 0 }],
    details: { material: "100% Heavyweight Cotton, 240 GSM", fit: "Oversized Fit", care: ["Machine wash cold, inside out", "Do not bleach", "Tumble dry low", "Do not iron print"] },
    story: "This is the first piece of the story — worn in Act One, The Breaking Point. Before growth, there is a ceiling. Before becoming, there is the moment you decide to break it. The Exceed Limits Tee marks that decision: plain, heavyweight, unwilling to apologize for taking up space.",
  },
  {
    id: "2", slug: "exceed-limits-hoodie", name: "Exceed Limits Hoodie", price: 1650,
    category: "hoodie", chapterId: "1", editionSize: 300, unitsSold: 214, isSoldOut: false,
    placeholderColor: "bg-apeax-cod-gray", imageUrl: "/images/mock-lookbook/Hoodie-Dark-Palette.png",
    variants: [{ id: "s", label: "S", stock: 12 }, { id: "m", label: "M", stock: 30 }, { id: "l", label: "L", stock: 28 }, { id: "xl", label: "XL", stock: 16 }],
    details: { material: "80% Cotton, 20% Polyester Fleece, 400 GSM", fit: "Relaxed Fit", care: ["Machine wash cold, inside out", "Do not bleach", "Tumble dry low", "Do not iron print"] },
    story: "Carried through Act Two, The Ascent. Growth is never a single leap — it's the same uncomfortable choice, made again and again, until the weight of it becomes familiar. The Exceed Limits Hoodie was built heavy on purpose: something to carry, not just wear.",
  },
  {
    id: "3", slug: "exceed-limits-cap", name: "Exceed Limits Cap", price: 550,
    category: "cap", chapterId: "1", editionSize: 200, unitsSold: 90, isSoldOut: false,
    placeholderColor: "bg-apeax-cod-gray", imageUrl: "/images/mock-lookbook/Cap-Dark-Palette.png",
    variants: [{ id: "one-size", label: "One Size", stock: 110 }],
    details: { material: "100% Cotton Twill", fit: "Adjustable, One Size", care: ["Spot clean only", "Do not machine wash", "Air dry"] },
    story: "The piece that closes Act Three, A State of Becoming. There is no arrival — only the next version of yourself, and the next. The Exceed Limits Cap doesn't mark an ending. It marks the point where the story keeps going without you needing to read the next page to know you're in it.",
  },
  {
    id: "4", slug: "unwritten-tee", name: "Unwritten Tee", price: 850,
    category: "shirt", chapterId: "2", editionSize: 400, unitsSold: 12, isSoldOut: false,
    placeholderColor: "bg-apeax-cararra", imageUrl: "/images/mock-lookbook/Tee-Light-Palette.png",
    variants: [{ id: "s", label: "S", stock: 100 }, { id: "m", label: "M", stock: 100 }, { id: "l", label: "L", stock: 88 }, { id: "xl", label: "XL", stock: 100 }],
    details: { material: "100% Heavyweight Cotton, 240 GSM", fit: "Oversized Fit", care: ["Machine wash cold, inside out", "Do not bleach", "Tumble dry low", "Do not iron print"] },
    story: "Chapter Two hasn't been told yet — this piece exists before its own story does. The Unwritten Tee is a blank first page: light where Chapter One was dark, open where Chapter One was resolved. Claim it now, and the chapter's ending will be written around you.",
  },
  {
    id: "5", slug: "unwritten-hoodie", name: "Unwritten Hoodie", price: 1750,
    category: "hoodie", chapterId: "2", editionSize: 250, unitsSold: 3, isSoldOut: false,
    placeholderColor: "bg-apeax-cararra", imageUrl: "/images/mock-lookbook/Hoodie-Light-Pallete.png",
    variants: [{ id: "s", label: "S", stock: 60 }, { id: "m", label: "M", stock: 62 }, { id: "l", label: "L", stock: 62 }, { id: "xl", label: "XL", stock: 60 }],
    details: { material: "80% Cotton, 20% Polyester Fleece, 400 GSM", fit: "Relaxed Fit", care: ["Machine wash cold, inside out", "Do not bleach", "Tumble dry low", "Do not iron print"] },
    story: "Among the very first pieces claimed from a chapter still being written. The Unwritten Hoodie carries no printed narrative yet — only the quiet weight of being early to something. Its story will be finished by the people who wore it before it had one.",
  },
  {
    id: "6", slug: "unwritten-cap", name: "Unwritten Cap", price: 600,
    category: "cap", chapterId: "2", editionSize: 150, unitsSold: 0, isSoldOut: false,
    placeholderColor: "bg-apeax-cararra", imageUrl: "/images/mock-lookbook/Cap-Light-Palette.png",
    variants: [{ id: "one-size", label: "One Size", stock: 150 }],
    details: { material: "100% Cotton Twill", fit: "Adjustable, One Size", care: ["Spot clean only", "Do not machine wash", "Air dry"] },
    story: "Untouched, unclaimed, unwritten. This cap is the closest thing APEAX has to a blank canvas — the first piece of Chapter Two, offered before the chapter's story has even begun. Whoever claims it first becomes part of how it starts.",
  },
  {
    id: "7", slug: "becoming-tote", name: "Becoming Tote Bag", price: 450,
    category: "accessory", chapterId: "1", editionSize: 600, unitsSold: 120, isSoldOut: false,
    placeholderColor: "bg-apeax-westar", imageUrl: "/images/mock-lookbook/Tote-Bag.png",
    variants: [{ id: "one-size", label: "One Size", stock: 480 }],
    details: { material: "12oz Canvas Cotton", fit: "One Size", care: ["Spot clean only", "Do not machine wash"] },
    story: "Not every part of becoming is dramatic — some of it is just carrying what matters, every day, without ceremony. The Becoming Tote is Chapter One's quiet companion piece: built for the in-between moments the Acts don't show.",
  },
  {
    id: "8", slug: "becoming-beanie", name: "Becoming Beanie", price: 500,
    category: "cap", chapterId: "1", editionSize: 300, unitsSold: 300, isSoldOut: true,
    placeholderColor: "bg-apeax-westar", imageUrl: "/images/mock-lookbook/Beanie-Dark-Palette.png",
    variants: [{ id: "one-size", label: "One Size", stock: 0 }],
    details: { material: "100% Acrylic Knit", fit: "One Size, Stretch Fit", care: ["Hand wash cold", "Lay flat to dry"] },
    story: "Claimed in full before Chapter One's story even finished being told — proof that some pieces don't need an Act to find their owner. The Becoming Beanie sold out on instinct alone.",
  },
  {
    id: "9", slug: "ascent-tee", name: "Ascent Tee", price: 900,
    category: "shirt", chapterId: "1", editionSize: 400, unitsSold: 88, isSoldOut: false,
    placeholderColor: "bg-apeax-cod-gray", imageUrl: "/images/mock-lookbook/Tee-Dark-Palette.png",
    variants: [{ id: "s", label: "S", stock: 78 }, { id: "m", label: "M", stock: 80 }, { id: "l", label: "L", stock: 78 }, { id: "xl", label: "XL", stock: 76 }],
    details: { material: "100% Heavyweight Cotton, 240 GSM", fit: "Oversized Fit", care: ["Machine wash cold, inside out", "Do not bleach", "Tumble dry low", "Do not iron print"] },
    story: "A second voice inside Act Two's climb — for those still on the way up, not yet at the top. The Ascent Tee doesn't mark the summit. It marks the decision to keep going when the middle of the climb is the hardest part.",
  },
  {
    id: "10", slug: "ascent-hoodie", name: "Ascent Hoodie", price: 1800,
    category: "hoodie", chapterId: "1", editionSize: 200, unitsSold: 45, isSoldOut: false,
    placeholderColor: "bg-apeax-cod-gray", imageUrl: "/images/mock-lookbook/Hoodie-Dark-Palette.png",
    variants: [{ id: "s", label: "S", stock: 38 }, { id: "m", label: "M", stock: 40 }, { id: "l", label: "L", stock: 39 }, { id: "xl", label: "XL", stock: 38 }],
    details: { material: "80% Cotton, 20% Polyester Fleece, 400 GSM", fit: "Relaxed Fit", care: ["Machine wash cold, inside out", "Do not bleach", "Tumble dry low", "Do not iron print"] },
    story: "Heavier than the Ascent Tee, for colder parts of the climb. Some versions of The Ascent happen in daylight. This one is for the parts that happen before anyone's watching.",
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