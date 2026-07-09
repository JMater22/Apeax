import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";

export function StoryPreview() {
  return (
    <section className="overflow-hidden border-t-2 border-apeax-westar bg-background">
      <div className="flex items-center justify-center py-20 md:py-32">
        <h2 className="text-center font-display text-[64px] uppercase leading-none text-apeax-cod-gray md:text-[170px]">
          State of
          <br />
          Becoming
        </h2>
      </div>

      <Container className="flex flex-col gap-24 pb-20 md:gap-32 md:pb-32">
        {/* About Us — image rotated and offset left, text sits right, matching the editorial asymmetry from the Figma spread */}
        <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div className="relative aspect-[529/680] w-full max-w-[460px] justify-self-center md:justify-self-start">
            <span className="pointer-events-none absolute -left-6 -top-10 select-none font-display text-[140px] leading-none text-apeax-westar/60 md:-left-10 md:-top-16 md:text-[220px]">
              01
            </span>
            <div className="relative h-full w-full rotate-[6deg] overflow-hidden rounded-sm shadow-xl">
              <Image
                src="/images/mock-lookbook/Story-Preview.png"
                alt="APEAX About Us"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:pl-6">
            <span className="font-sans text-xs uppercase tracking-[2px] text-apeax-cod-gray/50">
              01 — About Us
            </span>
            <h3 className="mt-2 font-display text-[36px] leading-[1.05] text-apeax-cod-gray md:text-[44px]">
              About Us
            </h3>
            <p className="mt-6 max-w-md font-body text-[20px] leading-[28px] text-apeax-cod-gray/80">
              APEAX is not about reaching perfection. It is about becoming
              someone unforgettable through the process of becoming yourself.
            </p>
          </div>
        </div>

        {/* Our Story — mirrored: text left, smaller image offset right, with the story CTA */}
        <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_0.8fr] md:gap-16">
          <div className="order-2 md:order-1 md:pr-6">
            <span className="font-sans text-xs uppercase tracking-[2px] text-apeax-cod-gray/50">
              02 — Our Story
            </span>
            <h3 className="mt-2 font-display text-[36px] leading-[1.05] text-apeax-cod-gray md:text-[44px]">
              Our Story
            </h3>
            <p className="mt-6 max-w-md font-body text-[20px] leading-[28px] text-apeax-cod-gray/80">
              Every collection is a chapter. Every chapter, an act of
              becoming. Step into the story before you wear it.
            </p>
            <Link
              href="/chapters/chapter-one-exceed-limits/story/act-1"
              className="mt-8 inline-block bg-apeax-cod-gray px-8 py-4 font-sans text-xs font-bold uppercase tracking-[1.8px] text-white hover:opacity-90"
            >
              Read Our Story
            </Link>
          </div>
          <div className="relative order-1 aspect-[218/365] w-full max-w-[300px] justify-self-center md:order-2 md:-mt-10 md:justify-self-end">
            <span className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[140px] leading-none text-apeax-westar/60 md:-right-8 md:-top-16 md:text-[220px]">
              02
            </span>
            <div className="relative h-full w-full -rotate-[4deg] overflow-hidden rounded-sm shadow-xl">
              <Image
                src="/images/mock-lookbook/Story-Preview.png"
                alt="APEAX Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t-2 border-apeax-westar bg-apeax-cod-gray py-24 text-center md:py-32">
        <p className="font-display text-[48px] uppercase leading-none text-white md:text-[150px]">
          Launch
          <br />
          in 2026
        </p>
      </div>
    </section>
  );
}