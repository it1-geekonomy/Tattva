import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { HeroPanel } from "@/domains/home/constants/hero";

type HeroPanelCardProps = {
  panel: HeroPanel;
  index: number;
  hovered: boolean;
  /** Keep category badge visible (mobile/tablet masonry). */
  labelVisible?: boolean;
  priority?: boolean;
  sizes: string;
  className?: string;
  style?: CSSProperties;
  onHoverChange?: (index: number | null) => void;
};

export default function HeroPanelCard({
  panel,
  index,
  hovered,
  labelVisible = false,
  priority,
  sizes,
  className,
  style,
  onHoverChange,
}: HeroPanelCardProps) {
  return (
    <div
      data-hero-panel={index}
      className={cn(
        "hero-panel-slot",
        hovered && "is-hovered",
        labelVisible && "is-label-visible",
        className
      )}
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
        <span
          className={cn(
            "hero-panel__label",
            // Compact tile badge — kept on the card, not in globals
            labelVisible &&
              "!w-auto !max-w-[calc(100%-1rem)] !px-2.5 !py-1.5 !text-[0.6875rem] !leading-[1.2] !tracking-[-0.02em]"
          )}
          aria-hidden
        >
          {panel.label}
        </span>
      </div>
    </div>
  );
}
