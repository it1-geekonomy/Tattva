"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

/** How much of the viewport the sticky header currently covers (measured, not assumed). */
function measureHeaderOcclusion(): number {
  const header = document.querySelector("header");
  if (!header) return 0;
  const { top, bottom } = header.getBoundingClientRect();
  if (bottom <= 0 || top >= window.innerHeight) return 0;
  return Math.min(bottom, window.innerHeight) - Math.max(top, 0);
}

type HeroPanel = {
  src: string;
  alt: string;
  label: string;
  left: number;
  top: number;
  zIndex: number;
};

/** Panel positions on the 1920×1051 desktop hero canvas */
const HERO_PANELS: HeroPanel[] = [
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

const GRID_LINE_LEFTS = [916.53, 1108.03, 1296.54, 1488.04, 1679.54] as const;

const PANEL_W = 191.38;
const PANEL_H = 483.69;
const WORDMARK_LEFT = 744.04;
const WORDMARK_TOP = 376.47;
const FIRST_PANEL_LEFT = 916.56;
const STAGE_W = 1920;
const STAGE_H = 1051;
/** Panel cluster vertical bounds on the design canvas (min top → max bottom) */
const ART_TOP = Math.min(...HERO_PANELS.map((p) => p.top));
const ART_BOTTOM = Math.max(...HERO_PANELS.map((p) => p.top + PANEL_H));
/** HOMES panel bottom — copy/CTA baseline (button bottom aligns here) */
const COPY_BASELINE = HERO_PANELS[0].top + PANEL_H;
const COPY_LEFT = 120;

function DiscoverCta({ className }: { className?: string }) {
  return (
    <Link
      href="#projects"
      className={cn(
        "hero-cta inline-flex h-[59px] min-w-[238px] items-center justify-center px-[9px] pt-1.5 pb-[9px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tattva-ink",
        className
      )}
    >
      <Typography variant="body-xl" as="span" className="text-white">
        Discover Our Projects
      </Typography>
    </Link>
  );
}

/** Design-canvas wordmark size (not in Typography — hero tops out at 72px) */
const WORDMARK_SIZE = 215.636;
const WORDMARK_LH = 295;

function WordmarkLayers() {
  const wordmarkStyle = {
    fontSize: WORDMARK_SIZE,
    lineHeight: `${WORDMARK_LH}px`,
  } as const;

  return (
    <>
      <Typography
        variant="hero"
        as="span"
        aria-hidden
        className="pointer-events-none absolute z-[1] whitespace-nowrap text-tattva-ink select-none tracking-normal"
        style={{
          left: WORDMARK_LEFT,
          top: WORDMARK_TOP,
          ...wordmarkStyle,
        }}
      >
        Tattva
      </Typography>

      <div
        aria-hidden
        className="pointer-events-none absolute z-[10] overflow-hidden whitespace-nowrap select-none"
        style={{
          left: FIRST_PANEL_LEFT,
          top: WORDMARK_TOP,
          width: 800,
          ...wordmarkStyle,
        }}
      >
        <Typography
          variant="hero"
          as="span"
          className="inline-block whitespace-nowrap text-white tracking-normal"
          style={{
            marginLeft: WORDMARK_LEFT - FIRST_PANEL_LEFT,
            ...wordmarkStyle,
          }}
        >
          Tattva
        </Typography>
      </div>
    </>
  );
}

function PanelCard({
  panel,
  index,
  hovered,
  priority,
  sizes,
  className,
  style,
  onHoverChange,
}: {
  panel: HeroPanel;
  index: number;
  hovered: boolean;
  priority?: boolean;
  sizes: string;
  className?: string;
  style?: CSSProperties;
  onHoverChange?: (index: number | null) => void;
}) {
  return (
    <div
      data-hero-panel={index}
      className={cn("hero-panel-slot", hovered && "is-hovered", className)}
      style={
        {
          ...style,
          ["--panel-z" as string]: String(panel.zIndex),
        } as CSSProperties
      }
      onMouseEnter={() => onHoverChange?.(index)}
      onMouseLeave={() => onHoverChange?.(null)}
    >
      <div className="hero-panel absolute inset-0 overflow-hidden">
        <Image
          src={panel.src}
          alt={panel.alt}
          fill
          sizes={sizes}
          className="hero-panel__image pointer-events-none object-cover"
          priority={priority}
        />
        <span
          className="hero-panel__shade pointer-events-none absolute inset-0 bg-black/20"
          aria-hidden
        />
        <span className="hero-panel__label" aria-hidden>
          {panel.label}
        </span>
      </div>
    </div>
  );
}

export default function HomeBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [offsetY, setOffsetY] = useState(0);
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

  // Width-scale the design canvas, vertically center the art under the real header,
  // and let the section grow when content is taller than the viewport so overflow
  // clipping cannot hide the CTA. No breakpoint or header-height constants.
  const updateLayout = useCallback(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    if (!section || !frame) return;

    // Mobile uses the stacked layout; desktop frame is `display: none` there.
    if (getComputedStyle(frame).display === "none") {
      section.style.minHeight = "";
      return;
    }

    const nextScale = frame.clientWidth / STAGE_W;
    const artTopPx = ART_TOP * nextScale;
    const artH = (ART_BOTTOM - ART_TOP) * nextScale;
    const headerH = measureHeaderOcclusion();
    const contentMinH = Math.ceil(headerH + artH);
    const viewportH = window.innerHeight;

    // Floor stays with CSS `lg:min-h-dvh`; only raise when content needs more room.
    section.style.minHeight =
      contentMinH > viewportH ? `${contentMinH}px` : "";

    const frameH = Math.max(frame.clientHeight, contentMinH);
    const visibleH = Math.max(frameH - headerH, artH);
    const targetArtTop = headerH + (visibleH - artH) / 2;

    setScale(nextScale);
    setOffsetY(targetArtTop - artTopPx);
  }, []);

  useLayoutEffect(() => {
    updateLayout();

    const frame = frameRef.current;
    const header = document.querySelector("header");
    const observer = new ResizeObserver(() => updateLayout());
    if (frame) observer.observe(frame);
    if (header) observer.observe(header);

    window.addEventListener("resize", updateLayout);
    return () => {
      window.removeEventListener("resize", updateLayout);
      observer.disconnect();
    };
  }, [updateLayout]);

  // Resolve hover from pointer position; mouseenter is unreliable under transform: scale
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const syncHover = (clientX: number, clientY: number) => {
      const panels = frame.querySelectorAll<HTMLElement>("[data-hero-panel]");
      let found: number | null = null;

      panels.forEach((panel) => {
        const rect = panel.getBoundingClientRect();
        if (
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom
        ) {
          found = Number(panel.dataset.heroPanel);
        }
      });

      setHoveredPanel((prev) => (prev === found ? prev : found));
    };

    const onMove = (event: PointerEvent) => {
      syncHover(event.clientX, event.clientY);
    };
    const onLeave = () => setHoveredPanel(null);

    frame.addEventListener("pointermove", onMove);
    frame.addEventListener("pointerleave", onLeave);
    return () => {
      frame.removeEventListener("pointermove", onMove);
      frame.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    // Negative margin tucks the hero under the sticky header.
    // Desktop: CSS min-h-dvh as floor; updateLayout raises min-height when needed.
    <section
      ref={sectionRef}
      aria-labelledby="home-hero-heading"
      className="relative -mt-19 flex w-full flex-col overflow-hidden bg-tattva-hero-bg lg:-mt-24 lg:min-h-dvh"
    >
      <Typography
        variant="h1"
        as="h1"
        id="home-hero-heading"
        className="sr-only"
      >
        Crafting Spaces. Defining Lifestyles.
      </Typography>

      <div
        ref={frameRef}
        className="hero-frame relative mx-auto hidden w-full lg:block"
      >
        <div
          className="hero-stage"
          style={{
            transform: `translateY(${offsetY}px) scale(${scale})`,
          }}
        >
          {GRID_LINE_LEFTS.map((left) => (
            <span
              key={left}
              aria-hidden
              className="pointer-events-none absolute top-[51.19px] h-[999.81px] w-px bg-[var(--tattva-grid-line)]"
              style={{ left }}
            />
          ))}

          <WordmarkLayers />

          {HERO_PANELS.map((panel, index) => (
            <PanelCard
              key={panel.src}
              panel={panel}
              index={index}
              hovered={hoveredPanel === index}
              priority
              sizes="260px"
              className="absolute"
              style={{
                left: panel.left,
                top: panel.top,
                width: PANEL_W,
                height: PANEL_H,
              }}
            />
          ))}

          {/* Headline + CTA: bottom-aligned to HOMES panel (gap 36) */}
          <div
            className="absolute z-20 flex w-[358px] flex-col items-start gap-9"
            style={{
              left: COPY_LEFT,
              bottom: STAGE_H - COPY_BASELINE,
            }}
          >
            <Typography
              variant="section"
              as="p"
              aria-hidden
              className="pointer-events-none w-full text-tattva-headline"
            >
              Crafting Spaces. Defining Lifestyles.
            </Typography>
            <DiscoverCta />
          </div>
        </div>
      </div>

      {/* Mobile / tablet: compact cards (desktop uses scaled 1920 canvas above) */}
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-5 px-4 pt-[calc(4.75rem+1.25rem)] pb-8 sm:gap-6 sm:px-6 sm:pt-[calc(4.75rem+1.5rem)] sm:pb-10 md:max-w-[600px] lg:hidden">
        <Typography
          variant="hero"
          as="span"
          aria-hidden
          className="overflow-hidden text-tattva-ink"
        >
          Tattva
        </Typography>

        {/* Cap grid width so 2-col panels stay ~200–250px, not half of an 856px viewport */}
        <div className="mx-auto grid w-full max-w-[240px] grid-cols-1 gap-3 min-[420px]:max-w-[440px] min-[420px]:grid-cols-2 sm:max-w-[480px] sm:gap-3.5 md:max-w-[520px]">
          {HERO_PANELS.map((panel, index) => (
            <PanelCard
              key={panel.src}
              panel={panel}
              index={index}
              hovered={hoveredPanel === index}
              onHoverChange={setHoveredPanel}
              priority={index < 2}
              sizes="(max-width: 419px) 240px, 260px"
              className="relative aspect-[3/4] w-full"
            />
          ))}
        </div>

        <div className="flex w-full max-w-md flex-col items-start gap-5 sm:gap-6">
          <Typography
            variant="section"
            as="p"
            aria-hidden
            className="text-tattva-headline"
          >
            Crafting Spaces. Defining Lifestyles.
          </Typography>
          <DiscoverCta className="h-12 w-full max-w-[280px] min-w-0 text-base sm:h-[59px] sm:w-auto sm:min-w-[238px]" />
        </div>
      </div>
    </section>
  );
}
