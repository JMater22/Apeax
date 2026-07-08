import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/shared/product-card";
import { SearchBar } from "@/components/shared/search-bar";
import { SortDropdown } from "@/components/shared/sort-dropdown";
import { Pagination } from "@/components/shared/pagination";
import { Badge } from "@/components/ui/badge";
import { PRODUCT_CATEGORIES } from "@/lib/constants/categories";
import { type SortOption } from "@/lib/constants/sort-options";
import { type Product, type ProductCategory } from "@/types/product";

const ALL_PRODUCTS: Product[] = [
  { id: "1", slug: "exceed-limits-tee", name: "Exceed Limits Tee", price: 850, category: "shirt", chapterId: "1", editionSize: 500, unitsSold: 500, isSoldOut: true, placeholderColor: "bg-apeax-cod-gray" },
  { id: "2", slug: "exceed-limits-hoodie", name: "Exceed Limits Hoodie", price: 1650, category: "hoodie", chapterId: "1", editionSize: 300, unitsSold: 214, isSoldOut: false, placeholderColor: "bg-apeax-cod-gray" },
  { id: "3", slug: "exceed-limits-cap", name: "Exceed Limits Cap", price: 550, category: "cap", chapterId: "1", editionSize: 200, unitsSold: 90, isSoldOut: false, placeholderColor: "bg-apeax-cod-gray" },
  { id: "4", slug: "unwritten-tee", name: "Unwritten Tee", price: 850, category: "shirt", chapterId: "2", editionSize: 400, unitsSold: 12, isSoldOut: false, placeholderColor: "bg-apeax-cararra" },
  { id: "5", slug: "unwritten-hoodie", name: "Unwritten Hoodie", price: 1750, category: "hoodie", chapterId: "2", editionSize: 250, unitsSold: 3, isSoldOut: false, placeholderColor: "bg-apeax-cararra" },
  { id: "6", slug: "unwritten-cap", name: "Unwritten Cap", price: 600, category: "cap", chapterId: "2", editionSize: 150, unitsSold: 0, isSoldOut: false, placeholderColor: "bg-apeax-cararra" },
  { id: "7", slug: "becoming-tote", name: "Becoming Tote Bag", price: 450, category: "accessory", chapterId: "1", editionSize: 600, unitsSold: 120, isSoldOut: false, placeholderColor: "bg-apeax-westar" },
  { id: "8", slug: "becoming-beanie", name: "Becoming Beanie", price: 500, category: "cap", chapterId: "1", editionSize: 300, unitsSold: 300, isSoldOut: true, placeholderColor: "bg-apeax-westar" },
  { id: "9", slug: "ascent-tee", name: "Ascent Tee", price: 900, category: "shirt", chapterId: "1", editionSize: 400, unitsSold: 88, isSoldOut: false, placeholderColor: "bg-apeax-cod-gray" },
  { id: "10", slug: "ascent-hoodie", name: "Ascent Hoodie", price: 1800, category: "hoodie", chapterId: "1", editionSize: 200, unitsSold: 45, isSoldOut: false, placeholderColor: "bg-apeax-cod-gray" },
];

const PAGE_SIZE = 8;

interface ShopPageProps {
  searchParams: Promise<{ category?: string; q?: string; sort?: string; page?: string }>;
}

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