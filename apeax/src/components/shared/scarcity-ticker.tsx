import { getLatestLiveChapter } from "@/lib/data/chapters";
import { getProductsByChapter } from "@/lib/data/products";

// Only ever shows the current live chapter — never past or upcoming ones.
export function ScarcityTicker() {
  const chapter = getLatestLiveChapter();
  if (!chapter) return null;

  const products = getProductsByChapter(chapter.id);
  const totalClaimed = products.reduce((sum, p) => sum + (p.unitsSold ?? 0), 0);
  const totalEdition = products.reduce((sum, p) => sum + (p.editionSize ?? 0), 0);

  return (
    <div className="overflow-hidden border-y border-apeax-westar bg-apeax-cararra py-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee items-center whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {Array.from({ length: 3 }).map((_, i) => (
              <span
                key={i}
                className="mx-10 flex items-center gap-3 font-sans text-xs uppercase tracking-[2px] text-apeax-cod-gray/70"
              >
                <span className="font-medium text-apeax-cod-gray">
                  {chapter.number} — {chapter.title}
                </span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-apeax-cod-gray/30" />
                <span>
                  {totalClaimed.toLocaleString()} / {totalEdition.toLocaleString()} claimed
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}