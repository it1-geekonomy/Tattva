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
  const showLabel = hovered || labelVisible;

  return (
    <div
      data-hero-panel={index}
      className={cn("cursor-pointer", hovered && "z-20", className)}
      style={{
        ...style,
        zIndex: hovered ? 20 : panel.zIndex,
      }}
      onMouseEnter={() => onHoverChange?.(index)}
      onMouseLeave={() => onHoverChange?.(null)}
    >
      <div className="absolute inset-0 size-full overflow-hidden">
        <Image
          src={panel.src}
          alt={panel.alt}
          fill
          sizes={sizes}
          className="pointer-events-none object-cover"
          priority={priority}
        />
        <span
          className={cn(
            "pointer-events-none absolute inset-0 bg-black/20 transition-[background-color] duration-300 ease-in-out motion-reduce:transition-none",
            hovered && "bg-black/[0.12]"
          )}
          aria-hidden
        />
        <span
          className={cn(
            "pointer-events-none absolute bottom-[4.17%] left-1/2 z-[3] box-border flex h-auto -translate-x-1/2 items-center justify-center gap-2.5 whitespace-nowrap bg-black font-sans text-2xl font-[450] uppercase tracking-[-0.02em] text-white shadow-[0_0.25rem_0.75rem_rgba(0,0,0,0.35)] transition-[opacity,visibility,transform,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
            labelVisible
              ? "w-auto max-w-[calc(100%-1rem)] px-2.5 py-1.5 text-[0.6875rem] leading-[1.2]"
              : "w-[11.25rem] max-w-[calc(100%-1.5rem)] p-2.5 leading-[2.0625rem]",
            showLabel
              ? "visible translate-y-0 opacity-100 shadow-[0_0.375rem_1.125rem_rgba(0,0,0,0.45)]"
              : "invisible translate-y-1.5 opacity-0"
          )}
          aria-hidden
        >
          {panel.label}
        </span>
      </div>
    </div>
  );
}
