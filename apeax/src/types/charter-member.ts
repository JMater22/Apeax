export interface CharterMember {
  id: string;
  chapterId: string;
  productSlug: string;
  displayHandle: string;
  editionNumber: number;
  claimedAt: string;
  isPublic: boolean;
  /** The physical serial printed on this piece's QR tag — links directly to /verify/[serial]. */
  serial: string;
}