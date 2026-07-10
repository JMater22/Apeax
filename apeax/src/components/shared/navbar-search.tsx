"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

export function NavbarSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/shop?q=${encodeURIComponent(query.trim())}`);
    setIsOpen(false);
    setQuery("");
  }

  if (isOpen) {
    return (
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          aria-label="Search products"
          className="h-8 w-40 bg-white text-apeax-cod-gray sm:w-56"
        />
        <button
          type="button"
          aria-label="Close search"
          onClick={() => setIsOpen(false)}
          className="text-white/80 hover:text-white"
        >
          <X size={18} />
        </button>
      </form>
    );
  }

  return (
    <button
      aria-label="Search"
      onClick={() => setIsOpen(true)}
      className="text-white/80 hover:text-white"
    >
      <Search size={18} />
    </button>
  );
}