export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: FooterLink[];
}

export const FOOTER_TOP_LINKS: FooterLink[] = [
  { label: "Chapters", href: "/chapters" },
  { label: "Shop", href: "/shop" },
  { label: "Our Story", href: "/about" },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    heading: "Customer Service",
    links: [
      { label: "Help Centre", href: "/faq" },
      { label: "Return & Refund", href: "/faq#returns" },
      { label: "Order Tracking", href: "/faq#orders" },
      { label: "Size Guide", href: "/size-guide" },
    ],
  },
  {
    heading: "About APEAX",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  tiktok: "https://tiktok.com",
};