/**
 * Home “The Way We Work” — 3-step process (Figma Home Premium).
 * Mobile pads/gaps follow hero `FLUID` (`px-4 sm:px-6`, `gap-5 sm:gap-6`).
 */

export const WORK_EYEBROW = "The Way We Work";

export type WorkStep = {
  number: string;
  title: string;
  description: string;
  src: string;
  alt: string;
};

export const WORK_STEPS: WorkStep[] = [
  {
    number: "01",
    title: "Understanding the Vision",
    description:
      "Understand your vision and transform ideas into thoughtful design concepts.",
    src: "/images/home/work-step-01.jpg",
    alt: "Architect assembling a detailed scale model of a modern villa on a desk with blueprints and material samples",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Refine every detail through careful planning, design and technical coordination.",
    src: "/images/home/work-step-02.jpg",
    alt: "Two engineers in hard hats reviewing architectural blueprints at a multi-storey construction site",
  },
  {
    number: "03",
    title: "Delivery",
    description:
      "Bring your vision to life through precise execution and quality craftsmanship.",
    src: "/images/home/work-step-03.jpg",
    alt: "Professional handing keys to a couple in front of a completed modern luxury home",
  },
];

/**
 * Image frame fills the column width (no skinny max-width gutters on tablet).
 * Shorter aspect below lg so stacked/2-col views aren’t huge; Figma portrait on lg+.
 */
export const WORK_FLUID = {
  /** Same as hero `FLUID.mobilePadX`, then wider desktop insets */
  sectionPadX: "px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-[7.5rem]",
  sectionPadY: "pt-10 sm:pt-12 lg:pt-16 xl:pt-20 pb-8 sm:pb-10 lg:pb-12",
  eyebrowGap: "gap-6 sm:gap-8 lg:gap-10 xl:gap-12",
  /** Stacked phone + tablet; 3-up only from lg */
  columnGap: "gap-12 sm:gap-14 lg:gap-[clamp(2.5rem,5.4vw,6.4rem)]",
  stepGap: "gap-6 sm:gap-7 lg:gap-[clamp(1.5rem,1.75vw,2.15rem)]",
  copyGap: "gap-3.5 sm:gap-4",
  /** Rail → step cards (internal pace, not section bottom pad) */
  stackGap: "gap-10 sm:gap-12 lg:gap-14",
  /**
   * Below lg: compact centered frame (not full-bleed tall, not skinny left gutter).
   * lg+: full column width, Figma portrait ratio.
   */
  imageFrame:
    "relative mx-auto w-full max-w-[280px] overflow-hidden aspect-[4/3] sm:max-w-[320px] md:max-w-[360px] lg:mx-0 lg:max-w-none lg:aspect-[491/551]",
} as const;
