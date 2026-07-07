export interface NavLink {
  label: string;
  href: string;
}

export const PRIMARY_NAV_LINKS: NavLink[] = [
  { label: "New In", href: "/shop?filter=new" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Our Story", href: "/about" },
];