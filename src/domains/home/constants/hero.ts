/**
 * Home hero design tokens + fluid spacing (IHDUA-style).
 * Padding uses % so it scales with WIDTH — section height stays automatic.
 */

export type HeroPanel = {
  src: string;
  alt: string;
  label: string;
  left: number;
  top: number;
  zIndex: number;
};

/** Figma home artboard */
export const HERO_STAGE = {
  width: 1920,
  height: 1051,
} as const;

export const HERO_PANELS: HeroPanel[] = [
  {
    src: "/images/home/hero-panel-1.jpg",
    alt: "Contemporary villa with teak cladding, glass walls, and a landscaped pool terrace",
    label: "HOMES",
    left: 916.56,
    top: 328.2,
    zIndex: 2,
  },
  {
    src: "/images/home/hero-panel-2.jpg",
    alt: "Luxury villa with turquoise infinity pool and terracotta facade overlooking the ocean",
    label: "RESORTS",
    left: 1107.94,
    top: 228,
    zIndex: 3,
  },
  {
    src: "/images/home/hero-panel-3.jpg",
    alt: "Sculptural modern villa with stone textures, timber fins, and landscaped foreground",
    label: "SPACES",
    left: 1296.75,
    top: 344.39,
    zIndex: 2,
  },
  {
    src: "/images/home/hero-panel-4.jpg",
    alt: "Premium contemporary entrance with concrete, glass, and warm wooden detailing",
    label: "WORKSPACES",
    left: 1488.13,
    top: 280.31,
    zIndex: 2,
  },
];

export const GRID_LINE_LEFTS = [916.53, 1108.03, 1296.54, 1488.04, 1679.54] as const;

/** Column guides as % of stage width — paint on the full section, not only the cropped frame */
export const GRID_LINE_PERCENTS = GRID_LINE_LEFTS.map(
  (left) => (left / HERO_STAGE.width) * 100
);

export const PANEL_W = 191.38;
export const PANEL_H = 483.69;
export const WORDMARK_LEFT = 744.04;
export const WORDMARK_TOP = 376.47;
export const FIRST_PANEL_LEFT = 916.56;
export const COPY_LEFT = 120;
export const WORDMARK_SIZE = 215.636;
export const WORDMARK_LH = 295;

/** HOMES panel bottom — copy/CTA baseline */
export const COPY_BASELINE = HERO_PANELS[0].top + PANEL_H;

/** Art cluster in design space */
export const CONTENT_TOP = Math.min(...HERO_PANELS.map((p) => p.top));
export const CONTENT_BOTTOM = Math.max(
  ...HERO_PANELS.map((p) => p.top + PANEL_H)
);
export const CONTENT_HEIGHT = CONTENT_BOTTOM - CONTENT_TOP;

/**
 * Fluid spacing tokens (IHDUA pattern).
 * Full literal strings so Tailwind's scanner can see them.
 *
 * Equal Y pad ≈ 11.610417% of WIDTH (design inset / 1920).
 * Top also clears sticky nav (lg:h-24). Section is content-sized — not viewport-filled.
 */
export const FLUID = {
  sectionPadBottom: "lg:pb-[11.610417%]",
  sectionPadTop: "lg:pt-[calc(6rem+11.610417%)]",
  mobilePadTop: "pt-[calc(4.75rem+1.25rem)] sm:pt-[calc(4.75rem+1.5rem)]",
  mobilePadBottom: "pb-8 sm:pb-10",
  mobilePadX: "px-4 sm:px-6",
  mobileGap: "gap-5 sm:gap-6",
} as const;
