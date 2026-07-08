import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChapterStatusBadge } from "@/components/shared/chapter-status-badge";
import { type Chapter } from "@/types/chapter";

export function ChapterCard({ chapter }: { chapter: Chapter }) {
  return (
    <Link href={`/chapters/${chapter.slug}`} className="group block">
      <div
        className={cn(
          "relative aspect-[4/5] w-full rounded-sm",
          chapter.placeholderColor ?? "bg-apeax-cod-gray",
        )}
      >
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