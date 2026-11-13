/**
 * Home “Let’s create something meaningful” CTA — copy, floats, spacing.
 * Image order matches the files provided (top-left → top-right → bottom-left → bottom-right).
 */

export const CTA_HEADING = "Let's create something meaningful";

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
 * Four floats in attachment order → top-left, top-right, bottom-left, bottom-right.
 * All same square base (74×74); pulse scales them up to 124×124.
 * Hidden below `lg` so heading / paragraph / button stay clear on small screens.
 */
export const CTA_FLOAT_IMAGES: CtaFloatImage[] = [
  {
    id: "top-left",
    src: "/images/home/cta/cta-float-01.jpg",
    alt: "",
    position: "top-left",
    frameClassName: "left-[3%] top-[5%] size-[74px] xl:left-[4%] xl:top-[6%]",
  },
  {
    id: "top-right",
    src: "/images/home/cta/cta-float-02.jpg",
    alt: "",
    position: "top-right",
    frameClassName: "right-[4%] top-[8%] size-[74px] xl:right-[6%] xl:top-[7%]",
  },
  {
    id: "bottom-left",
    src: "/images/home/cta/cta-float-03.jpg",
    alt: "",
    position: "bottom-left",
    frameClassName:
      "bottom-[26%] left-[4%] size-[74px] xl:bottom-[28%] xl:left-[6%]",
  },
  {
    id: "bottom-right",
    src: "/images/home/cta/cta-float-04.jpg",
    alt: "",
    position: "bottom-right",
    frameClassName:
      "bottom-[24%] right-[4%] size-[74px] xl:bottom-[26%] xl:right-[5%]",
  },
];

export const CTA_FLUID = {
  sectionPadX: "px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-[7.5rem]",
  sectionPadY: "py-16 sm:py-20 lg:py-24 xl:py-28",
  /** Figma stack: heading → body → button, centered */
  contentGap: "gap-6 sm:gap-7 lg:gap-8",
  /** Min height so corner floats sit clear of the centered copy band */
  stageMinH:
    "min-h-[28rem] sm:min-h-[32rem] lg:min-h-[clamp(34rem,52vw,42rem)]",
  /**
   * Wide enough for the display heading to wrap cleanly
   * (“Let’s create something” / “meaningful”), still inside float gutters.
   */
  contentMaxW: "max-w-[40rem] xl:max-w-[46rem]",
  /** Body copy ~two lines when centered */
  bodyMaxW: "max-w-[34rem]",
} as const;

/** Figma pulse: 74px → 124px (scale 124/74), opacity, ~4.5s full yoyo loop */
export const CTA_FLOAT_MOTION = {
  /** Base frame is 74×74; scaleTo reaches visual 124×124 */
  scaleFrom: 1,
  scaleTo: 124 / 74,
  opacityFrom: 0.72,
  opacityTo: 1,
  /** One direction; yoyo makes the full loop ~4.5s */
  duration: 2.25,
  ease: "power1.inOut",
} as const;
