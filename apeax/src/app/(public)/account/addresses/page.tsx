"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MOCK_ADDRESSES } from "@/lib/data/mock-account";
import { type SavedAddress } from "@/types/account";

export default function SavedAddressesPage() {
  const [addresses, setAddresses] = useState<SavedAddress[]>(MOCK_ADDRESSES);

  function handleRemove(id: string) {
    // TODO: replace with real Supabase delete call (Sprint 7)
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-condensed text-lg uppercase tracking-wide text-apeax-cod-gray">
          Saved Addresses
        </h2>
        <Button variant="secondary" className="font-sans text-xs uppercase tracking-wide">
          Add Address
        </Button>
      </div>

      {addresses.length === 0 ? (
        <p className="font-body text-apeax-cod-gray/60">No saved addresses yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {addresses.map((address) => (
            <div key={address.id} className="border border-apeax-westar p-5">
              <div className="flex items-center justify-between">
                <p className="font-sans text-sm font-medium text-apeax-cod-gray">{address.label}</p>
                {address.isDefault && (
                  <Badge variant="secondary" className="font-sans text-[10px] uppercase tracking-wide">
                    Default
                  </Badge>
                )}
              </div>
              <p className="mt-2 font-body text-sm text-apeax-cod-gray/70">
                {address.fullName}
                <br />
                {address.addressLine1}
                {address.addressLine2 && <>, {address.addressLine2}</>}
                <br />
                {address.city}, {address.province} {address.postalCode}
                <br />
                {address.phone}
              </p>
              <button
                onClick={() => handleRemove(address.id)}
                className="mt-4 font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/50 hover:text-destructive"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}