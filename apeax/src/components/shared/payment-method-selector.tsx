"use client";

import { cn } from "@/lib/utils";
import { PAYMENT_METHODS, type PaymentMethod } from "@/types/checkout";

interface PaymentMethodSelectorProps {
  value: PaymentMethod;
  onChange: (value: PaymentMethod) => void;
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
            "border px-4 py-3 text-left font-sans text-sm transition-colors",
            value === method.value
              ? "border-apeax-cod-gray bg-apeax-cararra text-apeax-cod-gray"
              : "border-apeax-westar text-apeax-cod-gray hover:border-apeax-cod-gray",
          )}
        >
          {method.label}
        </button>
      ))}
    </div>
  );
}