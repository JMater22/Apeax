"use client";

import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/format-currency";
import { SHIPPING_RATES, type ShippingMethod } from "@/types/checkout";

interface ShippingMethodSelectorProps {
  value: ShippingMethod;
  onChange: (value: ShippingMethod) => void;
}

export function ShippingMethodSelector({ value, onChange }: ShippingMethodSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      {(Object.keys(SHIPPING_RATES) as ShippingMethod[]).map((method) => {
        const rate = SHIPPING_RATES[method];
        return (
          <button
            key={method}
            type="button"
            onClick={() => onChange(method)}
            className={cn(
              "flex items-center justify-between border px-4 py-3 text-left transition-colors",
              value === method
                ? "border-apeax-cod-gray bg-apeax-cararra"
                : "border-apeax-westar hover:border-apeax-cod-gray",
            )}
          >
            <div>
              <p className="font-sans text-sm font-medium text-apeax-cod-gray">{rate.label}</p>
              <p className="font-sans text-xs text-apeax-cod-gray/60">{rate.eta}</p>
            </div>
            <span className="font-sans text-sm text-apeax-cod-gray">{formatCurrency(rate.price)}</span>
          </button>
        );
      })}
    </div>
  );
}