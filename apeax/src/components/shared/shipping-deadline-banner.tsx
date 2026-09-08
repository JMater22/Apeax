"use client";

import { useEffect, useState } from "react";
import { Truck } from "lucide-react";
import { getShippingDeadlineMessage } from "@/lib/shipping-deadline";

export function ShippingDeadlineBanner() {
  const [message, setMessage] = useState<string | null>(() => getShippingDeadlineMessage());

  useEffect(() => {
    const interval = setInterval(() => setMessage(getShippingDeadlineMessage()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (!message) return null;

  return (
    <div className="flex items-center gap-2 border border-apeax-westar bg-apeax-cararra px-4 py-3">
      <Truck size={16} className="shrink-0 text-apeax-cod-gray" />
      <p className="font-sans text-xs text-apeax-cod-gray">{message}</p>
    </div>
  );
}