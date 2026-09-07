export interface CharterMember {
  id: string;
  chapterId: string;
  productSlug: string;
  /** Pseudonymous by design — first name + last initial, chosen at opt-in. Never full name or location. */
  displayHandle: string;
  editionNumber: number;
  claimedAt: string;
  /** Member must explicitly opt in at checkout to appear here — never automatic. */
  isPublic: boolean;
}