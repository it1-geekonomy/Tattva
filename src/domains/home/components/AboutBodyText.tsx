import type { ReactNode } from "react";
import {
  ABOUT_BODY_MAX_W,
  HOME_CLASS,
} from "@/domains/home/constants/breakpoints";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

type AboutBodyTextProps = {
  children: ReactNode;
  className?: string;
};

/** Supporting paragraph beside a stat. */
export default function AboutBodyText({
  children,
  className,
}: AboutBodyTextProps) {
  return (
    <Typography
      variant="caption"
      as="p"
      className={cn(
        "w-full font-medium leading-relaxed lg:text-xl lg:leading-relaxed",
        HOME_CLASS.muted,
        ABOUT_BODY_MAX_W,
        className
      )}
    >
      {children}
    </Typography>
  );
}
