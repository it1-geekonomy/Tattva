/**
 * Home About Us — copy + spacing tokens (Figma Home Premium Frame 65).
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

/** Scroll-scrub text reveal: muted sits first, black covers as you scroll */
export const ABOUT_REVEAL_MUTED = "#c8c8c8";
export const ABOUT_REVEAL_ACTIVE = "#000000";

/**
 * Fluid spacing — hero mobile tokens on small screens, Figma scale from lg up.
 */
export const ABOUT_FLUID = {
  /** Same as hero `FLUID.mobilePadX`, then wider desktop insets */
  sectionPadX: "px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-[7.5rem]",
  sectionPadY: "py-10 sm:py-12 lg:py-16 xl:py-20",
  /** Hero `mobileGap` below lg; Figma 30px on desktop */
  eyebrowGap: "gap-5 sm:gap-6 lg:gap-[30px]",
  blockGap: "gap-10 sm:gap-12 lg:gap-[clamp(4rem,7.1vw,8.5rem)]",
  rowsGap: "gap-8 sm:gap-10 lg:gap-[clamp(3rem,4.8vw,5.75rem)]",
} as const;
