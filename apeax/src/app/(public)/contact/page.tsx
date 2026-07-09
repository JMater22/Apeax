import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/shared/contact-form";
import { SOCIAL_LINKS } from "@/lib/constants/footer-links";

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
                  <a href={SOCIAL_LINKS.facebook} className="hover:opacity-70">
                    Facebook
                  </a>
                  <a href={SOCIAL_LINKS.instagram} className="hover:opacity-70">
                    Instagram
                  </a>
                  <a href={SOCIAL_LINKS.tiktok} className="hover:opacity-70">
                    TikTok
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