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
 * Four floats in the outer corners.
 * Mobile/tablet: sit in the padded bands above/below the copy (reference).
 * Desktop lg+: square Figma frames.
 */
export const CTA_FLOAT_IMAGES: CtaFloatImage[] = [
  {
    id: "top-left",
    src: "/images/home/cta/cta-float-04.jpg",
    alt: "",
    position: "top-left",
    frameClassName:
      "left-0 top-0 size-[4rem] sm:left-1 sm:top-0 sm:size-[5rem] md:left-2 md:size-[6rem] lg:left-[4%] lg:top-8 lg:size-[5.5rem] xl:left-[4%] xl:top-9 xl:size-[6.5rem] 2xl:left-[5%] 2xl:top-10 2xl:size-[8.375rem]",
  },
  {
    id: "top-right",
    src: "/images/home/cta/cta-float-02.jpg",
    alt: "",
    position: "top-right",
    frameClassName:
      "right-0 top-0 size-[4rem] sm:right-0 sm:top-2 sm:size-[5rem] md:right-1 md:top-4 md:size-[6rem] lg:right-[5%] lg:top-10 lg:size-[5.5rem] xl:right-[6%] xl:top-11 xl:size-[6.5rem] 2xl:right-[6%] 2xl:top-12 2xl:size-[8.375rem]",
  },
  {
    id: "bottom-left",
    src: "/images/home/cta/cta-float-01.jpg",
    alt: "",
    position: "bottom-left",
    frameClassName:
      "bottom-0 left-0 size-[4rem] sm:bottom-0 sm:left-1 sm:size-[5rem] md:bottom-1 md:left-2 md:size-[6rem] lg:bottom-12 lg:left-[4%] lg:size-[5.5rem] xl:bottom-14 xl:left-[5%] xl:size-[6.5rem] 2xl:bottom-16 2xl:left-[6%] 2xl:size-[8.375rem]",
  },
  {
    id: "bottom-right",
    src: "/images/home/cta/cta-float-03.jpg",
    alt: "",
    position: "bottom-right",
    frameClassName:
      "bottom-0 right-0 size-[4rem] sm:bottom-1 sm:right-0 sm:size-[5rem] md:bottom-2 md:right-1 md:size-[6rem] lg:bottom-10 lg:right-[4%] lg:size-[5.5rem] xl:bottom-12 xl:right-[5%] xl:size-[6.5rem] 2xl:bottom-12 2xl:right-[5%] 2xl:size-[8.375rem]",
  },
];

export const CTA_FLUID = {
  sectionPadX: "px-[4%] sm:px-[5%]",
  sectionPadY: "py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28",
  /** Figma Frame 170: gap scales in rem */
  contentGap: "gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[3.5rem]",
  /** Tall enough that corner floats stay outside the centered copy band */
  stageMinH:
    "min-h-[36rem] sm:min-h-[40rem] md:min-h-[42rem] lg:min-h-[38rem] xl:min-h-[42rem] 2xl:min-h-[46rem]",
  /**
   * Container width in rem / % of view.
   * ≥106.25rem (~1700px): expanded via scoped style to 64.75rem for 1-line display.
   */
  contentMaxW:
    "w-full max-w-[28rem] sm:max-w-[34rem] lg:max-w-[40rem] xl:max-w-[46rem] 2xl:max-w-[54rem]",
  /** Body copy max width */
  bodyMaxW:
    "max-w-[26rem] sm:max-w-[32rem] lg:max-w-[36rem] xl:max-w-[42rem] 2xl:max-w-[53.75rem]",
  /**
   * Inner padding = the red/blue “copy band”: wording sits here,
   * floats live in the empty top/bottom/side padding around it.
   */
  contentPad:
    "px-[4%] pt-28 pb-28 sm:px-[5%] sm:pt-32 sm:pb-32 md:px-[6%] md:pt-36 md:pb-36 lg:px-[1.5%] lg:pt-12 lg:pb-12 2xl:pt-14",
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
