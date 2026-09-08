"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Magnetic } from "@/components/shared/magnetic";
import { Reveal } from "@/components/shared/reveal";
import { getAllCharterMembers } from "@/lib/data/charter-members";

export function CharterMembersTeaser() {
  const members = getAllCharterMembers();

  return (
    <section className="border-b border-apeax-westar bg-apeax-cod-gray py-16 md:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <p className="font-sans text-xs uppercase tracking-[3px] text-white/40">
            {members.length} Names, Permanently Recorded
          </p>
          <h2 className="font-display text-4xl uppercase leading-[0.95] text-white md:text-6xl">
            Some Names Are Only in the Story Because They Were Early Enough
            to Be
          </h2>
          <p className="max-w-lg font-body text-sm leading-relaxed text-white/70">
            Before Chapter One was finished being told, a small number of
            people claimed a piece anyway. Their names are now part of the
            story — permanently, publicly, and never added to again once a
            chapter closes.
          </p>
          <Magnetic className="mt-2 inline-block w-fit">
            <Link
              href="/charter-members"
              className="block bg-white px-8 py-4 font-sans text-xs font-bold uppercase tracking-[1.8px] text-apeax-cod-gray hover:bg-white/90"
            >
              See Who Was Early
            </Link>
          </Magnetic>
        </Reveal>
      </Container>
    </section>
  );
}