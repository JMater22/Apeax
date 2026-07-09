import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { BrandImage } from "@/components/shared/brand-image";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | APEAX",
  description: "APEAX is not about reaching perfection. It's about becoming someone unforgettable through the process of becoming yourself.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" />

      <Container className="py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl uppercase text-apeax-cod-gray md:text-5xl">
            Our Story
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-apeax-cod-gray/80">
            APEAX is not about reaching perfection. It is about becoming
            someone unforgettable through the process of becoming yourself.
            Every collection is a chapter, every piece a moment in an
            unfolding narrative — worn, not just bought.
          </p>
        </div>

        <div className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-sm">
          <BrandImage
            src="/images/mock-lookbook/Story-Preview.png"
            alt="APEAX brand story"
            className="h-full w-full"
            sizes="(max-width: 768px) 90vw, 768px"
          />
        </div>

        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <span className="font-sans text-xs uppercase tracking-[2px] text-apeax-cod-gray/50">
              Mission
            </span>
            <h2 className="mt-2 font-condensed text-2xl uppercase tracking-wide text-apeax-cod-gray">
              Mission
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-apeax-cod-gray/70">
              To create merchandise that carries meaning — every piece
              limited, every drop a chapter in a larger story, built for those
              who see clothing as a statement of growth, not just style.
            </p>
          </div>

          <div>
            <span className="font-sans text-xs uppercase tracking-[2px] text-apeax-cod-gray/50">
              Vision
            </span>
            <h2 className="mt-2 font-condensed text-2xl uppercase tracking-wide text-apeax-cod-gray">
              Vision
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-apeax-cod-gray/70">
              To build a universe where fashion and storytelling are
              inseparable — where every APEAX owner holds a verified piece of
              a story still being written.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}