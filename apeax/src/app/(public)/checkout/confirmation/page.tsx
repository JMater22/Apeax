import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function OrderConfirmationPage() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
      <CheckCircle2 size={48} className="text-apeax-cod-gray" />
      <h1 className="mt-6 font-condensed text-3xl uppercase tracking-wide text-apeax-cod-gray">
        Order Confirmed
      </h1>
      <p className="mt-2 max-w-md font-body text-apeax-cod-gray/70">
        Thank you for becoming part of the story. A confirmation will be sent
        to your email once order tracking is connected.
      </p>
      <Link href="/shop" className="mt-8">
        <Button variant="default" className="font-sans text-xs uppercase tracking-wide">
          Continue Shopping
        </Button>
      </Link>
    </Container>
  );
}