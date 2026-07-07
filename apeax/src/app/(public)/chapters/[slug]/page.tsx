import { notFound } from "next/navigation";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/shared/product-card";
import { type Product } from "@/types/product";

// TODO: replace with real fetch by slug from services/chapter.service.ts
const CHAPTER_PRODUCTS: Record<string, Product[]> = {
  "chapter-one-exceed-limits": [
    {
      id: "1",
      slug: "exceed-limits-tee",
      name: "Exceed Limits Tee",
      price: 850,
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
      chapterId: "1",
      editionSize: 300,
      unitsSold: 214,
      isSoldOut: false,
      placeholderColor: "bg-apeax-cod-gray",
    },
  ],
};

interface ChapterDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ChapterDetailPage({ params }: ChapterDetailPageProps) {
  const { slug } = await params;
  const products = CHAPTER_PRODUCTS[slug];

  if (!products) notFound();

  return (
    <>
      <PageHeader title="Chapter One: Exceed Limits" />
      <Container className="py-16">
        <p className="mb-10 max-w-2xl text-muted-foreground">
          The first act of becoming — where growth begins with breaking your
          own ceiling. Each piece is limited to its stated edition size and
          will not be restocked.
        </p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
}