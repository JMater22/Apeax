import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/format-currency";
import { type Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className={cn("relative aspect-[3/4] w-full rounded-sm bg-apeax-cararra", product.placeholderColor)}>
        {product.isSoldOut && (
          <div className="absolute left-2 top-2">
            <Badge variant="destructive" className="font-sans text-[10px] uppercase tracking-wide">
              Sold Out
            </Badge>
          </div>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="block font-sans text-sm font-medium text-apeax-cod-gray">
            {product.name}
          </span>
          {product.editionSize && (
            <span className="font-sans text-xs text-apeax-cod-gray/60">
              {product.unitsSold ?? 0} / {product.editionSize} claimed
            </span>
          )}
        </div>
        <span className="font-condensed text-base text-apeax-cod-gray/80">
          {formatCurrency(product.price)}
        </span>
      </div>
    </Link>
  );
}