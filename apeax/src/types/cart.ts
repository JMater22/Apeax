export interface CartItem {
  id: string;              // productSlug + variantId, e.g. "exceed-limits-hoodie-m"
  productSlug: string;
  name: string;
  price: number;
  variantLabel?: string;
  quantity: number;
  placeholderColor?: string;
}