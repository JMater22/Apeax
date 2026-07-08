import { type Chapter } from "@/types/chapter";

// TODO: replace with a real fetch from services/chapter.service.ts (Sprint 7)
export const CHAPTERS: Chapter[] = [
  {
    id: "1",
    slug: "chapter-one-exceed-limits",
    number: "Chapter One",
    title: "Exceed Limits",
    storyTeaser: "The first act of becoming — where growth begins with breaking your own ceiling.",
    releaseDate: "2026-06-01",
    status: "live",
    placeholderColor: "bg-apeax-cod-gray",
  },
  {
    id: "2",
    slug: "chapter-two-unwritten",
    number: "Chapter Two",
    title: "Unwritten",
    storyTeaser: "A story not yet told — the next chapter arrives soon.",
    releaseDate: "2026-09-01",
    status: "upcoming",
    placeholderColor: "bg-muted",
  },
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.slug === slug);
}

export function getLatestLiveChapter(): Chapter | undefined {
  return CHAPTERS.find((c) => c.status === "live");
}