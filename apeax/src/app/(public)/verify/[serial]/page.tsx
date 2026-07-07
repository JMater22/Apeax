import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { type AuthenticityRecord } from "@/types/authenticity";

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
    <Container className="flex min-h-[70vh] flex-col items-center justify-center bg-apeax-cararra py-16 text-center">
      <Badge
        variant={isClaimed ? "default" : "secondary"}
        className="mb-6 font-sans text-[10px] uppercase tracking-wide"
      >
        {isClaimed ? "Verified Authentic" : "Unclaimed"}
      </Badge>

      <h1 className="font-condensed text-3xl uppercase tracking-wide text-apeax-cod-gray">
        {record.productName}
      </h1>
      <p className="mt-1 font-sans text-sm text-apeax-cod-gray/60">{record.chapterTitle}</p>

      <div className="mt-8 flex flex-col gap-2 font-sans text-sm">
        <p className="text-apeax-cod-gray">
          Edition{" "}
          <span className="font-medium">
            {record.editionNumber} / {record.editionSize}
          </span>
        </p>
        <p className="text-apeax-cod-gray">
          {isClaimed ? (
            <>Registered to <span className="font-medium">{record.ownerName}</span></>
          ) : (
            "This item has not been claimed by its owner yet."
          )}
        </p>
        <p className="font-mono text-xs text-apeax-cod-gray/50">{record.serial}</p>
      </div>
    </Container>
  );
}