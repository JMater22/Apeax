import Link from "next/link";
import { ChapterStatusBadge } from "@/components/shared/chapter-status-badge";
import { BrandImage } from "@/components/shared/brand-image";
import { type Chapter } from "@/types/chapter";

export function ChapterCard({ chapter }: { chapter: Chapter }) {
  return (
    <Link href={`/chapters/${chapter.slug}`} className="group block">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <BrandImage
          src={chapter.imageUrl}
          alt={chapter.title}
          className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
          placeholderVariant={chapter.status === "upcoming" ? "light" : "dark"}
        />
        <div className="absolute left-3 top-3">
          <ChapterStatusBadge status={chapter.status} />
        </div>
      </div>
      <div className="mt-3">
        <span className="font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/60">
          {chapter.number}
        </span>
        <h3 className="font-condensed text-lg uppercase tracking-wide text-apeax-cod-gray">
          {chapter.title}
        </h3>
        <p className="mt-1 line-clamp-2 font-body text-sm text-apeax-cod-gray/70">
          {chapter.storyTeaser}
        </p>
      </div>
    </Link>
  );
}