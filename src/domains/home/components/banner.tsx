"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { cn } from "@/lib/utils";

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

function DiscoverCta({ className }: { className?: string }) {
  return (
    <Link
      href="#projects"
      className={cn(
        "hero-cta inline-flex h-[59px] min-w-[238px] items-center justify-center px-[9px] pt-1.5 pb-[9px] text-[18.4657px] font-medium leading-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tattva-ink",
        className
      )}
    >
      Discover Our Projects
    </Link>
  );
}

function WordmarkLayers() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute z-[1] font-bold whitespace-nowrap text-tattva-ink select-none"
        style={{
          left: WORDMARK_LEFT,
          top: WORDMARK_TOP,
          fontSize: 215.636,
          lineHeight: "295px",
          letterSpacing: "-0.02em",
        }}
      >
        Tattva
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute z-[10] overflow-hidden font-bold whitespace-nowrap text-white select-none"
        style={{
          left: FIRST_PANEL_LEFT,
          top: WORDMARK_TOP,
          width: 800,
          fontSize: 215.636,
          lineHeight: "295px",
          letterSpacing: "-0.02em",
        }}
      >
        <span
          className="inline-block"
          style={{ marginLeft: WORDMARK_LEFT - FIRST_PANEL_LEFT }}
        >
          Tattva
        </span>
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
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

  const updateScale = useCallback(() => {
    const width = frameRef.current?.clientWidth ?? STAGE_W;
    setScale(width / STAGE_W);
  }, []);

  useEffect(() => {
    updateScale();
    const node = frameRef.current;
    if (!node) return;

    const observer = new ResizeObserver(() => updateScale());
    observer.observe(node);
    return () => observer.disconnect();
  }, [updateScale]);

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
    // Negative margin aligns the hero under the sticky header (h-19 / lg:h-24).
    <section
      aria-labelledby="home-hero-heading"
      className="relative -mt-19 w-full overflow-hidden bg-tattva-hero-bg lg:-mt-24"
    >
      <h1 id="home-hero-heading" className="sr-only">
        Crafting Spaces. Defining Lifestyles.
      </h1>

      <div
        ref={frameRef}
        className="hero-frame relative mx-auto hidden w-full max-w-[1920px] lg:block"
      >
        <div
          className="hero-stage"
          style={{ transform: `scale(${scale})` }}
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

          {/* Headline + CTA block (design: left 120, top 718, gap 36) */}
          <div
            className="absolute z-20 flex w-[358px] flex-col items-start gap-9"
            style={{
              left: 120,
              top: 718,
            }}
          >
            <p
              aria-hidden
              className="pointer-events-none w-[371px] text-[39.0928px] leading-[150%] font-medium text-tattva-headline"
            >
              Crafting Spaces. Defining Lifestyles.
            </p>
            <DiscoverCta />
          </div>
        </div>
      </div>

      {/* Mobile layout: offset for sticky header after hero negative margin */}
      <div className="mx-auto flex w-full max-w-[720px] flex-col gap-6 px-4 pt-[calc(4.75rem+1.5rem)] pb-10 sm:gap-8 sm:px-6 sm:pt-[calc(4.75rem+2rem)] sm:pb-12 md:max-w-[960px] lg:hidden">
        {/* Compact wordmark for small screens; desktop uses layered clip */}
        <div
          aria-hidden
          className="overflow-hidden font-bold leading-[0.9] tracking-[-0.03em] text-tattva-ink text-[clamp(2.75rem,16vw,5.5rem)]"
        >
          Tattva
        </div>

        <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4">
          {HERO_PANELS.map((panel, index) => (
            <PanelCard
              key={panel.src}
              panel={panel}
              index={index}
              hovered={hoveredPanel === index}
              onHoverChange={setHoveredPanel}
              priority={index < 2}
              sizes="(max-width: 419px) 100vw, 50vw"
              className={cn(
                "relative aspect-[3/4] w-full sm:aspect-[2/3]",
                index % 2 === 1 && "min-[420px]:mt-5 sm:mt-6"
              )}
            />
          ))}
        </div>

        <div className="flex w-full max-w-md flex-col items-start gap-5 sm:gap-6">
          <p
            aria-hidden
            className="text-[clamp(1.5rem,5vw,2.4375rem)] leading-[150%] font-medium text-tattva-headline"
          >
            Crafting Spaces. Defining Lifestyles.
          </p>
          <DiscoverCta className="h-12 w-full max-w-[280px] min-w-0 text-base sm:h-[59px] sm:w-auto sm:min-w-[238px] sm:text-[18.4657px]" />
        </div>
      </div>
    </section>
  );
}
