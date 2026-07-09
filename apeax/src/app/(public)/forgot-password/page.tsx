"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { AuthCard } from "@/components/shared/auth-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: replace with real Supabase auth.resetPasswordForEmail() call (Sprint 7)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  }

  if (isSubmitted) {
    return (
      <AuthCard title="Check Your Email">
        <p className="text-center font-body text-sm text-apeax-cod-gray/70">
          If an account exists for <span className="font-medium">{email}</span>, a password
          reset link has been sent.
        </p>
        <Link
          href="/login"
          className="mt-6 block text-center font-sans text-sm font-medium text-apeax-cod-gray underline underline-offset-2"
        >
          Back to Log In
        </Link>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      title="Forgot Password"
      subtitle="Enter your email and we'll send you a reset link."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

        <Button
          type="submit"
          variant="default"
          className="mt-2 h-11 font-sans text-xs uppercase tracking-wide"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Reset Link"}
        </Button>
      </form>

      <p className="mt-6 text-center font-sans text-sm text-apeax-cod-gray/60">
        <Link href="/login" className="font-medium text-apeax-cod-gray underline underline-offset-2">
          Back to Log In
        </Link>
      </p>
    </AuthCard>
  );
}