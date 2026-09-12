"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { CheckCircle2, Link2, ScanLine } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BrandImage } from "@/components/shared/brand-image";
import { formatCurrency } from "@/lib/format-currency";
import { type CharterMember } from "@/types/charter-member";
import { type Product } from "@/types/product";
import { type Chapter } from "@/types/chapter";

interface VerifyCertificateProps {
  member: CharterMember;
  product: Product;
  chapter: Chapter;
  hasStory: boolean;
}

export function VerifyCertificate({ member, product, chapter, hasStory }: VerifyCertificateProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isVerifying, setIsVerifying] = useState(!shouldReduceMotion);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timeout = setTimeout(() => setIsVerifying(false), 900);
    return () => clearTimeout(timeout);
  }, [shouldReduceMotion]);

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const dateLabel = new Date(member.claimedAt).toLocaleDateString("en-PH", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const percent = product.editionSize ? (member.editionNumber / product.editionSize) * 100 : 0;

  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-apeax-cararra px-6 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor, currentColor 1px, transparent 1px, transparent 12px)",
          color: "#0a0a0a",
        }}
      />

      <div className="relative w-full max-w-md border border-apeax-cod-gray/15 bg-white p-8 shadow-xl md:p-10">
        {isVerifying ? (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-4 py-12 text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="h-8 w-8 rounded-full border-2 border-apeax-cod-gray/20 border-t-apeax-cod-gray"
            />
            <p className="font-sans text-xs uppercase tracking-[2px] text-apeax-cod-gray/50">
              Authenticating…
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={18} className="text-apeax-cod-gray" />
              <Badge variant="default" className="font-sans text-[10px] uppercase tracking-wide">
                Verified Authentic
              </Badge>
            </div>

            <div className="relative mx-auto mt-6 aspect-square w-32 overflow-hidden rounded-sm shadow-md">
              <BrandImage src={product.imageUrl} alt={product.name} className="h-full w-full" sizes="128px" />
            </div>

            <div className="mt-6 text-center">
              <h1 className="font-condensed text-2xl uppercase tracking-wide text-apeax-cod-gray">
                {product.name}
              </h1>
              <p className="mt-1 font-sans text-sm text-apeax-cod-gray/60">
                {chapter.number}: {chapter.title}
              </p>
              <p className="mt-1 font-condensed text-lg text-apeax-cod-gray/70">
                {formatCurrency(product.price)}
              </p>
            </div>

            <div className="mt-6 border-t border-apeax-westar pt-5">
              <div className="flex items-baseline justify-between font-sans text-xs text-apeax-cod-gray">
                <span>Edition</span>
                <span className="font-medium">
                  {member.editionNumber} / {product.editionSize ?? "—"}
                </span>
              </div>
              {product.editionSize && (
                <div className="mt-2 h-1 w-full overflow-hidden bg-apeax-westar">
                  <div className="h-full bg-apeax-cod-gray" style={{ width: `${percent}%` }} />
                </div>
              )}
            </div>

            <div className="mt-5 flex flex-col gap-1.5 border-t border-apeax-westar pt-5 font-sans text-xs">
              <div className="flex justify-between text-apeax-cod-gray">
                <span className="text-apeax-cod-gray/50">Registered To</span>
                <span className="font-medium">{member.displayHandle}</span>
              </div>
              <div className="flex justify-between text-apeax-cod-gray">
                <span className="text-apeax-cod-gray/50">Charter Member Since</span>
                <span>{dateLabel}</span>
              </div>
              <div className="flex justify-between text-apeax-cod-gray">
                <span className="text-apeax-cod-gray/50">Serial</span>
                <span className="font-mono">{member.serial}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              {hasStory && (
                <Link
                  href={`/chapters/${chapter.slug}/story`}
                  className="block bg-apeax-cod-gray py-3 text-center font-sans text-xs font-bold uppercase tracking-wide text-white hover:opacity-90"
                >
                  Read {chapter.number}&apos;s Story
                </Link>
              )}
              <div className="flex gap-2">
                <Link
                  href={`/charter-members?chapter=${chapter.slug}`}
                  className="flex-1 border border-apeax-cod-gray/20 py-3 text-center font-sans text-[11px] font-medium uppercase tracking-wide text-apeax-cod-gray hover:bg-apeax-cararra"
                >
                  Other Charter Members
                </Link>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-center gap-1.5 border border-apeax-cod-gray/20 px-4 font-sans text-[11px] font-medium uppercase tracking-wide text-apeax-cod-gray hover:bg-apeax-cararra"
                >
                  <Link2 size={13} />
                  {copied ? "Copied" : "Share"}
                </button>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-1.5 border-t border-apeax-westar pt-4">
              <ScanLine size={13} className="text-apeax-cod-gray/30" />
              <p className="font-sans text-[10px] uppercase tracking-wide text-apeax-cod-gray/40">
                You scanned this piece&apos;s authenticity tag
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}