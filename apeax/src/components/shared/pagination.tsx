  import Link from "next/link";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  buildHref: (page: number) => string;
}

export function Pagination({ currentPage, totalPages, buildHref }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2">
      {pages.map((page) => (
        <Link
          key={page}
          href={buildHref(page)}
          className={cn(
            "flex h-9 w-9 items-center justify-center font-sans text-sm",
            page === currentPage
              ? "bg-apeax-cod-gray text-white"
              : "text-apeax-cod-gray/60 hover:text-apeax-cod-gray",
          )}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </Link>
      ))}
    </nav>
  );
}