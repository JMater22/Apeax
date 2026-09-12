import { type Order } from "@/types/account";
import { MOCK_ORDERS } from "@/lib/data/mock-account";

const ORDERS_STORAGE_KEY = "apeax_orders";

export function generateOrderNumber(): string {
  return `APX-${Math.floor(10000 + Math.random() * 90000)}`;
}

export function getStoredOrders(): Order[] {
  if (typeof window === "undefined") return MOCK_ORDERS;
  try {
    const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
    const stored: Order[] = raw ? JSON.parse(raw) : [];
    return [...stored, ...MOCK_ORDERS];
  } catch {
    return MOCK_ORDERS;
  }
}

export function addStoredOrder(order: Order): void {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
    const stored: Order[] = raw ? JSON.parse(raw) : [];
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify([order, ...stored]));
  } catch {
    // ignore storage write failures
  }
}