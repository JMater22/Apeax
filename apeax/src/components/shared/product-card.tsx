import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/format-currency";
import { type Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className={cn("relative aspect-[3/4] w-full rounded-lg bg-muted", product.placeholderColor)}>
        {product.isSoldOut && (
          <div className="absolute left-2 top-2">
            <Badge variant="destructive">Sold Out</Badge>
          </div>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="block text-sm font-medium text-foreground">{product.name}</span>
          {product.editionSize && (
            <span className="text-xs text-muted-foreground">
              {product.unitsSold ?? 0} / {product.editionSize} claimed
            </span>
          )}
        </div>
        <span className="font-condensed text-base text-muted-foreground">
          {formatCurrency(product.price)}
        </span>
      </div>
    </Link>
  );
}