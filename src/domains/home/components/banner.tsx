"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from "react";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";
import {
  CONTENT_HEIGHT,
  CONTENT_TOP,
  COPY_BOTTOM,
  COPY_LEFT,
  FLUID,
  GRID_LINE_PERCENTS,
  HERO_PANELS,
  HERO_STAGE,
  PANEL_H,
  PANEL_W,
} from "@/domains/home/constants/hero";
import DiscoverCta from "@/domains/home/components/DiscoverCta";
import HeroPanelCard from "@/domains/home/components/HeroPanelCard";
import HeroWordmark from "@/domains/home/components/HeroWordmark";

/** Hit-test desktop panels — CSS :hover is unreliable under scaled transforms. */
function useDesktopPanelHover(frameRef: RefObject<HTMLDivElement | null>) {
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

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
  }, [frameRef]);

  return [hoveredPanel, setHoveredPanel] as const;
}

export default function HomeBanner() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [hoveredPanel, setHoveredPanel] = useDesktopPanelHover(frameRef);

  const stageVars = {
    ["--hero-stage-w" as string]: `${HERO_STAGE.width}px`,
    ["--hero-stage-h" as string]: `${HERO_STAGE.height}px`,
    ["--hero-content-top" as string]: `${CONTENT_TOP}px`,
    ["--hero-content-h" as string]: `${CONTENT_HEIGHT}`,
    ["--hero-stage-w-num" as string]: `${HERO_STAGE.width}`,
  } as CSSProperties;

  return (
    <section
      aria-labelledby="home-hero-heading"
      className={cn(
        "relative -mt-19 flex w-full flex-col overflow-hidden bg-tattva-hero-bg lg:-mt-24",
        FLUID.sectionPadTop,
        FLUID.sectionPadBottom
      )}
      style={stageVars}
    >
      <Typography
        variant="h1"
        as="h1"
        id="home-hero-heading"
        className="sr-only"
      >
        Crafting Spaces. Defining Lifestyles.
      </Typography>

      {/*
        Column guides on the full section so they stay visible in the
        width-scaled padded gaps (not clipped to the art frame).
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
      >
        {GRID_LINE_PERCENTS.map((leftPercent) => (
          <span
            key={leftPercent}
            className="absolute top-0 bottom-0 w-px bg-[var(--tattva-grid-line)]"
            style={{ left: `${leftPercent}%` }}
          />
        ))}
      </div>

      {/* Desktop: width-scaled art only — section height follows content + % pads */}
      <div
        ref={frameRef}
        className="hero-frame relative z-[2] mx-auto hidden w-full lg:block"
      >
        <div className="hero-stage">
          <HeroWordmark />

          {HERO_PANELS.map((panel, index) => (
            <HeroPanelCard
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

          {/* Copy + CTA: left = stage/16; bottom = low-row panel baseline */}
          <div
            className="absolute z-20 flex flex-col items-start gap-9"
            style={{
              left: COPY_LEFT,
              bottom: COPY_BOTTOM,
            }}
          >
            <Typography
              variant="section"
              as="p"
              aria-hidden
              className="pointer-events-none text-tattva-headline"
            >
              Crafting Spaces.
              <br />
              Defining Lifestyles.
            </Typography>
            <DiscoverCta />
          </div>
        </div>
      </div>

      {/* Mobile / tablet: stacked flow (same FLUID tokens as IHDUA) */}
      <div
        className={cn(
          "mx-auto flex w-full max-w-[560px] flex-col md:max-w-[600px] lg:hidden",
          FLUID.mobileGap,
          FLUID.mobilePadX,
          FLUID.mobilePadTop,
          FLUID.mobilePadBottom
        )}
      >
        <Typography
          variant="hero"
          as="span"
          aria-hidden
          className="overflow-hidden text-tattva-ink"
        >
          Tattva
        </Typography>

        <div className="mx-auto grid w-full max-w-[240px] grid-cols-1 gap-3 min-[420px]:max-w-[440px] min-[420px]:grid-cols-2 sm:max-w-[480px] sm:gap-3.5 md:max-w-[520px]">
          {HERO_PANELS.map((panel, index) => (
            <HeroPanelCard
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

        <div className={cn("flex w-full max-w-md flex-col items-start", FLUID.mobileGap)}>
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
