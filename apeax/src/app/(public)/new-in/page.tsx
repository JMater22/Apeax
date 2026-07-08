import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/shared/product-card";
import { ChapterStatusBadge } from "@/components/shared/chapter-status-badge";
import { getLatestLiveChapter } from "@/lib/data/chapters";
import { getProductsByChapter } from "@/lib/data/products";

export default function NewInPage() {
  const latestChapter = getLatestLiveChapter();
  const newProducts = latestChapter ? getProductsByChapter(latestChapter.id) : [];

  return (
    <>
      <PageHeader title="New In" />

      {latestChapter && (
        <section className="border-b border-apeax-westar bg-apeax-cararra py-16 md:py-24">
          <Container className="flex flex-col items-center text-center">
            <ChapterStatusBadge status={latestChapter.status} />
            <span className="mt-4 font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/60">
              {latestChapter.number}
            </span>
            <h1 className="mt-2 font-display text-5xl uppercase text-apeax-cod-gray md:text-7xl">
              {latestChapter.title}
            </h1>
            <p className="mt-4 max-w-md font-body text-apeax-cod-gray/70">
              {latestChapter.storyTeaser}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={`/chapters/${latestChapter.slug}/story/act-1`}
                className="bg-apeax-cod-gray px-8 py-4 font-sans text-xs font-bold uppercase tracking-wide text-white hover:opacity-90"
              >
                Read the Story
              </Link>
              <Link
                href={`/chapters/${latestChapter.slug}`}
                className="border border-apeax-cod-gray px-8 py-4 font-sans text-xs font-bold uppercase tracking-wide text-apeax-cod-gray hover:bg-apeax-cod-gray hover:text-white"
              >
                Shop the Chapter
              </Link>
            </div>
          </Container>
        </section>
      )}

      <Container className="py-16">
        <h2 className="mb-10 text-center font-condensed text-xl uppercase tracking-wide text-apeax-cod-gray">
          Newly Released
        </h2>
        {newProducts.length === 0 ? (
          <p className="text-center font-body text-apeax-cod-gray/60">
            Nothing new right now — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}