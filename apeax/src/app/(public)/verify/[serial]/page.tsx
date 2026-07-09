import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { type AuthenticityRecord } from "@/types/authenticity";

// TODO: replace with real lookup from services/authenticity.service.ts (Sprint 7/8)
const MOCK_RECORDS: Record<string, AuthenticityRecord> = {
  "APEAX-CH1-EXCEED-042": {
    serial: "APEAX-CH1-EXCEED-042",
    productName: "Exceed Limits Hoodie",
    chapterTitle: "Chapter One: Exceed Limits",
    editionNumber: 42,
    editionSize: 300,
    ownerName: "Marco D.",
    claimedAt: "2026-06-15",
  },
  "APEAX-CH1-EXCEED-999": {
    serial: "APEAX-CH1-EXCEED-999",
    productName: "Exceed Limits Hoodie",
    chapterTitle: "Chapter One: Exceed Limits",
    editionNumber: 999,
    editionSize: 300,
    ownerName: null,
    claimedAt: null,
  },
};

interface VerifyPageProps {
  params: Promise<{ serial: string }>;
}

export default async function VerifyPage({ params }: VerifyPageProps) {
  const { serial } = await params;
  const record = MOCK_RECORDS[serial];

  if (!record) notFound();

  const isClaimed = Boolean(record.ownerName);

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
      <Badge variant={isClaimed ? "default" : "secondary"} className="mb-6">
        {isClaimed ? "Verified Authentic" : "Unclaimed"}
      </Badge>

      <h1 className="font-condensed text-3xl uppercase text-foreground">{record.productName}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{record.chapterTitle}</p>

      <div className="mt-8 flex flex-col gap-2 text-sm">
        <p className="text-foreground">
          Edition{" "}
          <span className="font-medium">
            {record.editionNumber} / {record.editionSize}
          </span>
        </p>
        <p className="text-foreground">
          {isClaimed ? (
            <>Registered to <span className="font-medium">{record.ownerName}</span></>
          ) : (
            "This item has not been claimed by its owner yet."
          )}
        </p>
        <p className="font-mono text-xs text-muted-foreground">{record.serial}</p>
      </div>
    </Container>
  );
}