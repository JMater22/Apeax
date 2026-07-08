export interface NavLink {
  label: string;
  href: string;
}

export const PRIMARY_NAV_LINKS: NavLink[] = [
  { label: "New In", href: "/new-in" },
  { label: "Shop", href: "/shop" },
  { label: "Chapters", href: "/chapters" },
  { label: "Our Story", href: "/about" },
];