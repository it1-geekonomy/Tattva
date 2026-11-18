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
  CONTENT_HEIGHT,
  CONTENT_TOP,
  COPY_BOTTOM,
  COPY_LEFT,
  FLUID,
  GRID_LINE_PERCENTS,
  HERO_CENTER,
  HERO_IMAGE_SIZES,
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
        className="relative z-[2] mx-auto hidden w-full overflow-hidden lg:block"
        style={
          {
            containerType: "inline-size",
            aspectRatio: `var(--hero-stage-w-num, 1920) / var(--hero-content-h, 600)`,
          } as CSSProperties
        }
      >
        <div
          className="absolute top-0 left-0 origin-top-left will-change-transform"
          style={
            {
              width: "var(--hero-stage-w, 120rem)",
              height: "var(--hero-stage-h, 65.6875rem)",
              transform:
                "translateY(calc(var(--hero-content-top, 14.25rem) * -100cqw / var(--hero-stage-w, 120rem))) scale(calc(100cqw / var(--hero-stage-w, 120rem)))",
            } as CSSProperties
          }
        >
          <HeroWordmark />

          {HERO_PANELS.map((panel, index) => (
            <HeroPanelCard
              key={panel.src}
              panel={panel}
              index={index}
              hovered={hoveredPanel === index}
              priority
              sizes={HERO_IMAGE_SIZES.desktop}
              className="absolute"
              style={{
                left: `${panel.left / 16}rem`,
                top: `${panel.top / 16}rem`,
                width: `${PANEL_W / 16}rem`,
                height: `${PANEL_H / 16}rem`,
              }}
            />
          ))}

          {/* Copy + CTA: left = stage/16; bottom = low-row panel baseline */}
          <div
            className="absolute z-20 flex flex-col items-start gap-9"
            style={{
              left: `${COPY_LEFT / 16}rem`,
              bottom: `${COPY_BOTTOM / 16}rem`,
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
            HERO_CENTER.shell,
            FLUID.mobilePadX
          )}
        >
          <div
            className={cn(
              "flex w-full flex-col items-start gap-5 sm:gap-6",
              HERO_CENTER.row
            )}
          >
            <Typography
              variant="section"
              as="p"
              aria-hidden
              className={cn(
                "text-left text-tattva-headline",
                HERO_CENTER.text
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
              "block w-full whitespace-nowrap font-semibold leading-none tracking-normal select-none [font-variant-ligatures:none] text-[clamp(4rem,29.6vw,7.221875rem)]",
              HERO_CENTER.text,
              fontMontblanc
            )}
            aria-hidden
            style={{
              marginTop: `${MOBILE_WORDMARK.gapY / 16}rem`,
              marginBottom: `${MOBILE_WORDMARK.gapY / 16}rem`,
            }}
          >
            <span className="text-black">Tat</span>
            <span className="relative inline-block [font-variant-ligatures:none]">
              <span className="text-black [-webkit-text-stroke:0.125rem_#000]">
                tva
              </span>
              <span className="absolute top-0 left-0 text-white [-webkit-text-stroke:0]">
                tva
              </span>
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
              sizes={HERO_IMAGE_SIZES.masonry}
              className={cn("relative w-full", MOBILE_PANEL_ASPECT.tall)}
            />
            <HeroPanelCard
              panel={HERO_PANELS[2]}
              index={2}
              hovered={hoveredPanel === 2}
              onHoverChange={setHoveredPanel}
              labelVisible
              sizes={HERO_IMAGE_SIZES.masonry}
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
              sizes={HERO_IMAGE_SIZES.masonry}
              className={cn("relative w-full", MOBILE_PANEL_ASPECT.short)}
            />
            <HeroPanelCard
              panel={HERO_PANELS[3]}
              index={3}
              hovered={hoveredPanel === 3}
              onHoverChange={setHoveredPanel}
              labelVisible
              sizes={HERO_IMAGE_SIZES.masonry}
              className={cn("relative w-full", MOBILE_PANEL_ASPECT.tall)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
