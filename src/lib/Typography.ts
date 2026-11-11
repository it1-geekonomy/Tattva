import React from "react";
import { cn } from "../lib/utils";

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "p" | "span";

export type TypographyVariant =
  | "hero"
  | "display-3xl"
  | "display-heading"
  | "stat"
  | "display-2xl"
  | "display-mobile"
  | "section"
  | "display-xl"
  | "project"
  | "subtitle"
  | "h1"
  | "card"
  | "h2"
  | "h3"
  | "body-xl"
  | "body-lg"
  | "caption"
  | "body-sm"
  | "micro"
  | "overline";

export interface TypographyProps {
  children: React.ReactNode;
  variant?: TypographyVariant;
  as?: TypographyElement;
  className?: string;
  style?: React.CSSProperties;
}

const variantStyles: Record<TypographyVariant, string> = {
  hero: "font-bold tracking-[-0.03em] text-balance text-[clamp(48px,1.5385vw+42.4615px,72px)] leading-[1.15]",

  "display-3xl":
    "font-semibold tracking-[-0.03em] text-balance text-[clamp(40px,1.5385vw+34.4615px,64px)] leading-[1.25]",

  "display-heading":
    "font-medium tracking-[-0.02em] text-balance text-[clamp(36px,1.2821vw+31.3846px,56px)] leading-[1.25]",

  stat: "font-normal tracking-[-0.02em] text-balance text-[clamp(32px,1.2179vw+27.6154px,51px)] leading-[1.2]",

  "display-2xl":
    "font-normal tracking-[-0.02em] text-balance text-[clamp(32px,1.0256vw+28.3077px,48px)] leading-[1.25]",

  "display-mobile":
    "font-semibold tracking-[-0.02em] text-balance text-[clamp(28px,1.0256vw+24.3077px,44px)] leading-[1.25]",

  section:
    "font-medium tracking-[-0.02em] text-balance text-[clamp(28px,0.7051vw+25.4615px,39px)] leading-[1.5]",

  "display-xl":
    "font-medium tracking-[-0.015em] text-balance text-[clamp(26px,0.641vw+23.6923px,36px)] leading-[1.3]",

  project:
    "font-medium tracking-[-0.015em] text-[clamp(24px,0.641vw+21.6923px,34px)] leading-[1.3]",

  subtitle:
    "font-medium text-[clamp(22px,0.4487vw+20.3846px,29px)] leading-[1.5]",

  h1: "font-medium tracking-[-0.01em] text-balance text-[clamp(22px,0.3846vw+20.6154px,28px)] leading-[1.29]",

  card: "font-medium text-[clamp(20px,0.3846vw+18.6154px,26px)] leading-[1.3]",

  h2: "font-medium text-[clamp(20px,0.2564vw+19.0769px,24px)] leading-[1.33]",

  h3: "font-medium text-[clamp(18px,0.1282vw+17.5385px,20px)] leading-[1.4]",

  "body-xl":
    "font-normal text-[clamp(16px,0.1282vw+15.5385px,18px)] leading-[1.75]",

  "body-lg": "font-normal text-[16px] leading-[1.5]",

  caption:
    "font-normal text-[clamp(13px,0.1282vw+12.5385px,15px)] leading-[1.5]",

  "body-sm":
    "font-semibold text-[clamp(13px,0.0641vw+12.7692px,14px)] leading-[1.7]",

  micro:
    "font-medium text-[clamp(12px,0.0641vw+11.7692px,13px)] leading-[1.6] uppercase",

  overline:
    "font-semibold text-[12px] leading-[1.33] tracking-[1.6px] uppercase",
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
    if (variant === "h1" || variant === "h2" || variant === "h3") {
      return variant;
    }
    if (
      variant === "caption" ||
      variant === "micro" ||
      variant === "overline"
    ) {
      return "span";
    }
    return "p";
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
