"use client";

import { motion, useReducedMotion } from "motion/react";
import { getProductBySlug } from "@/lib/data/products";
import { type CharterMember } from "@/types/charter-member";

export function CharterMemberPlaque({ member, rank }: { member: CharterMember; rank: number }) {
  const product = getProductBySlug(member.productSlug);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -4, boxShadow: "0 12px 24px rgba(10,10,10,0.12)" }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="border border-apeax-westar bg-white p-5"
    >
      <p className="font-sans text-[10px] uppercase tracking-[2px] text-apeax-cod-gray/40">
        No. {String(rank).padStart(3, "0")}
      </p>
      <h3 className="mt-2 font-condensed text-xl uppercase tracking-wide text-apeax-cod-gray">
        {member.displayHandle}
      </h3>
      <p className="mt-1 font-sans text-xs text-apeax-cod-gray/60">
        Charter Member — Edition {member.editionNumber}
      </p>
      {product && (
        <p className="mt-3 border-t border-apeax-westar pt-3 font-sans text-xs text-apeax-cod-gray/50">
          Claimed {product.name}
        </p>
      )}
      <p className="mt-1 font-sans text-[10px] uppercase tracking-wide text-apeax-cod-gray/30">
        {new Date(member.claimedAt).toLocaleDateString("en-PH", { month: "long", day: "numeric", year: "numeric" })}
      </p>
    </motion.div>
  );
}