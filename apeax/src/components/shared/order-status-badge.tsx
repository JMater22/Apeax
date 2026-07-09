import { Badge } from "@/components/ui/badge";
import { type OrderStatus } from "@/types/account";

const STATUS_CONFIG: Record<OrderStatus, { label: string; variant: "default" | "secondary" | "destructive" }> = {
  processing: { label: "Processing", variant: "secondary" },
  shipped: { label: "Shipped", variant: "default" },
  delivered: { label: "Delivered", variant: "default" },
  cancelled: { label: "Cancelled", variant: "destructive" },
};

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const config = STATUS_CONFIG[status];
  return (
    <Badge variant={config.variant} className="font-sans text-[10px] uppercase tracking-wide">
      {config.label}
    </Badge>
  );
}