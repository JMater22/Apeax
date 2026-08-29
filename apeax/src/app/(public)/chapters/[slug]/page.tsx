import { notFound } from "next/navigation";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/shared/product-card";
import { getProductsByChapter } from "@/lib/data/products";
import type { Metadata } from "next";
import { getChapterBySlug } from "@/lib/data/chapters";

export async function generateMetadata({ params }: ChapterDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) return { title: "Chapter Not Found | APEAX" };
  return {
    title: `${chapter.title} | APEAX`,
    description: chapter.storyTeaser,
  };
}



interface ChapterDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ChapterDetailPage({ params }: ChapterDetailPageProps) {
  const { slug } = await params;
    // Chapter One's chapterId is "1" — matches the slug for now since there's
    // only one chapter with products. Once a real Chapter/Product relationship
    // exists in Sprint 7, this should look up chapterId from the Chapter record
    // by slug instead of hardcoding it here.
const products = slug === "chapter-one-exceed-limits" ? getProductsByChapter("1") : [];

if (products.length === 0) notFound();

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
            
            <a  href={`/chapters/${slug}/story`}
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