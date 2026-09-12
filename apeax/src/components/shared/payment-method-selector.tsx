"use client";

import { CreditCard, Banknote } from "lucide-react";
import { cn } from "@/lib/utils";
import { PAYMENT_METHODS, type PaymentMethod } from "@/types/checkout";

interface PaymentMethodSelectorProps {
  value: PaymentMethod;
  onChange: (value: PaymentMethod) => void;
}

function PaymentIcon({ method }: { method: PaymentMethod }) {
  if (method === "card") return <CreditCard size={18} />;
  if (method === "cod") return <Banknote size={18} />;
  // GCash placeholder mark — swap for the licensed logo asset before production.
  return (
    <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-blue-600 font-sans text-[10px] font-bold text-white">
      G
    </span>
  );
}

export function PaymentMethodSelector({ value, onChange }: PaymentMethodSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      {PAYMENT_METHODS.map((method) => (
        <button
          key={method.value}
          type="button"
          onClick={() => onChange(method.value)}
          className={cn(
            "flex items-center gap-3 border px-4 py-3 text-left font-sans text-sm transition-colors",
            value === method.value
              ? "border-apeax-cod-gray bg-apeax-cararra text-apeax-cod-gray"
              : "border-apeax-westar text-apeax-cod-gray hover:border-apeax-cod-gray",
          )}
        >
          <PaymentIcon method={method.value} />
          {method.label}
        </button>
      ))}
    </div>
  );
}