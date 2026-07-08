import Image from "next/image";
import { Container } from "@/components/layout/container";

export function StoryPreview() {
  return (
    <section className="border-t-2 border-apeax-westar bg-background">
      <div className="flex items-center justify-center py-20 md:py-32">
        <h2 className="text-center font-display text-[64px] uppercase leading-none text-apeax-cod-gray md:text-[170px]">
          State of
          <br />
          Becoming
        </h2>
      </div>

      <Container className="flex flex-col gap-16 pb-20 md:gap-24 md:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[529/680] w-full max-w-[480px] justify-self-center overflow-hidden rounded-sm">
            <Image
              src="/images/mock-lookbook/Story-Preview.png"
              alt="APEAX About Us"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="mb-6 font-display text-[32px] text-apeax-cod-gray">About Us</h3>
            <p className="font-body text-[24px] leading-[28px] text-apeax-cod-gray">
              APEAX is not about reaching perfection. It is about becoming
              someone unforgettable through the process of becoming yourself.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <h3 className="mb-6 font-display text-[32px] text-apeax-cod-gray">Our Story</h3>
            <p className="font-body text-[24px] leading-[28px] text-apeax-cod-gray">
              APEAX is not about reaching perfection. It is about becoming
              someone unforgettable through the process of becoming yourself.
            </p>
          </div>
          <div className="relative order-1 aspect-[218/365] w-full max-w-[300px] justify-self-center overflow-hidden rounded-sm md:order-2">
            <Image
              src="/images/mock-lookbook/Story-Preview.png"
              alt="APEAX Our Story"
              fill
              className="object-cover"
            />
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