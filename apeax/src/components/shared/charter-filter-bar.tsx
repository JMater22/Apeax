"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { CHAPTERS } from "@/lib/data/chapters";
import { getProductBySlug } from "@/lib/data/products";

interface CharterFilterBarProps {
  productSlugs: string[];
}

export function CharterFilterBar({ productSlugs }: CharterFilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.replace(`/charter-members?${params.toString()}`);
  }

  return (
    <div className="mb-10 flex flex-col gap-4 border border-apeax-westar bg-apeax-cararra p-5 md:flex-row md:flex-wrap md:items-end md:gap-6">
      <div className="min-w-[160px] flex-1">
        <label className="mb-1 block font-sans text-[10px] uppercase tracking-wide text-apeax-cod-gray/60">
          Search Name
        </label>
        <Input
          defaultValue={searchParams.get("q") ?? ""}
          onChange={(e) => updateParam("q", e.target.value)}
          placeholder="Search by name..."
        />
      </div>

      <div className="min-w-[160px]">
        <label className="mb-1 block font-sans text-[10px] uppercase tracking-wide text-apeax-cod-gray/60">
          Chapter
        </label>
        <select
          value={searchParams.get("chapter") ?? ""}
          onChange={(e) => updateParam("chapter", e.target.value)}
          className="h-9 w-full border border-apeax-westar bg-white px-2 font-sans text-xs uppercase tracking-wide text-apeax-cod-gray outline-none"
        >
          <option value="">All Chapters</option>
          {CHAPTERS.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.title}
            </option>
          ))}
        </select>
      </div>

      <div className="min-w-[160px]">
        <label className="mb-1 block font-sans text-[10px] uppercase tracking-wide text-apeax-cod-gray/60">
          Product
        </label>
        <select
          value={searchParams.get("product") ?? ""}
          onChange={(e) => updateParam("product", e.target.value)}
          className="h-9 w-full border border-apeax-westar bg-white px-2 font-sans text-xs uppercase tracking-wide text-apeax-cod-gray outline-none"
        >
          <option value="">All Products</option>
          {productSlugs.map((slug) => {
            const product = getProductBySlug(slug);
            return product ? (
              <option key={slug} value={slug}>
                {product.name}
              </option>
            ) : null;
          })}
        </select>
      </div>

      <div className="min-w-[160px]">
        <label className="mb-1 block font-sans text-[10px] uppercase tracking-wide text-apeax-cod-gray/60">
          Sort By
        </label>
        <select
          value={searchParams.get("sort") ?? "newest"}
          onChange={(e) => updateParam("sort", e.target.value)}
          className="h-9 w-full border border-apeax-westar bg-white px-2 font-sans text-xs uppercase tracking-wide text-apeax-cod-gray outline-none"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="az">Name A–Z</option>
          <option value="edition">Edition Number</option>
        </select>
      </div>
    </div>
  );
}