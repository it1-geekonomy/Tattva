import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { HeroPanel } from "@/domains/home/constants/hero";

type HeroPanelCardProps = {
  panel: HeroPanel;
  index: number;
  hovered: boolean;
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
  priority,
  sizes,
  className,
  style,
  onHoverChange,
}: HeroPanelCardProps) {
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
