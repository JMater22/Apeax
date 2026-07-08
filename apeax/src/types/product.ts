export type ProductCategory = "shirt" | "hoodie" | "cap" | "accessory";

export interface ProductVariant {
  id: string;
  label: string;       // "S", "M", "L", "XL" for shirts — or "One Size" for caps
  stock: number;
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
  variants?: ProductVariant[]; // omit entirely for one-size items like caps
}