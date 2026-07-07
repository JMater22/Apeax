import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/shared/product-card";
import { Badge } from "@/components/ui/badge";
import { PRODUCT_CATEGORIES } from "@/lib/constants/categories";
import { type Product, type ProductCategory } from "@/types/product";

// TODO: replace with a real fetch from services/product.service.ts (Sprint 7)
const ALL_PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "exceed-limits-tee",
    name: "Exceed Limits Tee",
    price: 850,
    category: "shirt",
    chapterId: "1",
    editionSize: 500,
    unitsSold: 500,
    isSoldOut: true,
    placeholderColor: "bg-apeax-cod-gray",
  },
  {
    id: "2",
    slug: "exceed-limits-hoodie",
    name: "Exceed Limits Hoodie",
    price: 1650,
    category: "hoodie",
    chapterId: "1",
    editionSize: 300,
    unitsSold: 214,
    isSoldOut: false,
    placeholderColor: "bg-apeax-cod-gray",
  },
  {
    id: "3",
    slug: "exceed-limits-cap",
    name: "Exceed Limits Cap",
    price: 550,
    category: "cap",
    chapterId: "1",
    editionSize: 200,
    unitsSold: 90,
    isSoldOut: false,
    placeholderColor: "bg-apeax-cod-gray",
  },
];

interface ShopPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { category } = await searchParams;
  const activeCategory = (category as ProductCategory | undefined) ?? "all";

  const filteredProducts =
    activeCategory === "all"
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHeader title="Shop" />
      <Container className="py-16">
        <nav className="mb-10 flex flex-wrap gap-2">
          {PRODUCT_CATEGORIES.map((cat) => (
            <a key={cat.value} href={cat.value === "all" ? "/shop" : `/shop?category=${cat.value}`}>
              <Badge variant={activeCategory === cat.value ? "default" : "secondary"}>
                {cat.label}
              </Badge>
            </a>
          ))}
        </nav>

        {filteredProducts.length === 0 ? (
          <p className="text-muted-foreground">No products in this category yet.</p>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}