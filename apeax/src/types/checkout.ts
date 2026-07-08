export interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
}

export type ShippingMethod = "standard" | "express";

export const SHIPPING_RATES: Record<ShippingMethod, { label: string; price: number; eta: string }> = {
  standard: { label: "Standard Shipping", price: 120, eta: "5–7 business days" },
  express: { label: "Express Shipping", price: 280, eta: "2–3 business days" },
};

export type PaymentMethod = "card" | "gcash" | "cod";

export const PAYMENT_METHODS: { value: PaymentMethod; label: string }[] = [
  { value: "card", label: "Credit / Debit Card" },
  { value: "gcash", label: "GCash" },
  { value: "cod", label: "Cash on Delivery" },
];