import { OrderStatusBadge } from "@/components/shared/order-status-badge";
import { MOCK_ORDERS } from "@/lib/data/mock-account";
import { formatCurrency } from "@/lib/format-currency";

export default function OrderHistoryPage() {
  return (
    <div>
      <h2 className="mb-6 font-condensed text-lg uppercase tracking-wide text-apeax-cod-gray">
        Order History
      </h2>

      {MOCK_ORDERS.length === 0 ? (
        <p className="font-body text-apeax-cod-gray/60">You haven&apos;t placed any orders yet.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {MOCK_ORDERS.map((order) => (
            <div key={order.id} className="border border-apeax-westar p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-sans text-sm font-medium text-apeax-cod-gray">
                    {order.orderNumber}
                  </p>
                  <p className="font-sans text-xs text-apeax-cod-gray/60">
                    Placed {new Date(order.placedAt).toLocaleDateString("en-PH", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <OrderStatusBadge status={order.status} />
              </div>

              <ul className="mt-4 flex flex-col gap-1 border-t border-apeax-westar pt-4">
                {order.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between font-sans text-xs text-apeax-cod-gray/70"
                  >
                    <span>
                      {item.productName} {item.variantLabel && `(${item.variantLabel})`} ×{" "}
                      {item.quantity}
                    </span>
                    <span>{formatCurrency(item.price * item.quantity)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex justify-between border-t border-apeax-westar pt-4 font-sans text-sm font-medium text-apeax-cod-gray">
                <span>Total</span>
                <span>{formatCurrency(order.total)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}