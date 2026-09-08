import { type Chapter } from "@/types/chapter";

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
    imageUrl: "/images/mock-lookbook/Chapter-1-Exceed-Limits.png",
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
    imageUrl: "/images/mock-lookbook/Chapter-2-Unwritten.png",
  },
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.slug === slug);
}

export function getChapterById(id: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.id === id);
}

export function getLatestLiveChapter(): Chapter | undefined {
  return CHAPTERS.find((c) => c.status === "live");
}