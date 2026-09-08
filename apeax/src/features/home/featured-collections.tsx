import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { Magnetic } from "@/components/shared/magnetic";
import { SplitText } from "@/components/shared/split-text";

export function FeaturedCollections() {
  return (
    <section className="border-b border-apeax-westar bg-apeax-cararra py-16 md:py-24">
      <Container>
        <Reveal className="flex flex-col items-end gap-8 text-right">
          <h2 className="font-display text-[64px] uppercase leading-[0.9] text-apeax-cod-gray md:text-[135px]">
            <SplitText text="new in" />
          </h2>
          <Magnetic className="inline-block">
            <Link href="/new-in">
              <Button variant="default" className="h-[44px] px-8 uppercase tracking-[1.8px]">
                Explore More
              </Button>
            </Link>
          </Magnetic>
        </Reveal>
      </Container>
    </section>
  );
}