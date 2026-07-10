import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function FeaturedCollections() {
  return (
    <section className="border-b border-apeax-westar bg-apeax-cararra py-16 md:py-24">
      <Container className="flex flex-col items-end gap-8 text-right">
        <h2 className="font-display text-[64px] uppercase leading-[0.9] text-apeax-cod-gray md:text-[135px]">
          new in
        </h2>
        <Link href="/new-in">
          <Button variant="default" className="h-[44px] px-8 uppercase tracking-[1.8px]">
            Explore More
          </Button>
        </Link>
      </Container>
    </section>
  );
}