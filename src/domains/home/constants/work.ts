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

/** matchMedia — keep JS aligned with Tailwind `lg` / reduced motion. */
export const WORK_MQ = {
  lg: "(min-width: 64rem)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
} as const;

/**
 * Narrow phones: full-width image in content inset.
 * sm–md: centered capped frames. lg+: portrait columns.
 */
export const WORK_FLUID = {
  sectionPadX: "px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24",
  sectionPadY: "pt-10 sm:pt-12 lg:pt-16 xl:pt-20 pb-0",
  sectionMaxW: "max-w-[105rem]",
  eyebrowGap: "gap-5 sm:gap-6 lg:gap-8 xl:gap-10",
  columnGap: "gap-10 sm:gap-12 lg:gap-16 xl:gap-20",
  stepGap: "gap-5 sm:gap-6 lg:gap-6",
  copyGap: "gap-3 sm:gap-4",
  imageSizes:
    "(max-width: 29.6875rem) 100vw, (max-width: 64rem) 22.5rem, 33vw",
  fullBleedGap: "max-[29.6875rem]:gap-0",
  fullBleedBadge: "max-[29.6875rem]:size-10",
  fullBleedBadgeText:
    "max-[29.6875rem]:text-xl max-[29.6875rem]:leading-none",
  imageFrame:
    "relative mx-auto w-full max-w-xs overflow-hidden aspect-[4/3] max-[29.6875rem]:mx-0 max-[29.6875rem]:max-w-none sm:max-w-sm md:max-w-md lg:mx-0 lg:max-w-none lg:aspect-[491/551]",
  eyebrow:
    "font-medium uppercase leading-relaxed tracking-normal text-tattva-cta-start",
  ink: "text-foreground",
  muted: "text-tattva-body",
} as const;
