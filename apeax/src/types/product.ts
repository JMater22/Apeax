export type ProductCategory = "shirt" | "hoodie" | "cap" | "accessory";

export interface ProductVariant {
  id: string;
  label: string;
  stock: number;
}

export interface ProductColorOption {
  id: string;
  label: string;
  /** Hex color used to render the swatch dot */
  swatch: string;
  variants: ProductVariant[];
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
  /** Used when a product has no color choice — a single size run */
  variants?: ProductVariant[];
  /** Used when a product ships in multiple colors, each with its own sizes */
  colorOptions?: ProductColorOption[];
  details?: ProductDetails;
  story: string;
  serialCode?: string;
}