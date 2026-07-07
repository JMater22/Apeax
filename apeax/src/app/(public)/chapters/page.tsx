import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { ChapterCard } from "@/components/shared/chapter-card";
import { type Chapter } from "@/types/chapter";

// TODO: replace with a real fetch from services/chapter.service.ts (Sprint 7)
const CHAPTERS: Chapter[] = [
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

export default function ChaptersPage() {
  return (
    <>
      <PageHeader title="Chapters" />
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CHAPTERS.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </Container>
    </>
  );
}