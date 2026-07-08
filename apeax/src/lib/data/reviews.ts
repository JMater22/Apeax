import { type Review } from "@/types/review";

// TODO: replace with a real fetch from services/review.service.ts (Sprint 7)
export const REVIEWS: Review[] = [
  {
    id: "1",
    productSlug: "exceed-limits-hoodie",
    authorName: "Marco D.",
    rating: 5,
    comment: "Heavyweight fabric, fits true to size. Worth the wait for the drop.",
    createdAt: "2026-06-20",
  },
  {
    id: "2",
    productSlug: "exceed-limits-hoodie",
    authorName: "Reign V.",
    rating: 4,
    comment: "Great quality, sleeves run slightly long but overall solid piece.",
    createdAt: "2026-06-18",
  },
];

export function getReviewsForProduct(slug: string): Review[] {
  return REVIEWS.filter((r) => r.productSlug === slug);
}

export function getAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0;
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
}