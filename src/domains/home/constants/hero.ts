/**
 * Home hero design tokens + fluid spacing.
 * Padding uses % so it scales with width; section height stays automatic.
 */

export type HeroPanel = {
  src: string;
  alt: string;
  label: string;
  /** Desktop stage slot — full Tailwind literals for the scanner. */
  slotClass: string;
  zIndex: number;
};

/** Desktop hero stage size (design space units). */
export const HERO_STAGE = {
  width: 1920,
  height: 1051,
} as const;

/** Panel positions in design space (independent tops — not paired 1=3 / 2=4). */
export const HERO_PANELS: HeroPanel[] = [
  {
    src: "/images/home/hero-panel-1.jpg",
    alt: "Contemporary villa with teak cladding, glass walls, and a landscaped pool terrace",
    label: "HOMES",
    slotClass:
      "absolute top-[20.5125rem] left-[57.285rem] z-[2] h-[30.230625rem] w-[11.96125rem]",
    zIndex: 2,
  },
  {
    src: "/images/home/hero-panel-2.jpg",
    alt: "Luxury villa with turquoise infinity pool and terracotta facade overlooking the ocean",
    label: "RESORTS",
    slotClass:
      "absolute top-[14.25rem] left-[69.24625rem] z-[3] h-[30.230625rem] w-[11.96125rem]",
    zIndex: 3,
  },
  {
    src: "/images/home/hero-panel-3.jpg",
    alt: "Sculptural modern villa with stone textures, timber fins, and landscaped foreground",
    label: "SPACES",
    slotClass:
      "absolute top-[21.524375rem] left-[81.046875rem] z-[2] h-[30.230625rem] w-[11.96125rem]",
    zIndex: 2,
  },
  {
    src: "/images/home/hero-panel-4.jpg",
    alt: "Premium contemporary entrance with concrete, glass, and warm wooden detailing",
    label: "WORKSPACES",
    slotClass:
      "absolute top-[17.519375rem] left-[93.008125rem] z-[2] h-[30.230625rem] w-[11.96125rem]",
    zIndex: 2,
  },
];

/** Column guides — full class literals (left % of stage width). */
export const GRID_LINE_CLASSES = [
  "absolute top-0 bottom-0 left-[47.7359375%] w-px bg-[var(--tattva-grid-line)]",
  "absolute top-0 bottom-0 left-[57.709895833%] w-px bg-[var(--tattva-grid-line)]",
  "absolute top-0 bottom-0 left-[67.528125%] w-px bg-[var(--tattva-grid-line)]",
  "absolute top-0 bottom-0 left-[77.502083333%] w-px bg-[var(--tattva-grid-line)]",
  "absolute top-0 bottom-0 left-[87.475520833%] w-px bg-[var(--tattva-grid-line)]",
] as const;

/** Art cluster in design space (used for stage CSS vars only). */
export const CONTENT_TOP = 228;
export const CONTENT_HEIGHT = 583.89;

/** Copy + CTA on the desktop stage. */
export const HERO_COPY_CLASS =
  "absolute bottom-[14.944375rem] left-[7.5rem] z-20 flex flex-col items-start gap-9";

/** Desktop wordmark layers. */
export const HERO_WORDMARK = {
  base: "pointer-events-none absolute z-[1] top-[23.529375rem] left-[46.5025rem] whitespace-nowrap text-[13.47725rem] leading-[18.4375rem] text-tattva-ink select-none tracking-normal",
  clip: "pointer-events-none absolute z-[10] top-[23.529375rem] left-[57.285rem] h-[18.4375rem] w-[50rem] overflow-hidden whitespace-nowrap select-none",
  clipText:
    "inline-block -ml-[10.7825rem] whitespace-nowrap text-[13.47725rem] leading-[18.4375rem] tracking-normal text-white",
} as const;

/** Desktop stage shell — CSS vars come from the section `style` (required). */
export const HERO_FRAME_CLASS =
  "relative z-[2] mx-auto hidden w-full overflow-hidden lg:block [container-type:inline-size] [aspect-ratio:var(--hero-stage-w-num,1920)/var(--hero-content-h,600)]";

export const HERO_STAGE_CLASS =
  "absolute top-0 left-0 origin-top-left will-change-transform w-[var(--hero-stage-w,120rem)] h-[var(--hero-stage-h,65.6875rem)] [transform:translateY(calc(var(--hero-content-top,14.25rem)*-100cqw/var(--hero-stage-w,120rem)))_scale(calc(100cqw/var(--hero-stage-w,120rem)))]";

/**
 * Fluid spacing tokens — content-sized section (no min-h-dvh),
 * width-based top pad, fixed bottom pad.
 * Full literal strings so Tailwind's scanner can see them.
 */
export const FLUID = {
  /**
   * Equal breathing room (width-based % — change BOTH % values together).
   * Top adds 6rem only to clear sticky nav under lg:-mt-24.
   */
  sectionPadTop: "lg:pt-[calc(6rem+8%)]",
  sectionPadBottom: "lg:pb-[8%]",
  mobilePadTop: "pt-[calc(4.75rem+2.75rem)] sm:pt-[calc(4.75rem+3rem)]",
  mobilePadBottom: "pb-8 sm:pb-10",
  mobilePadX: "px-4 sm:px-6",
  mobileGap: "gap-5 sm:gap-6",
} as const;

/** next/image `sizes` for hero panels. */
export const HERO_IMAGE_SIZES = {
  desktop: "16.25rem",
  masonry:
    "(max-width: 48rem) 45vw, (max-width: 64rem) 48vw, 16.25rem",
} as const;

/** Center copy/CTA once the mobile column is wide enough. */
export const HERO_CENTER = {
  shell: "min-[31.25rem]:max-w-none min-[31.25rem]:items-center",
  row: "min-[31.25rem]:items-center min-[31.25rem]:text-center",
  text: "min-[31.25rem]:text-center",
} as const;

/** Discover CTA shell — gradient applied on the link in DiscoverCta. */
export const HERO_CTA_BASE =
  "inline-flex h-14 items-center justify-center px-2 py-2 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 active:opacity-85";

/**
 * Mobile masonry — same aspect within each diagonal pair:
 * tall = top-left + bottom-right; short = top-right + bottom-left.
 */
export const MOBILE_PANEL_ASPECT = {
  tall: "aspect-[5/8]",
  short: "aspect-[3/4]",
} as const;

/**
 * Mobile wordmark — SemiBold 600 / ~115.55 / lh 100% / tracking 0.
 * Equal air above/below ≈ 3rem (CTA → wordmark → masonry).
 */
/** Mobile wordmark — equal 3rem air above/below. */
export const MOBILE_WORDMARK_CLASS =
  "my-12 block w-full whitespace-nowrap font-semibold leading-none tracking-normal select-none [font-variant-ligatures:none] text-[clamp(4rem,29.6vw,7.221875rem)]";
