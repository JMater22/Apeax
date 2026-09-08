import type { Metadata } from "next";
import { Hero } from "@/features/home/hero";
import { ScarcityTicker } from "@/components/shared/scarcity-ticker";
import { FeaturedCollections } from "@/features/home/featured-collections";
import { FeaturedProducts } from "@/features/home/featured-products";
import { FeaturedChapterSpotlight } from "@/features/home/featured-chapter-spotlight";
import { CharterMembersTeaser } from "@/features/home/charter-members-teaser";
import { StoryPreview } from "@/features/home/story-preview";

export const metadata: Metadata = {
  title: "APEAX — State of Becoming",
  description:
    "A story-driven streetwear brand. Read the chapter before you wear it. Limited editions, told through an original narrative universe.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScarcityTicker />
      <FeaturedCollections />
      <FeaturedProducts />
      <FeaturedChapterSpotlight />
      <CharterMembersTeaser />
      <StoryPreview />
    </>
  );
}