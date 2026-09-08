import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { ChapterCard } from "@/components/shared/chapter-card";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { CHAPTERS } from "@/lib/data/chapters";

export const metadata: Metadata = {
  title: "Chapters | APEAX",
  description: "Explore every APEAX chapter — limited drops, each told through an original story.",
};

export default function ChaptersPage() {
  return (
    <>
      <PageHeader title="Chapters" />
      <Container className="py-16">
        <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CHAPTERS.map((chapter) => (
            <RevealItem key={chapter.id}>
              <ChapterCard chapter={chapter} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </>
  );
}