"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from "react";
import DiscoverCta from "@/domains/home/components/DiscoverCta";
import HeroPanelCard from "@/domains/home/components/HeroPanelCard";
import HeroWordmark from "@/domains/home/components/HeroWordmark";
import {
  HOME_CLASS,
  IMAGE_SIZES,
} from "@/domains/home/constants/breakpoints";
import {
  CONTENT_HEIGHT,
  CONTENT_TOP,
  COPY_BOTTOM,
  COPY_LEFT,
  FLUID,
  GRID_LINE_PERCENTS,
  HERO_PANELS,
  HERO_STAGE,
  MOBILE_PANEL_ASPECT,
  MOBILE_WORDMARK,
  PANEL_H,
  PANEL_W,
} from "@/domains/home/constants/hero";
import { fontMontblanc } from "@/lib/fonts";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

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
    ["--hero-stage-w" as string]: `${HERO_STAGE.width / 16}rem`,
    ["--hero-stage-h" as string]: `${HERO_STAGE.height / 16}rem`,
    ["--hero-content-top" as string]: `${CONTENT_TOP / 16}rem`,
    ["--hero-content-h" as string]: `${CONTENT_HEIGHT}`,
    ["--hero-stage-w-num" as string]: `${HERO_STAGE.width}`,
  } as CSSProperties;

  return (
    <section
      aria-labelledby="home-hero-heading"
      className={cn(
        "relative -mt-19 flex w-full flex-col overflow-x-clip bg-white lg:-mt-24 lg:overflow-hidden lg:bg-tattva-hero-bg",
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
              sizes={IMAGE_SIZES.heroDesktop}
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

      {/*
        Mobile / tablet — headline → CTA → wordmark → masonry.
        Tablet (md–lg): centered copy/CTA; masonry full-bleed edge-to-edge.
      */}
      <div
        className={cn(
          "flex w-full flex-col lg:hidden",
          FLUID.mobilePadTop,
          FLUID.mobilePadBottom
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-xl flex-col",
            HOME_CLASS.heroCenterShell,
            FLUID.mobilePadX
          )}
        >
          <div
            className={cn(
              "flex w-full flex-col items-start gap-5 sm:gap-6",
              HOME_CLASS.heroCenterRow
            )}
          >
            <Typography
              variant="section"
              as="p"
              aria-hidden
              className={cn(
                "text-left text-tattva-headline",
                HOME_CLASS.heroCenterText
              )}
            >
              Crafting Spaces.
              <br />
              Defining Lifestyles.
            </Typography>
            <DiscoverCta className="h-11 min-w-0 px-5 text-sm sm:h-14 sm:min-w-60 sm:px-2 sm:text-base" />
          </div>

          {/* Solid "Tat" (3) + outlined "tva" (3) — never solid "Tatt" */}
          <p
            className={cn(
              "hero-mobile-wordmark",
              HOME_CLASS.heroCenterText,
              fontMontblanc
            )}
            aria-hidden
            style={
              {
                ["--hero-mobile-wordmark-gap" as string]: `${MOBILE_WORDMARK.gapY / 16}rem`,
              } as CSSProperties
            }
          >
            <span className="hero-wordmark-fill">Tat</span>
            <span className="hero-wordmark-outline">
              <span className="hero-wordmark-outline__back">tva</span>
              <span className="hero-wordmark-outline__front">tva</span>
            </span>
          </p>
        </div>

        {/*
          Masonry — phone/tablet only (parent is lg:hidden).
          md: light inset + gutters around all 4 tiles.
        */}
        <div className="grid w-full max-w-none grid-cols-2 items-start gap-2.5 px-4 sm:gap-3 sm:px-6 md:gap-3 md:px-3">
          <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-3">
            <HeroPanelCard
              panel={HERO_PANELS[0]}
              index={0}
              hovered={hoveredPanel === 0}
              onHoverChange={setHoveredPanel}
              labelVisible
              priority
              sizes={IMAGE_SIZES.heroMasonry}
              className={cn("relative w-full", MOBILE_PANEL_ASPECT.tall)}
            />
            <HeroPanelCard
              panel={HERO_PANELS[2]}
              index={2}
              hovered={hoveredPanel === 2}
              onHoverChange={setHoveredPanel}
              labelVisible
              sizes={IMAGE_SIZES.heroMasonry}
              className={cn("relative w-full", MOBILE_PANEL_ASPECT.short)}
            />
          </div>
          <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-3">
            <HeroPanelCard
              panel={HERO_PANELS[1]}
              index={1}
              hovered={hoveredPanel === 1}
              onHoverChange={setHoveredPanel}
              labelVisible
              priority
              sizes={IMAGE_SIZES.heroMasonry}
              className={cn("relative w-full", MOBILE_PANEL_ASPECT.short)}
            />
            <HeroPanelCard
              panel={HERO_PANELS[3]}
              index={3}
              hovered={hoveredPanel === 3}
              onHoverChange={setHoveredPanel}
              labelVisible
              sizes={IMAGE_SIZES.heroMasonry}
              className={cn("relative w-full", MOBILE_PANEL_ASPECT.tall)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
