import React from "react";
import { cn } from "../lib/utils";

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "p" | "span";

export interface TypographyProps {
  children: React.ReactNode;
  variant?:
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
  as?: TypographyElement;
  className?: string;
  style?: React.CSSProperties;
}

const variantStyles = {
  "display-3xl":
    "font-semibold text-[44px] leading-[52px] lg:text-[56px] lg:leading-[64px] xl:text-[64px] xl:leading-[96px]",

  "display-2xl":
    "font-normal text-[40px] leading-[48px] lg:text-[48px] lg:leading-[56px]",

  "display-xl":
    "font-medium text-[28px] leading-[36px] lg:text-[36px] lg:leading-[44px]",

  h1: "font-medium text-[24px] leading-[32px] lg:text-[28px] lg:leading-[36px]",

  h2: "font-medium text-[20px] leading-[28px] lg:text-[24px] lg:leading-[32px]",

  h3: "font-medium text-[18px] leading-[28px] lg:text-[20px] lg:leading-[32px]",

  h4: "font-medium text-[16px] leading-[24px] lg:text-[18px] lg:leading-[32px]",

  "body-xl":
    "font-normal text-[16px] leading-[28px] lg:text-[18px] lg:leading-[32px]",

  "body-lg":
    "font-normal text-[14px] leading-[22px] lg:text-[16px] lg:leading-[24px]",

  "body-sm":
    "font-normal text-[13px] leading-[20px] lg:text-[14px] lg:leading-[24px]",

  caption: "font-normal text-[12px] leading-[16px]",

  overline:
    "font-semibold text-[12px] leading-[16px] tracking-[1.6px] uppercase",
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

    if (["h1", "h2", "h3", "h4"].includes(variant)) {
      return variant as TypographyElement;
    }

    return variant === "caption" || variant === "overline"
      ? "span"
      : "p";
  };

  const elementProps = {
    className: cn("text-black", variantStyles[variant], className),
    style: {
      ...style,
      ...(className?.includes("normal-case") && {
        textTransform: "none" as const,
      }),
    },
  };

  return React.createElement(getTag(), elementProps, children);
};

export default Typography;