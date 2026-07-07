import Link from "next/link";
import { cn } from "@/lib/utils";
import { type Collection } from "@/types/collection";

interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link href={`/collections/${collection.slug}`} className="group block">
      <div
        className={cn(
          "aspect-[4/5] w-full rounded-lg bg-muted",
          collection.placeholderColor,
        )}
      />
      <div className="mt-3">
        {collection.chapterLabel && (
          <span className="text-xs uppercase tracking-wide text-muted-foreground">
            {collection.chapterLabel}
          </span>
        )}
        <h3 className="font-condensed text-lg uppercase text-foreground">
          {collection.name}
        </h3>
      </div>
    </Link>
  );
}