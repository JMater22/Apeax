import { type Review } from "@/types/review";

// TODO: replace with a real fetch from services/review.service.ts (Sprint 7)
export const REVIEWS: Review[] = [
  {
    id: "1", productSlug: "exceed-limits-hoodie", authorName: "Marco D.", rating: 5,
    comment: "Heavyweight fabric, fits true to size. Worth the wait for the drop.",
    createdAt: "2026-06-20",
  },
  {
    id: "2", productSlug: "exceed-limits-hoodie", authorName: "Reign V.", rating: 4,
    comment: "Great quality, sleeves run slightly long but overall solid piece.",
    createdAt: "2026-06-18",
  },
  {
    id: "3", productSlug: "exceed-limits-tee", authorName: "Kai S.", rating: 5,
    comment: "Fabric is thick without being stiff. Print hasn't cracked after several washes.",
    createdAt: "2026-06-15",
  },
  {
    id: "4", productSlug: "exceed-limits-tee", authorName: "Anya M.", rating: 4,
    comment: "Runs a bit oversized, sized down and it's perfect now.",
    createdAt: "2026-06-12",
  },
  {
    id: "5", productSlug: "exceed-limits-cap", authorName: "Elias Y.", rating: 5,
    comment: "Structured well, doesn't lose shape after a few wears.",
    createdAt: "2026-06-10",
  },
  {
    id: "6", productSlug: "ascent-tee", authorName: "Diego R.", rating: 5,
    comment: "My favorite piece from this chapter. The story behind it makes it hit different.",
    createdAt: "2026-06-08",
  },
  {
    id: "7", productSlug: "ascent-hoodie", authorName: "Nadia P.", rating: 4,
    comment: "Comfortable for daily wear, hood could be slightly bigger.",
    createdAt: "2026-06-05",
  },
];

export function getReviewsForProduct(slug: string): Review[] {
  return REVIEWS.filter((r) => r.productSlug === slug);
}

export function getAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0;
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
}