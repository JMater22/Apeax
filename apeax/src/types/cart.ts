export interface CartItem {
  id: string;
  productSlug: string;
  name: string;
  price: number;
  variantLabel?: string;
  quantity: number;
  imageUrl?: string;
}