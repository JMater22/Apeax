import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { VerifyCertificate } from "@/components/shared/verify-certificate";
import { getCharterMemberBySerial } from "@/lib/data/charter-members";
import { getProductBySlug } from "@/lib/data/products";
import { getChapterById } from "@/lib/data/chapters";
import { STORY_CHAPTERS } from "@/lib/data/story-chapters";

interface VerifyPageProps {
  params: Promise<{ serial: string }>;
}

export async function generateMetadata({ params }: VerifyPageProps): Promise<Metadata> {
  const { serial } = await params;
  const member = getCharterMemberBySerial(serial.toUpperCase());
  if (!member) return { title: "Verification Not Found | APEAX" };
  const product = getProductBySlug(member.productSlug);
  return {
    title: `Verified: ${product?.name ?? "APEAX Piece"} | APEAX`,
    description: `Edition ${member.editionNumber} — registered and verified authentic.`,
  };
}

export default async function VerifyPage({ params }: VerifyPageProps) {
  const { serial } = await params;
  const member = getCharterMemberBySerial(serial.toUpperCase());

  if (!member) notFound();

  const product = getProductBySlug(member.productSlug);
  const chapter = getChapterById(member.chapterId);

  if (!product || !chapter) notFound();

  const hasStory = Boolean(STORY_CHAPTERS[chapter.slug]);

  return <VerifyCertificate member={member} product={product} chapter={chapter} hasStory={hasStory} />;
}