import Image from "next/image";
import { cn } from "@/lib/utils";
import { ProductPlaceholder } from "@/components/shared/product-placeholder";

interface BrandImageProps {
  src?: string;
  alt: string;
  className?: string;
  placeholderVariant?: "dark" | "light";
  sizes?: string;
}

export function BrandImage({
  src,
  alt,
  className,
  placeholderVariant = "dark",
  sizes = "(max-width: 768px) 50vw, 25vw",
}: BrandImageProps) {
  if (!src) {
    return <ProductPlaceholder className={className} variant={placeholderVariant} />;
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}