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
    "text-[30px] sm:text-[35px] md:text-[40px] lg:text-[60px]", 

  "display-2xl":
    "text-[28px] sm:text-[32px] md:text-[35px] lg:text-[38px]",

  "display-xl":
    "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px]",

  h1: "text-[22px] sm:text-[23px] md:text-[24px] lg:text-[25px]",

  h2: "text-[20px] sm:text-[21px] md:text-[22px] lg:text-[25px]",

  h3: "text-[18px] sm:text-[19px] md:text-[19px] lg:text-[20px]",

  h4: "text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px]",

  "body-xl":
    "text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]",

  "body-lg":
    "text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px]",

  "body-sm":
    "text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px]",

  caption:
    "text-[11px] sm:text-[11px] md:text-[12px] lg:text-[12px]",

  overline:
    "text-[10px] sm:text-[10px] md:text-[11px] lg:text-[12px]",
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
    className: cn(
      "text-black",
      variantStyles[variant],
      className
    ),
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