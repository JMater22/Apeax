export type ProductCategory = "shirt" | "hoodie" | "cap" | "accessory";

export interface ProductVariant {
  id: string;
  label: string;
  stock: number;
}

export interface ProductDetails {
  material: string;        // "100% Heavyweight Cotton"
  fit: string;              // "Oversized Fit"
  care: string[];           // ["Machine wash cold", "Do not bleach", ...]
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
  narrativeHook?: string;   // short 1-2 sentence story tie-in, NOT the full Act
}