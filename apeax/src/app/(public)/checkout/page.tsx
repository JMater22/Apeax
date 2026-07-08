"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ShippingForm } from "@/components/shared/shipping-form";
import { ShippingMethodSelector } from "@/components/shared/shipping-method-selector";
import { PaymentMethodSelector } from "@/components/shared/payment-method-selector";
import { useCart } from "@/hooks/use-cart";
import { formatCurrency } from "@/lib/format-currency";
import {
  SHIPPING_RATES,
  type ShippingAddress,
  type ShippingMethod,
  type PaymentMethod,
} from "@/types/checkout";

const EMPTY_ADDRESS: ShippingAddress = {
  fullName: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  province: "",
  postalCode: "",
  phone: "",
};

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();

  const [address, setAddress] = useState<ShippingAddress>(EMPTY_ADDRESS);
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>("standard");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");

  const shippingCost = SHIPPING_RATES[shippingMethod].price;
  const total = subtotal + shippingCost;

  function handlePlaceOrder() {
    // TODO: replace with a real order.service.ts POST once backend exists (Sprint 7)
    clearCart();
    router.push("/checkout/confirmation");
  }

  if (items.length === 0) {
    return (
      <>
        <PageHeader title="Checkout" />
        <Container className="py-16 text-center">
          <p className="font-body text-apeax-cod-gray/60">
            Your cart is empty — add something before checking out.
          </p>
        </Container>
      </>
    );
  }

  return (
    <>
      <PageHeader title="Checkout" />
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-10 md:col-span-2">
            <section>
              <h2 className="mb-4 font-condensed text-lg uppercase tracking-wide text-apeax-cod-gray">
                Shipping Address
              </h2>
              <p className="mb-4 font-sans text-xs text-apeax-cod-gray/50">
                Billing address will match shipping address.
              </p>
              <ShippingForm value={address} onChange={setAddress} />
            </section>

            <section>
              <h2 className="mb-4 font-condensed text-lg uppercase tracking-wide text-apeax-cod-gray">
                Shipping Method
              </h2>
              <ShippingMethodSelector value={shippingMethod} onChange={setShippingMethod} />
            </section>

            <section>
              <h2 className="mb-4 font-condensed text-lg uppercase tracking-wide text-apeax-cod-gray">
                Payment Method
              </h2>
              <PaymentMethodSelector value={paymentMethod} onChange={setPaymentMethod} />
              <p className="mt-3 font-sans text-xs text-apeax-cod-gray/50">
                Payment processing is not yet connected — this is a UI preview only.
              </p>
            </section>
          </div>

          <div>
            <div className="border border-apeax-westar p-6">
              <h2 className="font-condensed text-lg uppercase tracking-wide text-apeax-cod-gray">
                Order Summary
              </h2>

              <ul className="mt-4 flex flex-col gap-2">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between font-sans text-xs text-apeax-cod-gray/70"
                  >
                    <span>
                      {item.name} {item.variantLabel && `(${item.variantLabel})`} × {item.quantity}
                    </span>
                    <span>{formatCurrency(item.price * item.quantity)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex justify-between border-t border-apeax-westar pt-4 font-sans text-sm text-apeax-cod-gray/70">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="mt-2 flex justify-between font-sans text-sm text-apeax-cod-gray/70">
                <span>Shipping</span>
                <span>{formatCurrency(shippingCost)}</span>
              </div>
              <div className="mt-4 flex justify-between border-t border-apeax-westar pt-4 font-sans text-base font-medium text-apeax-cod-gray">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>

              <Button
                variant="default"
                className="mt-6 h-11 w-full font-sans text-xs uppercase tracking-wide"
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}