import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { CharterMemberPlaque } from "@/components/shared/charter-member-plaque";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { CHAPTERS } from "@/lib/data/chapters";
import { getCharterMembersByChapter } from "@/lib/data/charter-members";

export const metadata: Metadata = {
  title: "Charter Members | APEAX",
  description: "The first to claim each chapter — recognized, permanently.",
};

interface CharterMembersPageProps {
  searchParams: Promise<{ chapter?: string }>;
}

export default async function CharterMembersPage({ searchParams }: CharterMembersPageProps) {
  const { chapter: chapterFilter } = await searchParams;
  const chaptersToShow = chapterFilter
    ? CHAPTERS.filter((c) => c.slug === chapterFilter)
    : CHAPTERS;

  return (
    <>
      <PageHeader title="Charter Members" />

      <Container className="py-16">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="font-display text-3xl uppercase text-apeax-cod-gray md:text-4xl">
            The First to Claim
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-apeax-cod-gray/70">
            Every chapter begins with a small group who claimed a piece before
            the rest of the story was even written. This is their permanent
            record — recognized, not advertised. Display names are chosen by
            each member; no personal information is shown.
          </p>
        </Reveal>

        {chaptersToShow.map((chapter) => {
          const members = getCharterMembersByChapter(chapter.id);
          if (members.length === 0) return null;

          return (
            <div key={chapter.id} className="mb-20 last:mb-0">
              <Reveal className="mb-8 flex items-baseline justify-between border-b border-apeax-westar pb-4">
                <div>
                  <p className="font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/50">
                    {chapter.number}
                  </p>
                  <h2 className="font-condensed text-2xl uppercase tracking-wide text-apeax-cod-gray">
                    {chapter.title}
                  </h2>
                </div>
                <p className="font-sans text-xs text-apeax-cod-gray/40">
                  {members.length} Charter Members
                </p>
              </Reveal>

              <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member, i) => (
                  <RevealItem key={member.id}>
                    <CharterMemberPlaque member={member} rank={i + 1} />
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          );
        })}
      </Container>
    </>
  );
}