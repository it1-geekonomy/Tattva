/**
 * Home “Let’s create something meaningful” CTA — copy, floats, spacing.
 * Image order: top-left → top-right → bottom-left → bottom-right.
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
  /** Sizing / placement classes for each float. */
  frameClassName: string;
};

/** Shared size ramp for all four corner floats. */
const CTA_FLOAT_SIZE =
  "size-16 sm:size-20 md:size-24 lg:size-[5.5rem] xl:size-[6.5rem] 2xl:size-[8.375rem]";

/**
 * Four floats in the outer corners.
 * Mobile/tablet: sit in the padded bands above/below the copy.
 * Desktop lg+: square frames.
 */
export const CTA_FLOAT_IMAGES: CtaFloatImage[] = [
  {
    id: "top-left",
    src: "/images/home/cta/cta-float-04.jpg",
    alt: "",
    position: "top-left",
    frameClassName: `left-0 top-0 sm:left-1 sm:top-0 md:left-2 lg:left-[4%] lg:top-8 xl:left-[4%] xl:top-9 2xl:left-[5%] 2xl:top-10 ${CTA_FLOAT_SIZE}`,
  },
  {
    id: "top-right",
    src: "/images/home/cta/cta-float-02.jpg",
    alt: "",
    position: "top-right",
    frameClassName: `right-0 top-0 sm:right-0 sm:top-2 md:right-1 md:top-4 lg:right-[5%] lg:top-10 xl:right-[6%] xl:top-11 2xl:right-[6%] 2xl:top-12 ${CTA_FLOAT_SIZE}`,
  },
  {
    id: "bottom-left",
    src: "/images/home/cta/cta-float-01.jpg",
    alt: "",
    position: "bottom-left",
    frameClassName: `bottom-0 left-0 sm:bottom-0 sm:left-1 md:bottom-1 md:left-2 lg:bottom-12 lg:left-[4%] xl:bottom-14 xl:left-[5%] 2xl:bottom-16 2xl:left-[6%] ${CTA_FLOAT_SIZE}`,
  },
  {
    id: "bottom-right",
    src: "/images/home/cta/cta-float-03.jpg",
    alt: "",
    position: "bottom-right",
    frameClassName: `bottom-0 right-0 sm:bottom-1 sm:right-0 md:bottom-2 md:right-1 lg:bottom-10 lg:right-[4%] xl:bottom-12 xl:right-[5%] 2xl:bottom-12 2xl:right-[5%] ${CTA_FLOAT_SIZE}`,
  },
];

export const CTA_FLUID = {
  sectionPadX: "px-4 sm:px-6",
  sectionPadY: "py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28",
  /** Gap between heading block and button. */
  contentGap: "gap-8 sm:gap-10 lg:gap-12",
  /** Gap between heading and body inside the copy block. */
  copyGap: "gap-5 sm:gap-6 lg:gap-8",
  stageMinH:
    "min-h-[36rem] sm:min-h-[40rem] md:min-h-[42rem] lg:min-h-[38rem] xl:min-h-[42rem] 2xl:min-h-[46rem]",
  contentMaxW:
    "w-full max-w-md sm:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl",
  bodyMaxW:
    "max-w-sm sm:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl",
  contentPad:
    "px-4 pt-28 pb-28 sm:px-6 sm:pt-32 sm:pb-32 md:px-8 md:pt-36 md:pb-36 lg:px-6 lg:pt-12 lg:pb-12 2xl:pt-14",
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
