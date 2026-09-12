import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function AuthenticityBadge() {
  return (
    <Link
      href="/faq"
      className="mt-4 flex items-center gap-2 border border-apeax-westar bg-apeax-cararra px-3 py-2.5 hover:bg-apeax-westar/40"
    >
      <ShieldCheck size={16} className="shrink-0 text-apeax-cod-gray" />
      <p className="font-sans text-[11px] text-apeax-cod-gray/80">
        Includes a scannable authenticity tag — every piece, verified.
      </p>
    </Link>
  );
}