import Link from "next/link";
import { ScarcityTicker } from "@/components/shared/scarcity-ticker";
import { Container } from "@/components/layout/container";
import {
  FOOTER_TOP_LINKS,
  FOOTER_LINK_GROUPS,
  SOCIAL_LINKS,
} from "@/lib/constants/footer-links";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
       <ScarcityTicker />
      <Container className="py-10">
        <div className="flex flex-col gap-4 border-b border-background/20 pb-6 md:flex-row md:items-center md:justify-between">
          <nav className="flex gap-3 text-xs uppercase tracking-wide">
            {FOOTER_TOP_LINKS.map((link, index) => (
              <span key={link.href} className="flex items-center gap-3">
                <Link href={link.href} className="hover:opacity-70">
                  {link.label}
                </Link>
                {index < FOOTER_TOP_LINKS.length - 1 && <span aria-hidden>|</span>}
              </span>
            ))}
          </nav>

          <div className="flex gap-4">
            <a href={SOCIAL_LINKS.facebook} aria-label="Facebook" className="hover:opacity-70">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
            </svg>
            </a>

            <a href={SOCIAL_LINKS.tiktok} aria-label="TikTok" className="hover:opacity-70">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.6 5.82c-.97-.86-1.58-2.1-1.58-3.47H12.9v13.9c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1 0-5.44c.29 0 .57.05.83.13V10.5a5.85 5.85 0 0 0-.83-.06 5.86 5.86 0 1 0 5.86 5.86V9.3a7.5 7.5 0 0 0 4.38 1.4V7.56c-1.24 0-2.38-.42-3.28-1.12A6.3 6.3 0 0 1 16.6 5.82Z" />
            </svg>
            </a>

            <a href={SOCIAL_LINKS.instagram} aria-label="Instagram" className="hover:opacity-70">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider">
                {group.heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs uppercase tracking-wide hover:opacity-70">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[10px] uppercase tracking-wide opacity-70">
          © {new Date().getFullYear()} APEAX. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}