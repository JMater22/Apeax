"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/shared/auth-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: replace with real Supabase auth.signInWithPassword() call (Sprint 7)
    setTimeout(() => {
      router.push("/account");
    }, 600);
  }

  return (
    <AuthCard title="Log In" subtitle="Welcome back to the story.">
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

        <div>
          <div className="flex items-center justify-between">
            <label className="mb-1 block font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/70">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="font-sans text-xs text-apeax-cod-gray/50 hover:text-apeax-cod-gray"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button
          type="submit"
          variant="default"
          className="mt-2 h-11 font-sans text-xs uppercase tracking-wide"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging In..." : "Log In"}
        </Button>
      </form>

      <p className="mt-6 text-center font-sans text-sm text-apeax-cod-gray/60">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-medium text-apeax-cod-gray underline underline-offset-2">
          Register
        </Link>
      </p>
    </AuthCard>
  );
}