import { notFound } from "next/navigation";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/shared/product-card";
import { type Product } from "@/types/product";

const CHAPTER_PRODUCTS: Record<string, Product[]> = {
  "chapter-one-exceed-limits": [
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
      variants: [
        { id: "s", label: "S", stock: 0 },
        { id: "m", label: "M", stock: 0 },
        { id: "l", label: "L", stock: 0 },
        { id: "xl", label: "XL", stock: 0 },
      ],
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
      variants: [
        { id: "s", label: "S", stock: 12 },
        { id: "m", label: "M", stock: 30 },
        { id: "l", label: "L", stock: 28 },
        { id: "xl", label: "XL", stock: 16 },
      ],
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
      variants: [{ id: "one-size", label: "One Size", stock: 110 }],
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
            <div className="mb-10 flex items-center justify-between">
            <p className="max-w-2xl font-body text-apeax-cod-gray/70">
                The first act of becoming — where growth begins with breaking your
                own ceiling. Each piece is limited to its stated edition size and
                will not be restocked.
            </p>
            
            <a  href={`/chapters/${slug}/story/act-1`}
                className="shrink-0 whitespace-nowrap bg-apeax-cod-gray px-6 py-3 font-sans text-xs font-bold uppercase tracking-wide text-white hover:opacity-90"
            >
                Read the Story
            </a>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </Container>
        </>
    );
}