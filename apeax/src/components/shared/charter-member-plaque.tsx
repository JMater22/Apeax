"use client";

import { useState } from "react";
import Link from "next/link";
import { RotateCw } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { BrandImage } from "@/components/shared/brand-image";
import { getProductBySlug } from "@/lib/data/products";
import { getChapterById } from "@/lib/data/chapters";
import { type CharterMember } from "@/types/charter-member";

export function CharterMemberPlaque({ member, rank }: { member: CharterMember; rank: number }) {
  const product = getProductBySlug(member.productSlug);
  const chapter = getChapterById(member.chapterId);
  const shouldReduceMotion = useReducedMotion();
  const [flipped, setFlipped] = useState(false);

  const dateLabel = new Date(member.claimedAt).toLocaleDateString("en-PH", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-label={`${flipped ? "Hide" : "View"} details for Charter Member ${member.displayHandle}`}
      className="group block w-full rounded-sm text-left [perspective:1400px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apeax-cod-gray focus-visible:ring-offset-2"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-64"
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 flex flex-col justify-between overflow-hidden border border-apeax-westar bg-white p-5"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/[0.06] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
          />

          <span aria-hidden="true" className="absolute right-3 top-3 font-display text-lg text-apeax-cod-gray/15">
            ✱
          </span>

          <div>
            <div className="flex items-center justify-between pr-6">
              <span className="inline-block border border-apeax-cod-gray/20 px-2 py-0.5 font-sans text-[10px] uppercase tracking-[1.5px] text-apeax-cod-gray/60">
                Edition {member.editionNumber}
              </span>
              {chapter && (
                <p className="font-sans text-[10px] uppercase tracking-wide text-apeax-cod-gray/40">
                  {chapter.number}
                </p>
              )}
            </div>
            <p className="mt-4 font-sans text-[10px] uppercase tracking-[2px] text-apeax-cod-gray/40">
              No. {String(rank).padStart(3, "0")}
            </p>
            <h3 className="mt-1 font-condensed text-2xl uppercase tracking-wide text-apeax-cod-gray">
              {member.displayHandle}
            </h3>
          </div>

          <div className="flex items-center justify-between border-t border-apeax-westar pt-3">
            <p className="font-sans text-xs text-apeax-cod-gray/50">
              {product?.name ?? "APEAX Piece"}
            </p>
            <RotateCw size={13} className="text-apeax-cod-gray/30" />
          </div>
        </div>

        {/* Back */}
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute inset-0 flex flex-col gap-4 border border-apeax-cod-gray bg-apeax-cod-gray p-5"
        >
          <div className="flex flex-1 gap-4">
            <div className="relative h-full w-20 shrink-0 overflow-hidden rounded-sm">
              <BrandImage
                src={product?.imageUrl}
                alt={product?.name ?? ""}
                className="h-full w-full"
                sizes="80px"
              />
            </div>
            <div className="flex min-w-0 flex-col justify-between">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[2px] text-white/40">
                  Member Since
                </p>
                <p className="mt-1 font-condensed text-lg uppercase tracking-wide text-white">
                  {dateLabel}
                </p>
              </div>
              <p className="font-body text-xs italic leading-relaxed text-white/70">
                One of the first to claim {chapter?.title ?? "this chapter"}{" "}
                before the story finished being told.
              </p>
            </div>
          </div>

          {product && (
            <Link
              href={`/verify/${member.serial}`}
              onClick={(e) => e.stopPropagation()}
              className="border-t border-white/15 pt-3 text-center font-sans text-[10px] font-medium uppercase tracking-[1.5px] text-white/60 hover:text-white"
            >
              Verify This Piece
            </Link>
          )}
        </div>
      </motion.div>
    </button>
  );
}