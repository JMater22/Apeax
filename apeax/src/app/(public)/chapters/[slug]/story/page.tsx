import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ScrollStory } from "@/components/shared/scroll-story";
import { STORY_CHAPTERS } from "@/lib/data/story-chapters";
import { getChapterBySlug } from "@/lib/data/chapters";

interface StoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) return { title: "Story Not Found | APEAX" };
  return {
    title: `The Story — ${chapter.title} | APEAX`,
    description: chapter.storyTeaser,
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = STORY_CHAPTERS[slug];
  const chapter = getChapterBySlug(slug);

  if (!story || !chapter) notFound();

  return <ScrollStory story={story} chapter={chapter} />;
}