"use client";

import { useState } from "react";

/**
 * Placeholder implementation. Once Sprint 4/7 land, this should read from a
 * CartContext backed by the NestJS API instead of local component state.
 */
export function useCart() {
  const [itemCount] = useState(0);
  return { itemCount };
}