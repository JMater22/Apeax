import { type CharterMember } from "@/types/charter-member";

// TODO: replace with a real query against order records once the backend
// exists (Sprint 7). Only members who checked "Display me as a Charter
// Member" at checkout should ever appear here.
export const CHARTER_MEMBERS: CharterMember[] = [
  { id: "1", chapterId: "1", productSlug: "exceed-limits-tee", displayHandle: "Marco D.", editionNumber: 1, claimedAt: "2026-06-01", isPublic: true, serial: "APEAX-CH1-TEE-001" },
  { id: "2", chapterId: "1", productSlug: "exceed-limits-hoodie", displayHandle: "Kai S.", editionNumber: 1, claimedAt: "2026-06-01", isPublic: true, serial: "APEAX-CH1-HOODIE-001" },
  { id: "3", chapterId: "1", productSlug: "exceed-limits-cap", displayHandle: "Reign V.", editionNumber: 1, claimedAt: "2026-06-01", isPublic: true, serial: "APEAX-CH1-CAP-001" },
  { id: "4", chapterId: "1", productSlug: "exceed-limits-tee", displayHandle: "Elias Y.", editionNumber: 2, claimedAt: "2026-06-01", isPublic: true, serial: "APEAX-CH1-TEE-002" },
  { id: "5", chapterId: "1", productSlug: "exceed-limits-hoodie", displayHandle: "Anya M.", editionNumber: 2, claimedAt: "2026-06-01", isPublic: true, serial: "APEAX-CH1-HOODIE-002" },
  { id: "6", chapterId: "1", productSlug: "ascent-tee", displayHandle: "Diego R.", editionNumber: 1, claimedAt: "2026-06-01", isPublic: true, serial: "APEAX-CH1-ASCENTTEE-001" },
  { id: "7", chapterId: "1", productSlug: "ascent-hoodie", displayHandle: "Nadia P.", editionNumber: 1, claimedAt: "2026-06-02", isPublic: true, serial: "APEAX-CH1-ASCENTHOODIE-001" },
  { id: "8", chapterId: "1", productSlug: "exceed-limits-cap", displayHandle: "Leon T.", editionNumber: 2, claimedAt: "2026-06-02", isPublic: true, serial: "APEAX-CH1-CAP-002" },
  { id: "9", chapterId: "1", productSlug: "becoming-tote", displayHandle: "Sofia C.", editionNumber: 1, claimedAt: "2026-06-02", isPublic: true, serial: "APEAX-CH1-TOTE-001" },
  { id: "10", chapterId: "1", productSlug: "becoming-beanie", displayHandle: "Julian K.", editionNumber: 1, claimedAt: "2026-06-02", isPublic: true, serial: "APEAX-CH1-BEANIE-001" },
  { id: "11", chapterId: "1", productSlug: "exceed-limits-tee", displayHandle: "Mika L.", editionNumber: 3, claimedAt: "2026-06-03", isPublic: true, serial: "APEAX-CH1-TEE-003" },
  { id: "12", chapterId: "1", productSlug: "ascent-tee", displayHandle: "Ronan B.", editionNumber: 2, claimedAt: "2026-06-03", isPublic: true, serial: "APEAX-CH1-ASCENTTEE-002" },
  { id: "13", chapterId: "1", productSlug: "exceed-limits-hoodie", displayHandle: "Isla F.", editionNumber: 3, claimedAt: "2026-06-04", isPublic: true, serial: "APEAX-CH1-HOODIE-003" },
  { id: "14", chapterId: "1", productSlug: "ascent-hoodie", displayHandle: "Theo N.", editionNumber: 2, claimedAt: "2026-06-05", isPublic: true, serial: "APEAX-CH1-ASCENTHOODIE-002" },
  { id: "15", chapterId: "1", productSlug: "exceed-limits-cap", displayHandle: "Vera Q.", editionNumber: 3, claimedAt: "2026-06-05", isPublic: true, serial: "APEAX-CH1-CAP-003" },
];

export function getCharterMembersByChapter(chapterId: string): CharterMember[] {
  return CHARTER_MEMBERS.filter((m) => m.chapterId === chapterId && m.isPublic).sort(
    (a, b) => new Date(a.claimedAt).getTime() - new Date(b.claimedAt).getTime(),
  );
}

export function getAllCharterMembers(): CharterMember[] {
  return CHARTER_MEMBERS.filter((m) => m.isPublic);
}

export function getUniqueCharterProductSlugs(): string[] {
  return Array.from(new Set(CHARTER_MEMBERS.filter((m) => m.isPublic).map((m) => m.productSlug)));
}

export function getCharterMemberBySerial(serial: string): CharterMember | undefined {
  return CHARTER_MEMBERS.find((m) => m.serial === serial && m.isPublic);
}