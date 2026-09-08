import { Badge } from "@/components/ui/badge";
import { type ChapterStatus } from "@/types/chapter";

const STATUS_CONFIG: Record<ChapterStatus, { label: string; variant: "default" | "secondary" | "destructive" }> = {
  live: { label: "New", variant: "default" },
  upcoming: { label: "Coming Soon", variant: "secondary" },
  "sold-out": { label: "Fully Claimed", variant: "destructive" },
};

export function ChapterStatusBadge({ status }: { status: ChapterStatus }) {
  const config = STATUS_CONFIG[status];
  return (
    <Badge variant={config.variant} className="font-sans text-[10px] uppercase tracking-wide">
      {config.label}
    </Badge>
  );
}