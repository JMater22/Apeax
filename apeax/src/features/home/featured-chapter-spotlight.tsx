import Link from "next/link";
import { Container } from "@/components/layout/container";
import { BrandImage } from "@/components/shared/brand-image";
import { TiltCard } from "@/components/shared/tilt-card";
import { ChapterStatusBadge } from "@/components/shared/chapter-status-badge";
import { Reveal } from "@/components/shared/reveal";
import { Magnetic } from "@/components/shared/magnetic";
import { getLatestLiveChapter } from "@/lib/data/chapters";

export function FeaturedChapterSpotlight() {
  const chapter = getLatestLiveChapter();
  if (!chapter) return null;

  return (
    <section className="border-b border-apeax-westar bg-apeax-cod-gray py-16 md:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl">
          <TiltCard className="relative aspect-[16/9] w-full overflow-hidden rounded-sm shadow-2xl">
            <BrandImage
              src={chapter.imageUrl}
              alt={chapter.title}
              className="h-full w-full"
              sizes="(max-width: 768px) 90vw, 768px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 flex flex-col items-start gap-3 p-6 md:p-10">
              <ChapterStatusBadge status={chapter.status} />
              <span className="font-sans text-xs uppercase tracking-wide text-white/70">
                {chapter.number}
              </span>
              <h2 className="font-display text-3xl uppercase text-white md:text-5xl">
                {chapter.title}
              </h2>
              <Magnetic className="inline-block">
                <Link
                  href={`/chapters/${chapter.slug}`}
                  className="inline-block bg-white px-6 py-3 font-sans text-xs font-bold uppercase tracking-wide text-apeax-cod-gray hover:bg-white/90"
                >
                  Explore Chapter
                </Link>
              </Magnetic>
            </div>
          </TiltCard>
        </Reveal>
      </Container>
    </section>
  );
}