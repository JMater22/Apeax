"use client";

import { Input } from "@/components/ui/input";
import { type ShippingAddress } from "@/types/checkout";

interface ShippingFormProps {
  value: ShippingAddress;
  onChange: (value: ShippingAddress) => void;
}

export function ShippingForm({ value, onChange }: ShippingFormProps) {
  function handleChange(field: keyof ShippingAddress, fieldValue: string) {
    onChange({ ...value, [field]: fieldValue });
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className="mb-1 block font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/70">
          Full Name
        </label>
        <Input
          value={value.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          required
        />
      </div>

      <div className="sm:col-span-2">
        <label className="mb-1 block font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/70">
          Address Line 1
        </label>
        <Input
          value={value.addressLine1}
          onChange={(e) => handleChange("addressLine1", e.target.value)}
          required
        />
      </div>

      <div className="sm:col-span-2">
        <label className="mb-1 block font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/70">
          Address Line 2 (Optional)
        </label>
        <Input
          value={value.addressLine2 ?? ""}
          onChange={(e) => handleChange("addressLine2", e.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/70">
          City
        </label>
        <Input value={value.city} onChange={(e) => handleChange("city", e.target.value)} required />
      </div>

      <div>
        <label className="mb-1 block font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/70">
          Province
        </label>
        <Input
          value={value.province}
          onChange={(e) => handleChange("province", e.target.value)}
          required
        />
      </div>

      <div>
        <label className="mb-1 block font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/70">
          Postal Code
        </label>
        <Input
          value={value.postalCode}
          onChange={(e) => handleChange("postalCode", e.target.value)}
          required
        />
      </div>

      <div>
        <label className="mb-1 block font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/70">
          Phone Number
        </label>
        <Input value={value.phone} onChange={(e) => handleChange("phone", e.target.value)} required />
      </div>
    </div>
  );
}