export type ProductCategory = "shirt" | "hoodie" | "cap" | "accessory";

export interface ProductVariant {
  id: string;
  label: string;
  stock: number;
}

export interface ProductDetails {
  material: string;
  fit: string;
  care: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: ProductCategory;
  imageUrl?: string;
  placeholderColor?: string;
  chapterId?: string;
  editionSize?: number;
  unitsSold?: number;
  isSoldOut?: boolean;
  variants?: ProductVariant[];
  details?: ProductDetails;
  story: string;
  /** Short code used to build this product's serial, e.g. "TEE" → APEAX-CH1-TEE-001 */
  serialCode?: string;
}