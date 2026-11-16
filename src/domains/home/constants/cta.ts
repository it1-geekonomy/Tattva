/**
 * Home “Let’s create something meaningful” CTA — copy, floats, spacing.
 * Image order matches the files provided (top-left → top-right → bottom-left → bottom-right).
 */

export const CTA_HEADING = "Let’s create something meaningful";

export const CTA_DESCRIPTION =
  "Ready to bring your vision to life? The Tattva Lifespaces team is here to help you create spaces that inspire, connect and endure.";

export const CTA_BUTTON = {
  label: "Let's get in touch",
  href: "/contact-us",
} as const;

export type CtaFloatImage = {
  id: string;
  src: string;
  /** Empty: decorative floats (content is in the centered copy). */
  alt: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  /** Frame sizing / placement classes */
  frameClassName: string;
};

/**
 * Four floats matching Figma reference (Home - Premium, 1920px artboard):
 *   Rectangle 80 (top-left):  134×134, Left ~200
 *   Rectangle 77 (top-right): 134×134, Right ~200
 *   Rectangle 76 (bot-left):  134×134, Left ~256
 *   Rectangle 75 (bot-right): 134×134, Right ~84
 *
 * Sizes scale: 74px on lg (1024), 100px on xl (1280), 134px on 2xl (1536+).
 * Hidden below `lg`.
 */
export const CTA_FLOAT_IMAGES: CtaFloatImage[] = [
  {
    id: "top-left",
    src: "/images/home/cta/cta-float-04.jpg",
    alt: "",
    position: "top-left",
    frameClassName:
      "left-[3%] top-4 size-[74px] sm:top-6 lg:left-[4%] lg:top-8 lg:size-[88px] xl:left-[4%] xl:top-9 xl:size-[104px] 2xl:left-[5%] 2xl:top-10 2xl:size-[134px]",
  },
  {
    id: "top-right",
    src: "/images/home/cta/cta-float-02.jpg",
    alt: "",
    position: "top-right",
    frameClassName:
      "right-[4%] top-6 size-[74px] sm:top-8 lg:right-[5%] lg:top-10 lg:size-[88px] xl:right-[6%] xl:top-11 xl:size-[104px] 2xl:right-[6%] 2xl:top-12 2xl:size-[134px]",
  },
  {
    id: "bottom-left",
    src: "/images/home/cta/cta-float-01.jpg",
    alt: "",
    position: "bottom-left",
    frameClassName:
      "bottom-8 left-[3%] size-[74px] sm:bottom-10 lg:bottom-12 lg:left-[4%] lg:size-[88px] xl:bottom-14 xl:left-[5%] xl:size-[104px] 2xl:bottom-16 2xl:left-[6%] 2xl:size-[134px]",
  },
  {
    id: "bottom-right",
    src: "/images/home/cta/cta-float-03.jpg",
    alt: "",
    position: "bottom-right",
    frameClassName:
      "bottom-6 right-[3%] size-[74px] sm:bottom-8 lg:bottom-10 lg:right-[4%] lg:size-[88px] xl:bottom-12 xl:right-[5%] xl:size-[104px] 2xl:bottom-12 2xl:right-[5%] 2xl:size-[134px]",
  },
];

export const CTA_FLUID = {
  sectionPadX: "px-4 sm:px-6",
  sectionPadY: "py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28",
  /** Figma Frame 170: gap scales up to 56px at full desktop */
  contentGap: "gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[56px]",
  /** Min height so corner floats sit fully clear of the centered copy band */
  stageMinH:
    "min-h-[30rem] sm:min-h-[34rem] lg:min-h-[38rem] xl:min-h-[42rem] 2xl:min-h-[46rem]",
  /**
   * Container width:
   * Up to 1699px: keeps text centered in 2 lines with wide margins so floats stay clear.
   * 1700px+: expanded via scoped component style to 1036px for 1-line display.
   */
  contentMaxW:
    "w-full max-w-[28rem] sm:max-w-[34rem] lg:max-w-[40rem] xl:max-w-[46rem] 2xl:max-w-[54rem]",
  /** Body copy max width */
  bodyMaxW:
    "max-w-[26rem] sm:max-w-[32rem] lg:max-w-[36rem] xl:max-w-[42rem] 2xl:max-w-[860px]",
} as const;

/** Subtle floating breathing pulse (GSAP) */
export const CTA_FLOAT_MOTION = {
  scaleFrom: 1,
  scaleTo: 1.12,
  opacityFrom: 0.82,
  opacityTo: 1,
  /** One direction; yoyo makes the full loop ~4.5s */
  duration: 2.25,
  ease: "power1.inOut",
} as const;
