import { notFound } from "next/navigation";
import { ScrollStory } from "@/components/shared/scroll-story";
import { STORY_CHAPTERS } from "@/lib/data/story-chapters";

interface StoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = STORY_CHAPTERS[slug];

  if (!story) notFound();

  return <ScrollStory story={story} chapterSlug={slug} />;
}