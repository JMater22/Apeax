import { cn } from "@/lib/utils";

interface BrandAsteriskProps {
  className?: string;
}

// Subtle decorative brand mark — echoes the asterisk motif from the Figma
// hero graphic. Meant to sit behind content at low opacity, not as a focal
// element. Uses currentColor so it inherits text color + can be tinted via className.
export function BrandAsterisk({ className }: BrandAsteriskProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <g fill="currentColor">
        <polygon points="100,0 115,85 200,100 115,115 100,200 85,115 0,100 85,85" />
        <polygon
          points="100,20 108,92 180,100 108,108 100,180 92,108 20,100 92,92"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}