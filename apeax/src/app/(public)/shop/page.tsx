import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/shared/product-card";
import { SearchBar } from "@/components/shared/search-bar";
import { SortDropdown } from "@/components/shared/sort-dropdown";
import { Pagination } from "@/components/shared/pagination";
import { Badge } from "@/components/ui/badge";
import { PRODUCT_CATEGORIES } from "@/lib/constants/categories";
import { categoryMatchesQuery } from "@/lib/constants/search-terms";
import { type SortOption } from "@/lib/constants/sort-options";
import { ALL_PRODUCTS } from "@/lib/data/products";
import { CHAPTERS } from "@/lib/data/chapters";
import { type ProductCategory } from "@/types/product";

const PAGE_SIZE = 8;

interface ShopPageProps {
  searchParams: Promise<{ category?: string; chapter?: string; q?: string; sort?: string; page?: string }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { category, chapter: chapterSlug, q, sort, page } = await searchParams;

  const activeCategory = (category as ProductCategory | undefined) ?? "all";
  const activeChapter = CHAPTERS.find((c) => c.slug === chapterSlug);
  const activeSort = (sort as SortOption | undefined) ?? "newest";
  const currentPage = Math.max(1, Number(page) || 1);

  let products = ALL_PRODUCTS;

  if (activeCategory !== "all") {
    products = products.filter((p) => p.category === activeCategory);
  }

  if (activeChapter) {
    products = products.filter((p) => p.chapterId === activeChapter.id);
  }

  if (q) {
    const query = q.toLowerCase();
    products = products.filter(
      (p) => p.name.toLowerCase().includes(query) || categoryMatchesQuery(p.category, query),
    );
  }

  if (activeSort === "price-asc") {
    products = [...products].sort((a, b) => a.price - b.price);
  } else if (activeSort === "price-desc") {
    products = [...products].sort((a, b) => b.price - a.price);
  }

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function buildPageHref(targetPage: number) {
    const params = new URLSearchParams();
    if (activeCategory !== "all") params.set("category", activeCategory);
    if (activeChapter) params.set("chapter", activeChapter.slug);
    if (q) params.set("q", q);
    if (activeSort !== "newest") params.set("sort", activeSort);
    if (targetPage > 1) params.set("page", String(targetPage));
    const query = params.toString();
    return query ? `/shop?${query}` : "/shop";
  }

  function buildFilterHref(overrides: { category?: string; chapter?: string }) {
    const params = new URLSearchParams();
    const nextCategory = overrides.category ?? activeCategory;
    const nextChapter = overrides.chapter ?? activeChapter?.slug ?? "";
    if (nextCategory !== "all") params.set("category", nextCategory);
    if (nextChapter) params.set("chapter", nextChapter);
    if (q) params.set("q", q);
    if (activeSort !== "newest") params.set("sort", activeSort);
    const query = params.toString();
    return query ? `/shop?${query}` : "/shop";
  }

  return (
    <>
      <PageHeader title="Shop" />
      <Container className="py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SearchBar className="w-full max-w-xs" />
          <div className="flex flex-wrap items-center gap-3">
            <form action="/shop" method="get" className="flex items-center gap-2">
              {activeCategory !== "all" && (
                <input type="hidden" name="category" value={activeCategory} />
              )}
              {q && <input type="hidden" name="q" value={q} />}
              {activeSort !== "newest" && <input type="hidden" name="sort" value={activeSort} />}
              <select
                name="chapter"
                defaultValue={activeChapter?.slug ?? ""}
                className="h-9 border border-apeax-westar bg-background px-2 font-sans text-xs uppercase tracking-wide text-apeax-cod-gray outline-none"
                aria-label="Filter by chapter"
              >
                <option value="">All Chapters</option>
                {CHAPTERS.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.title}
                  </option>
                ))}
              </select>
              <button type="submit" className="sr-only">
                Apply chapter filter
              </button>
            </form>
            <SortDropdown />
          </div>
        </div>

        <nav className="mb-10 flex flex-wrap gap-2">
          {PRODUCT_CATEGORIES.map((cat) => (
            <a key={cat.value} href={buildFilterHref({ category: cat.value })}>
              <Badge
                variant={activeCategory === cat.value ? "default" : "secondary"}
                className="font-sans text-xs uppercase tracking-wide"
              >
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