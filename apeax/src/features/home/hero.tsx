import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex h-[70vh] min-h-[480px] w-full items-end border-b-2 border-apeax-westar bg-apeax-cod-gray md:h-[85vh]">
      <Image
        src="/images/mock-lookbook/Hero.png"
        alt="APEAX latest lookbook"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative z-10 flex flex-col gap-6 px-6 pb-16 md:px-12 md:pb-24">
        <h1 className="font-display text-[48px] uppercase leading-[0.95] text-white md:text-[96px]">
          State of
          <br />
          Becoming.
        </h1>
        <p className="max-w-md font-body text-sm uppercase leading-relaxed tracking-wide text-white/90 md:text-base">
          APEAX is more than clothing. It&apos;s a mindset. A commitment to
          growth. A state of becoming.
        </p>
        <Link
          href="/new-in"
          className="w-fit bg-white px-8 py-4 text-xs font-bold uppercase tracking-[1.8px] text-apeax-cod-gray transition-colors hover:bg-white/90"
        >
          Shop New In
        </Link>
      </div>
    </section>
  );
}