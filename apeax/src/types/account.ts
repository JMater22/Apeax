import { type ShippingAddress } from "@/types/checkout";

export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
}

export interface OrderItem {
  productName: string;
  variantLabel?: string;
  quantity: number;
  price: number;
}

export type OrderStatus = "processing" | "shipped" | "delivered" | "cancelled";

export interface Order {
  id: string;
  orderNumber: string;
  placedAt: string;
  status: OrderStatus;
  items: OrderItem[];
  total: number;
}

export interface SavedAddress extends ShippingAddress {
  id: string;
  label: string; // "Home", "Work", etc.
  isDefault: boolean;
}