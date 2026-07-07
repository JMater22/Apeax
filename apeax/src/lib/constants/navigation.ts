export interface NavLink {
  label: string;
  href: string;
}

export const PRIMARY_NAV_LINKS: NavLink[] = [
  { label: "New In", href: "/new-in" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Our Story", href: "/about" },
];