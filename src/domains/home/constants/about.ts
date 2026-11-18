/**
 * Home About Us — copy + spacing tokens.
 * Mobile pads/gaps follow hero `FLUID` (`px-4 sm:px-6`, `gap-5 sm:gap-6`).
 */

export const ABOUT_EYEBROW = "About Us";

export const ABOUT_STATEMENT =
  "We bring together thoughtful design, technical expertise and seamless execution to create spaces that inspire the way we live and work. From large-scale construction and end-to-end interiors to thoughtfully designed modular solutions, Tattva Lifespaces transforms ideas into purposeful environments.";

export type AboutStat = {
  label: string;
  value: string;
  description: string;
};

export const ABOUT_STATS: AboutStat[] = [
  {
    label: "Founded",
    value: "2023",
    description:
      "From the earliest conceptual sketches to the final touches on a completed project, every step of our journey has been marked by a commitment to pushing the limits of creativity and craftsmanship.",
  },
  {
    label: "Projects Completed",
    value: "194+",
    description:
      "Over the years, we've had the privilege of working on a diverse array of projects, each presenting its own unique set of challenges and opportunities.",
  },
];

export const ABOUT_CTA = {
  label: "Know More",
  href: "/about-us",
} as const;

/**
 * Scroll-scrub text reveal colors (hex for GSAP — not CSS classes).
 * Active matches `--foreground` / `text-foreground`.
 */
export const ABOUT_REVEAL_MUTED = "#c8c8c8";
export const ABOUT_REVEAL_ACTIVE = "#0b0b0b";

/** matchMedia — aligned with prefers-reduced-motion. */
export const ABOUT_MQ = {
  reduceMotion: "(prefers-reduced-motion: reduce)",
} as const;

/**
 * Fluid spacing — hero mobile tokens on small screens; larger insets from lg up.
 */
export const ABOUT_FLUID = {
  sectionPadX: "px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24",
  sectionPadY: "py-12 sm:py-14 lg:py-16 xl:py-20",
  sectionMaxW: "max-w-[105rem]",
  revealMaxW: "max-w-[85.4375rem]",
  bodyMaxW: "max-w-[46.75rem]",
  eyebrowGap: "gap-4 sm:gap-5 lg:gap-8",
  blockGap: "gap-12 sm:gap-14 lg:gap-16 xl:gap-24",
  rowsGap: "gap-10 sm:gap-12 lg:gap-16 xl:gap-20",
  eyebrow:
    "font-medium uppercase leading-relaxed tracking-normal text-tattva-cta-start",
  ink: "text-foreground",
  muted: "text-tattva-body",
  ctaBase:
    "inline-flex h-14 items-center justify-center px-2 py-2 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 active:opacity-85",
} as const;
