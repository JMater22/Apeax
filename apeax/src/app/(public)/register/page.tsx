"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/shared/auth-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: replace with real Supabase auth.signUp() call (Sprint 7)
    setTimeout(() => {
      router.push("/account");
    }, 600);
  }

  return (
    <AuthCard title="Create Account" subtitle="Become part of the story.">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="mb-1 block font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/70">
            Full Name
          </label>
          <Input value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>

        <div>
          <label className="mb-1 block font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/70">
            Email
          </label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="mb-1 block font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/70">
            Password
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
          />
          <p className="mt-1 font-sans text-xs text-apeax-cod-gray/50">Minimum 8 characters.</p>
        </div>

        <Button
          type="submit"
          variant="default"
          className="mt-2 h-11 font-sans text-xs uppercase tracking-wide"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>
      </form>

      <p className="mt-6 text-center font-sans text-sm text-apeax-cod-gray/60">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-apeax-cod-gray underline underline-offset-2">
          Log In
        </Link>
      </p>
    </AuthCard>
  );
}