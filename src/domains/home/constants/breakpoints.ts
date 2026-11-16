/**
 * Home section layout tokens — rem + Tailwind scale.
 * Prefer sm/md/lg/xl/2xl. Named extras only for design-locked cuts.
 *
 * Tailwind defaults (1rem = 16px root):
 * sm 40rem · md 48rem · lg 64rem · xl 80rem · 2xl 96rem
 */

/** matchMedia — keep JS aligned with Tailwind `lg`. */
export const MQ = {
  lg: "(min-width: 64rem)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
} as const;

/**
 * next/image `sizes` — rem + vw.
 * Breakpoints match Tailwind md/lg/xl/2xl.
 */
export const IMAGE_SIZES = {
  heroDesktop: "16.25rem",
  heroMasonry:
    "(max-width: 48rem) 45vw, (max-width: 64rem) 48vw, 16.25rem",
  workStep:
    "(max-width: 29.6875rem) 100vw, (max-width: 64rem) 22.5rem, 33vw",
  ctaFloat:
    "(min-width: 96rem) 8.375rem, (min-width: 80rem) 6.5rem, (min-width: 64rem) 5.5rem, 5rem",
} as const;

/** Shared section shells (literal classes for the Tailwind scanner). */
export const SECTION_MAX_W = "max-w-[105rem]";
export const CTA_STAGE_MAX_W = "max-w-[120rem]";
export const ABOUT_REVEAL_MAX_W = "max-w-[85.4375rem]";
export const ABOUT_BODY_MAX_W = "max-w-[46.75rem]";

/** Horizontal inset shared by About / Way We Work / FAQ. */
export const SECTION_PAD_X = "px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24";

/**
 * Shared text / control class tokens for the five home sections.
 * Colors use `@theme` utilities from `globals.css` (no raw hex here).
 */
export const HOME_CLASS = {
  eyebrow:
    "font-medium uppercase leading-relaxed tracking-normal text-tattva-cta-start",
  ink: "text-foreground",
  muted: "text-tattva-body",
  faqQuestion: "text-tattva-faq-question",
  faqAnswer: "text-tattva-faq-answer",
  /** Shared CTA link shell — variants add color / border / min-width. */
  ctaBase:
    "inline-flex h-14 items-center justify-center px-2 py-2 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 active:opacity-85",
  heroCenterShell:
    "min-[31.25rem]:max-w-none min-[31.25rem]:items-center",
  heroCenterRow:
    "min-[31.25rem]:items-center min-[31.25rem]:text-center",
  heroCenterText: "min-[31.25rem]:text-center",
  workFullBleedFrame:
    "max-[29.6875rem]:mx-0 max-[29.6875rem]:max-w-none",
  workFullBleedGap: "max-[29.6875rem]:gap-0",
  workFullBleedBadge: "max-[29.6875rem]:size-10",
  workFullBleedBadgeText:
    "max-[29.6875rem]:text-xl max-[29.6875rem]:leading-none",
  ctaOneLineMax: "min-[106.25rem]:max-w-[64.75rem]",
  ctaOneLineText: "min-[106.25rem]:whitespace-nowrap",
  ctaOneLineHideBr: "min-[106.25rem]:hidden",
} as const;
