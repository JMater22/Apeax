import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { ChapterCard } from "@/components/shared/chapter-card"
import { CHAPTERS } from "@/lib/data/chapters";
// TODO: replace with a real fetch from services/chapter.service.ts (Sprint 7)

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