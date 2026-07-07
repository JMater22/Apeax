import { type ProductCategory } from "@/types/product";

export const PRODUCT_CATEGORIES: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "shirt", label: "Shirts" },
  { value: "hoodie", label: "Hoodies" },
  { value: "cap", label: "Caps" },
  { value: "accessory", label: "Accessories" },
];