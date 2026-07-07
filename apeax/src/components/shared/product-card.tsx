import Link from "next/link";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/format-currency";
import { type Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div
        className={cn(
          "aspect-[3/4] w-full rounded-lg bg-muted",
          product.placeholderColor,
        )}
      />
      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{product.name}</span>
        <span className="font-condensed text-base text-muted-foreground">
          {formatCurrency(product.price)}
        </span>
      </div>
    </Link>
  );
}