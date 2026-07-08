import { Hero } from "@/features/home/hero";
import { FeaturedCollections } from "@/features/home/featured-collections";
import { FeaturedProducts } from "@/features/home/featured-products";
import { StoryPreview } from "@/features/home/story-preview";

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