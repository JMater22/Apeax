import { Hero } from "@/features/home/hero";
import { FeaturedCollections } from "@/features/home/featured-collections";
import { FeaturedProducts } from "@/features/home/featured-products";
import { StoryPreview } from "@/features/home/story-preview";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "APEAX — State of Becoming",
  description: "A story-driven streetwear brand. Read the chapter before you wear it. Limited editions, told through an original narrative universe.",
};


export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <FeaturedProducts />
      <StoryPreview />
    </>
  );
}