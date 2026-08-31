import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/shared/product-card";
import { SearchBar } from "@/components/shared/search-bar";
import { SortDropdown } from "@/components/shared/sort-dropdown";
import { Pagination } from "@/components/shared/pagination";
import { Badge } from "@/components/ui/badge";
import { PRODUCT_CATEGORIES } from "@/lib/constants/categories";
import { type SortOption } from "@/lib/constants/sort-options";
import { type ProductCategory } from "@/types/product";
import { ALL_PRODUCTS } from "@/lib/data/products";
import type { Metadata } from "next";

const PAGE_SIZE = 8;

interface ShopPageProps {
  searchParams: Promise<{ category?: string; q?: string; sort?: string; page?: string }>;
}
export const metadata: Metadata = {
  title: "Shop | APEAX",
  description: "Shop limited-edition APEAX merchandise — tees, hoodies, caps, and accessories from every chapter.",
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { category, q, sort, page } = await searchParams;

  const activeCategory = (category as ProductCategory | undefined) ?? "all";
  const activeSort = (sort as SortOption | undefined) ?? "newest";
  const currentPage = Math.max(1, Number(page) || 1);

  let products = ALL_PRODUCTS;

  if (activeCategory !== "all") {
    products = products.filter((p) => p.category === activeCategory);
  }

  if (q) {
    const query = q.toLowerCase();
    products = products.filter((p) => p.name.toLowerCase().includes(query));
  }

  if (activeSort === "price-asc") {
    products = [...products].sort((a, b) => a.price - b.price);
  } else if (activeSort === "price-desc") {
    products = [...products].sort((a, b) => b.price - a.price);
  }
  // "newest" = natural array order (mock data is already newest-first)

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function buildPageHref(targetPage: number) {
    const params = new URLSearchParams();
    if (activeCategory !== "all") params.set("category", activeCategory);
    if (q) params.set("q", q);
    if (activeSort !== "newest") params.set("sort", activeSort);
    if (targetPage > 1) params.set("page", String(targetPage));
    const query = params.toString();
    return query ? `/shop?${query}` : "/shop";
  }

  return (
    <>
      <PageHeader title="Shop" />
      <Container className="py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SearchBar className="w-full max-w-xs" />
          <SortDropdown />
        </div>

        <nav className="mb-10 flex flex-wrap gap-2">
          {PRODUCT_CATEGORIES.map((cat) => (
            
            <a  key={cat.value}
              href={
                cat.value === "all"
                  ? "/shop"
                  : `/shop?category=${cat.value}`
              }
            >
              <Badge variant={activeCategory === cat.value ? "default" : "secondary"} className="font-sans text-xs uppercase tracking-wide">
                {cat.label}
              </Badge>
            </a>
          ))}
        </nav>

        {q && (
          <p className="mb-6 font-sans text-sm text-apeax-cod-gray/60">
            Showing results for &ldquo;{q}&rdquo;
          </p>
        )}

        {paginatedProducts.length === 0 ? (
          <p className="font-body text-apeax-cod-gray/60">No products found.</p>
        ) : (
          <>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              buildHref={buildPageHref}
            />
          </>
        )}
      </Container>
    </>
  );
}