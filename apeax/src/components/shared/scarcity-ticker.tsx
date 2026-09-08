import { getLatestLiveChapter } from "@/lib/data/chapters";
import { getProductsByChapter } from "@/lib/data/products";

export function ScarcityTicker() {
  const chapter = getLatestLiveChapter();
  if (!chapter) return null;

  const products = getProductsByChapter(chapter.id);
  const totalClaimed = products.reduce((sum, p) => sum + (p.unitsSold ?? 0), 0);
  const totalEdition = products.reduce((sum, p) => sum + (p.editionSize ?? 0), 0);

  const message = `LIMITED EDITION  ·  ${chapter.title.toUpperCase()}  ·  ${totalClaimed}/${totalEdition} CLAIMED  ·  `;
  const repeated = message.repeat(4);

  return (
    <div className="overflow-hidden border-y border-apeax-westar bg-apeax-cararra py-3">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <span className="font-sans text-xs font-medium uppercase tracking-[2px] text-apeax-cod-gray/70">
          {repeated}
        </span>
        <span className="font-sans text-xs font-medium uppercase tracking-[2px] text-apeax-cod-gray/70">
          {repeated}
        </span>
      </div>
    </div>
  );
}