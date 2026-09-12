import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/shared/contact-form";
import { SOCIAL_LINKS } from "@/lib/constants/footer-links";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | APEAX",
  description: "Get in touch with APEAX — questions about orders, collaborations, or the story.",
};  

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" />

      <Container className="py-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-condensed text-xl uppercase tracking-wide text-apeax-cod-gray">
              Get In Touch
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-apeax-cod-gray/70">
              Questions about an order, a collaboration, or the story? Reach
              out — we read everything.
            </p>

            <div className="mt-8 flex flex-col gap-4 font-sans text-sm text-apeax-cod-gray">
              <div>
                <span className="block text-xs uppercase tracking-wide text-apeax-cod-gray/50">
                  Email
                </span>
                <a href="mailto:hello@apeax.com" className="hover:opacity-70">
                  hello@apeax.com
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wide text-apeax-cod-gray/50">
                  Business Hours
                </span>
                <span>Mon – Fri, 9AM – 6PM PHT</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wide text-apeax-cod-gray/50">
                  Follow
                </span>
                <div className="mt-1 flex gap-4">
                  <a href={SOCIAL_LINKS.facebook} aria-label="Facebook" className="text-apeax-cod-gray hover:opacity-70">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
                    </svg>
                  </a>
                  <a href={SOCIAL_LINKS.instagram} aria-label="Instagram" className="text-apeax-cod-gray hover:opacity-70">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  <a href={SOCIAL_LINKS.tiktok} aria-label="TikTok" className="text-apeax-cod-gray hover:opacity-70">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M16.6 5.82c-.97-.86-1.58-2.1-1.58-3.47H12.9v13.9c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1 0-5.44c.29 0 .57.05.83.13V10.5a5.85 5.85 0 0 0-.83-.06 5.86 5.86 0 1 0 5.86 5.86V9.3a7.5 7.5 0 0 0 4.38 1.4V7.56c-1.24 0-2.38-.42-3.28-1.12A6.3 6.3 0 0 1 16.6 5.82Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </>
  );
}