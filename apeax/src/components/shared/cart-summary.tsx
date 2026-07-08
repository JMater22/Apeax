import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format-currency";

interface CartSummaryProps {
  subtotal: number;
}

export function CartSummary({ subtotal }: CartSummaryProps) {
  return (
    <div className="border border-apeax-westar p-6">
      <h2 className="font-condensed text-lg uppercase tracking-wide text-apeax-cod-gray">
        Order Summary
      </h2>

      <div className="mt-4 flex justify-between font-sans text-sm text-apeax-cod-gray/70">
        <span>Subtotal</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>
      <div className="mt-2 flex justify-between font-sans text-sm text-apeax-cod-gray/70">
        <span>Shipping</span>
        <span>Calculated at checkout</span>
      </div>

      <div className="mt-4 flex justify-between border-t border-apeax-westar pt-4 font-sans text-base font-medium text-apeax-cod-gray">
        <span>Total</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>

      <Link href="/checkout" className="mt-6 block">
        <Button variant="default" className="h-11 w-full font-sans text-xs uppercase tracking-wide">
          Proceed to Checkout
        </Button>
      </Link>
    </div>
  );
}