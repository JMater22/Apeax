import { type UserProfile, type Order, type SavedAddress } from "@/types/account";

// TODO: replace all of this with real Supabase queries once auth exists (Sprint 7)
export const MOCK_USER: UserProfile = {
  fullName: "Marco Dela Cruz",
  email: "marco@example.com",
  phone: "0917 123 4567",
};

export const MOCK_ORDERS: Order[] = [
  {
    id: "1",
    orderNumber: "APX-10023",
    placedAt: "2026-06-18",
    status: "delivered",
    items: [
      { productName: "Exceed Limits Hoodie", variantLabel: "M", quantity: 1, price: 1650 },
      { productName: "Exceed Limits Cap", variantLabel: "One Size", quantity: 1, price: 550 },
    ],
    total: 2200,
  },
  {
    id: "2",
    orderNumber: "APX-10041",
    placedAt: "2026-07-02",
    status: "processing",
    items: [{ productName: "Ascent Tee", variantLabel: "L", quantity: 2, price: 900 }],
    total: 1800,
  },
];

export const MOCK_ADDRESSES: SavedAddress[] = [
  {
    id: "1",
    label: "Home",
    isDefault: true,
    fullName: "Marco Dela Cruz",
    addressLine1: "123 Rizal Street",
    addressLine2: "Unit 4B",
    city: "San Jose del Monte",
    province: "Bulacan",
    postalCode: "3023",
    phone: "0917 123 4567",
  },
];

export const MOCK_WISHLIST_SLUGS: string[] = ["exceed-limits-hoodie", "unwritten-tee"];