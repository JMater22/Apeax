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
  /** Every product's own narrative passage — required so no product is ever left without a story. */
  story: string;
}