export interface AuthenticityRecord {
  serial: string;              // "APEAX-CH1-EXCEED-042"
  productName: string;
  chapterTitle: string;
  editionNumber: number;
  editionSize: number;
  ownerName: string | null;    // null = unclaimed
  claimedAt: string | null;
}