import React from "react";
import { cn } from "../lib/utils";

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "p" | "span";

export type TypographyVariant =
  | "display-3xl"
  | "display-2xl"
  | "display-xl"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-xl"
  | "body-lg"
  | "body-sm"
  | "caption"
  | "overline";

export interface TypographyProps {
  children: React.ReactNode;
  variant?: TypographyVariant;
  as?: TypographyElement;
  className?: string;
  style?: React.CSSProperties;
}

const variantStyles: Record<TypographyVariant, string> = {
  "display-3xl":
    "font-semibold tracking-[-0.04em] text-balance text-[clamp(28px,3.75vw+16px,64px)] leading-[1.05]",

  "display-2xl":
    "font-normal tracking-[-0.03em] text-balance text-[clamp(24px,2.5vw+16px,48px)] leading-[1.08]",

  "display-xl":
    "font-medium tracking-[-0.02em] text-balance text-[clamp(22px,1.46vw+17.3px,36px)] leading-[1.15]",

  h1: "font-medium tracking-[-0.015em] text-balance text-[clamp(20px,0.83vw+17.3px,28px)] leading-[1.25]",

  h2: "font-medium tracking-[-0.01em] text-[clamp(18px,0.63vw+16px,24px)] leading-[1.3]",

  h3: "font-medium text-[clamp(16px,0.42vw+14.7px,20px)] leading-[1.4]",

  h4: "font-medium text-[clamp(15px,0.31vw+14px,18px)] leading-[1.45]",

  "body-xl":
    "font-normal text-[clamp(15px,0.31vw+14px,18px)] leading-[1.65]",

  "body-lg":
    "font-normal text-[clamp(14px,0.21vw+13.3px,16px)] leading-[1.6]",

  "body-sm":
    "font-normal text-[clamp(13px,0.1vw+12.7px,14px)] leading-[1.55]",

  caption: "font-normal text-[clamp(11px,0.1vw+10.7px,12px)] leading-[1.4]",

  overline:
    "font-semibold text-[12px] leading-[1.33] tracking-[0.1em] uppercase",
};

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body-lg",
  as,
  className,
  style,
}) => {
  const getTag = (): TypographyElement => {
    if (as) return as;
    if (variant.startsWith("display")) return "p";
    if (variant === "h1" || variant === "h2" || variant === "h3" || variant === "h4") {
      return variant;
    }
    return variant === "caption" || variant === "overline" ? "span" : "p";
  };

  return React.createElement(
    getTag(),
    {
      className: cn("text-black", variantStyles[variant], className),
      style: {
        ...style,
        ...(className?.includes("normal-case")
          ? { textTransform: "none" as const }
          : null),
      },
    },
    children
  );
};

export default Typography;
