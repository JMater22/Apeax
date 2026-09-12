"use client";

import { useState } from "react";
import { MOCK_ADDRESSES } from "@/lib/data/mock-account";
import { useRouter } from "next/navigation";
import { addStoredOrder, generateOrderNumber } from "@/lib/orders-storage";
import { type Order } from "@/types/account";

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
import { getProductBySlug } from "@/lib/data/products";
const EMPTY_ADDRESS: ShippingAddress = {
  fullName: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  province: "",
  postalCode: "",
  phone: "",
};
import { buildProductSerial } from "@/lib/serial";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();

  const hasSavedAddresses = MOCK_ADDRESSES.length > 0;
  const [addressMode, setAddressMode] = useState<"saved" | "new">(
    hasSavedAddresses ? "saved" : "new",
  );
  const [selectedSavedId, setSelectedSavedId] = useState(MOCK_ADDRESSES[0]?.id);
  const [address, setAddress] = useState<ShippingAddress>(
    hasSavedAddresses ? MOCK_ADDRESSES[0] : EMPTY_ADDRESS,
  );

  function handleSelectSavedAddress(id: string) {
    const saved = MOCK_ADDRESSES.find((a) => a.id === id);
    if (!saved) return;
    setSelectedSavedId(id);
    setAddress(saved);
  }
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>("standard");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");

  const shippingCost = SHIPPING_RATES[shippingMethod].price;
  const total = subtotal + shippingCost;

  function handlePlaceOrder() {
    // TODO: replace with a real order.service.ts POST once backend exists (Sprint 7)
    const orderNumber = generateOrderNumber();

    const order: Order = {
      id: orderNumber,
      orderNumber,
      placedAt: new Date().toISOString(),
      status: "processing",
      items: items.map((item) => ({
        productName: item.name,
        variantLabel: item.variantLabel,
        quantity: item.quantity,
        price: item.price,
      })),
      total,
    };
    addStoredOrder(order);

    const orderSnapshot = {
      items: items.map((item) => {
        const product = getProductBySlug(item.productSlug);
        const editionSize = product?.editionSize ?? 0;
        const editionNumber =
          editionSize > 0 ? Math.floor(Math.random() * editionSize) + 1 : null;
        const serial =
          product && editionNumber !== null ? buildProductSerial(product, editionNumber) : null;
        return {
          name: item.name,
          variantLabel: item.variantLabel,
          quantity: item.quantity,
          price: item.price,
          editionNumber,
          editionSize,
          serial,
        };
      }),
      total,
    };
    sessionStorage.setItem("apeax_last_order", JSON.stringify(orderSnapshot));
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

          {hasSavedAddresses && (
            <div className="mb-5 flex flex-col gap-2">
              {MOCK_ADDRESSES.map((saved) => (
                <label
                  key={saved.id}
                  className="flex cursor-pointer items-start gap-3 border border-apeax-westar p-4 has-[:checked]:border-apeax-cod-gray has-[:checked]:bg-apeax-cararra"
                >
                  <input
                    type="radio"
                    name="saved-address"
                    checked={addressMode === "saved" && selectedSavedId === saved.id}
                    onChange={() => {
                      setAddressMode("saved");
                      handleSelectSavedAddress(saved.id);
                    }}
                    className="mt-1"
                  />
                  <div>
                    <p className="font-sans text-sm font-medium text-apeax-cod-gray">{saved.label}</p>
                    <p className="mt-0.5 font-sans text-xs text-apeax-cod-gray/60">
                      {saved.fullName} — {saved.addressLine1}, {saved.city}, {saved.province}{" "}
                      {saved.postalCode}
                    </p>
                  </div>
                </label>
              ))}
              <label className="flex cursor-pointer items-center gap-3 border border-apeax-westar p-4 has-[:checked]:border-apeax-cod-gray has-[:checked]:bg-apeax-cararra">
                <input
                  type="radio"
                  name="saved-address"
                  checked={addressMode === "new"}
                  onChange={() => {
                    setAddressMode("new");
                    setAddress(EMPTY_ADDRESS);
                  }}
                />
                <p className="font-sans text-sm font-medium text-apeax-cod-gray">
                  Enter a new address
                </p>
              </label>
            </div>
          )}

          {addressMode === "new" && <ShippingForm value={address} onChange={setAddress} />}
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