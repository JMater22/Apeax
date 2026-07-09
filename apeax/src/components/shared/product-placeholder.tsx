import { cn } from "@/lib/utils";

interface ProductPlaceholderProps {
  className?: string;
  variant?: "dark" | "light";
}

export function ProductPlaceholder({ className, variant = "dark" }: ProductPlaceholderProps) {
  const isDark = variant === "dark";
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        isDark ? "bg-apeax-cod-gray" : "bg-apeax-cararra",
        className,
      )}
    >
      <span
        className={cn(
          "font-condensed text-2xl uppercase tracking-[3px]",
          isDark ? "text-white/10" : "text-apeax-cod-gray/10",
        )}
      >
        APEAX
      </span>
    </div>
  );
}