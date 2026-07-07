"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, User, X } from "lucide-react";
import { PRIMARY_NAV_LINKS } from "@/lib/constants/navigation";
import { useCart } from "@/hooks/use-cart";
import { Container } from "@/components/layout/container";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="font-condensed text-2xl uppercase text-foreground">
          APEAX
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {PRIMARY_NAV_LINKS.map((link) => (
            <Link
              key={link.href}   
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button aria-label="Search" className="hidden text-foreground/80 hover:text-foreground lg:block">
            <Search size={18} />
          </button>
          <Link href="/account" aria-label="Account" className="hidden text-foreground/80 hover:text-foreground lg:block">
            <User size={18} />
          </Link>
          <Link href="/cart" className="text-sm font-medium uppercase tracking-wide text-foreground/80 hover:text-foreground">
            Cart ({itemCount})
          </Link>
          <button
            aria-label="Toggle menu"
            className="text-foreground lg:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {isMobileMenuOpen && (
        <nav className="flex flex-col gap-4 border-t border-border bg-background px-6 py-6 lg:hidden">
          {PRIMARY_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}