import { type ProductCategory } from "@/types/product";

// Maps each category to every term a shopper might reasonably type,
// including plural/singular and common synonyms, so search isn't limited
// to exact substring matches against the product name field.
export const CATEGORY_SEARCH_TERMS: Record<ProductCategory, string[]> = {
  shirt: ["shirt", "shirts", "tee", "tees", "t-shirt", "t-shirts"],
  hoodie: ["hoodie", "hoodies"],
  cap: ["cap", "caps"],
  accessory: ["accessory", "accessories", "bag", "bags", "beanie", "beanies"],
};

export function categoryMatchesQuery(category: ProductCategory, query: string): boolean {
  const q = query.toLowerCase().trim();
  return CATEGORY_SEARCH_TERMS[category].some((term) => term.includes(q) || q.includes(term));
}