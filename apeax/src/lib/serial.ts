import { type Product } from "@/types/product";

/**
 * Builds a piece's serial number. In production this must only ever be
 * called ONCE per physical unit, at the moment of order fulfillment — never
 * regenerated afterward, since it's what gets printed on the hangtag and
 * permanently tied to that unit's authenticity record.
 *
 * TODO (Sprint 7 / backend): persist the generated serial against the order
 * line item in the database the first time it's created. A serial should
 * only ever be deleted/invalidated if the underlying order is cancelled
 * before fulfillment — this is backend business logic, not something the
 * frontend should ever decide on its own.
 */
export function buildProductSerial(product: Product, editionNumber: number): string {
  const code = product.serialCode ?? product.slug.replace(/[^a-z0-9]/gi, "").toUpperCase();
  return `APEAX-CH${product.chapterId ?? "0"}-${code}-${String(editionNumber).padStart(3, "0")}`;
}