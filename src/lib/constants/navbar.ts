
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Work", href: "/our-work" },
  { label: "Services", href: "/services" },
  { label: "Featured Projects", href: "/featured-projects" },
  { label: "Contact Us", href: "/contact-us" },
];


export const CATEGORIES = ["Premium", "Modular"] as const;
export type Category = (typeof CATEGORIES)[number];


export const MOBILE_LINK_DELAYS = [
  ["delay-80", "delay-100"],
  ["delay-125", "delay-80"],
  ["delay-170", "delay-60"],
  ["delay-215", "delay-40"],
  ["delay-260", "delay-20"],
  ["delay-305", "delay-0"],
] as const;