/**
 * Home “The Way We Work” — 3-step process.
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
 * ≤475px: full-width image in content inset.
 * Above that–lg: centered capped frames. lg+: portrait columns.
 */
export const WORK_FLUID = {
  sectionPadX: "px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24",
  sectionPadY: "pt-10 sm:pt-12 lg:pt-16 xl:pt-20 pb-0",
  eyebrowGap: "gap-5 sm:gap-6 lg:gap-8 xl:gap-10",
  columnGap: "gap-10 sm:gap-12 lg:gap-16 xl:gap-20",
  stepGap: "gap-5 sm:gap-6 lg:gap-6",
  copyGap: "gap-3 sm:gap-4",
  imageFrame:
    "relative mx-auto w-full max-w-xs overflow-hidden aspect-[4/3] max-[475px]:mx-0 max-[475px]:max-w-none sm:max-w-sm md:max-w-md lg:mx-0 lg:max-w-none lg:aspect-[491/551]",
} as const;
