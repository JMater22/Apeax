"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MOCK_USER } from "@/lib/data/mock-account";
import { type UserProfile } from "@/types/account";

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile>(MOCK_USER);
  const [isSaved, setIsSaved] = useState(false);

  function handleChange(field: keyof UserProfile, value: string) {
    setProfile((prev) => ({ ...prev, [field]: value }));
    setIsSaved(false);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: replace with real Supabase update call (Sprint 7)
    setIsSaved(true);
  }

  return (
    <div>
      <h2 className="mb-6 font-condensed text-lg uppercase tracking-wide text-apeax-cod-gray">
        Profile
      </h2>

      <form onSubmit={handleSubmit} className="flex max-w-sm flex-col gap-4">
        <div>
          <label className="mb-1 block font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/70">
            Full Name
          </label>
          <Input value={profile.fullName} onChange={(e) => handleChange("fullName", e.target.value)} />
        </div>

        <div>
          <label className="mb-1 block font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/70">
            Email
          </label>
          <Input
            type="email"
            value={profile.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div>
          <label className="mb-1 block font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/70">
            Phone
          </label>
          <Input value={profile.phone} onChange={(e) => handleChange("phone", e.target.value)} />
        </div>

        <Button
          type="submit"
          variant="default"
          className="mt-2 h-11 w-fit px-8 font-sans text-xs uppercase tracking-wide"
        >
          {isSaved ? "Saved ✓" : "Save Changes"}
        </Button>
      </form>
    </div>
  );
}