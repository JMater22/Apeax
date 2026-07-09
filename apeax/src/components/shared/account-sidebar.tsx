"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const ACCOUNT_NAV_LINKS = [
  { label: "Profile", href: "/account" },
  { label: "Order History", href: "/account/orders" },
  { label: "Saved Addresses", href: "/account/addresses" },
  { label: "Wishlist", href: "/account/wishlist" },
];

export function AccountSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    // TODO: replace with real Supabase auth.signOut() call (Sprint 7)
    router.push("/login");
  }

  return (
    <nav className="flex flex-col gap-1 border-r border-apeax-westar pr-6">
      {ACCOUNT_NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "px-3 py-2 font-sans text-sm uppercase tracking-wide transition-colors",
            pathname === link.href
              ? "bg-apeax-cararra font-medium text-apeax-cod-gray"
              : "text-apeax-cod-gray/60 hover:text-apeax-cod-gray",
          )}
        >
          {link.label}
        </Link>
      ))}
      <button
        onClick={handleLogout}
        className="mt-4 flex items-center gap-2 px-3 py-2 font-sans text-sm uppercase tracking-wide text-apeax-cod-gray/60 hover:text-apeax-cod-gray"
      >
        <LogOut size={14} /> Logout
      </button>
    </nav>
  );
}