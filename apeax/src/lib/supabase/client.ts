import { createBrowserClient } from "@supabase/ssr";

/**
 * Use this in Client Components ("use client" files) — e.g. the Login form
 * itself, where the user directly interacts with the button/input.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}