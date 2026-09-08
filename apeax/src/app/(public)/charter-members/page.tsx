import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { CharterMemberPlaque } from "@/components/shared/charter-member-plaque";
import { CharterFilterBar } from "@/components/shared/charter-filter-bar";
import { Reveal } from "@/components/shared/reveal";
import { getAllCharterMembers, getUniqueCharterProductSlugs } from "@/lib/data/charter-members";
import { getChapterBySlug } from "@/lib/data/chapters";
import { type CharterMember } from "@/types/charter-member";

export const metadata: Metadata = {
  title: "Charter Members | APEAX",
  description: "The first to claim each chapter — recognized, permanently.",
};

type CharterSort = "newest" | "oldest" | "az" | "edition";

interface CharterMembersPageProps {
  searchParams: Promise<{ chapter?: string; product?: string; sort?: string; q?: string }>;
}

function sortMembers(members: CharterMember[], sort: CharterSort): CharterMember[] {
  const sorted = [...members];
  switch (sort) {
    case "oldest":
      return sorted.sort((a, b) => new Date(a.claimedAt).getTime() - new Date(b.claimedAt).getTime());
    case "az":
      return sorted.sort((a, b) => a.displayHandle.localeCompare(b.displayHandle));
    case "edition":
      return sorted.sort((a, b) => a.editionNumber - b.editionNumber);
    case "newest":
    default:
      return sorted.sort((a, b) => new Date(b.claimedAt).getTime() - new Date(a.claimedAt).getTime());
  }
}

export default async function CharterMembersPage({ searchParams }: CharterMembersPageProps) {
  const { chapter: chapterSlug, product: productSlug, sort, q } = await searchParams;
  const activeSort = (sort as CharterSort) ?? "newest";
  const chapter = chapterSlug ? getChapterBySlug(chapterSlug) : undefined;

  let members = getAllCharterMembers();

  if (chapter) {
    members = members.filter((m) => m.chapterId === chapter.id);
  }
  if (productSlug) {
    members = members.filter((m) => m.productSlug === productSlug);
  }
  if (q) {
    const query = q.toLowerCase();
    members = members.filter((m) => m.displayHandle.toLowerCase().includes(query));
  }

  members = sortMembers(members, activeSort);
  const productSlugs = getUniqueCharterProductSlugs();

  return (
    <>
      <PageHeader title="Charter Members" />
      <Container className="py-16">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-display text-3xl uppercase text-apeax-cod-gray md:text-4xl">
            The First to Claim
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-apeax-cod-gray/70">
            Every chapter begins with a small group who claimed a piece
            before the rest of the story was even written. This is their
            permanent record — recognized, not advertised. Tap any name to
            reveal its story. Display names are chosen by each member; no
            personal information is shown.
          </p>
        </Reveal>

        <CharterFilterBar productSlugs={productSlugs} />

        <p className="mb-6 font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/40">
          {members.length} Charter Member{members.length === 1 ? "" : "s"}
        </p>

        {members.length === 0 ? (
          <p className="py-16 text-center font-body text-apeax-cod-gray/60">
            No Charter Members match these filters.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, i) => (
              <CharterMemberPlaque key={member.id} member={member} rank={i + 1} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}