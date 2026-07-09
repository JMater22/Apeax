"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, User, X } from "lucide-react";
import { PRIMARY_NAV_LINKS } from "@/lib/constants/navigation";
import { useCart } from "@/hooks/use-cart";
import { Container } from "@/components/layout/container";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-apeax-westar/20 bg-apeax-cod-gray">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="relative block h-8 w-24 md:h-10 md:w-32">
          <Image
            src="/images/brand/Apeax.png"
            alt="APEAX"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {PRIMARY_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button
            aria-label="Search"
            className="hidden text-white/80 hover:text-white lg:block"
              >
            <Search size={18} />
          </button>
          <Link href="/account" aria-label="Account" className="text-white/80 hover:text-white">
            <User size={18} />
          </Link>
          <Link href="/cart" className="font-sans text-sm font-medium uppercase tracking-wide text-white/80 hover:text-white">
            Cart ({itemCount})
          </Link>
          <button
            aria-label="Toggle menu"
            className="text-white lg:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {isMobileMenuOpen && (
              <nav className="flex flex-col gap-4 border-t border-apeax-westar/20 bg-apeax-cod-gray px-6 py-6 lg:hidden">
                {PRIMARY_NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-sans text-sm font-medium uppercase tracking-wide text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/account"
                  className="font-sans text-sm font-medium uppercase tracking-wide text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Account
                </Link>
              </nav>
            )}
    </header>
  );
}