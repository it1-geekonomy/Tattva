import type { ReactNode } from "react";
import { ABOUT_FLUID } from "@/domains/home/constants/about";
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
        ABOUT_FLUID.muted,
        ABOUT_FLUID.bodyMaxW,
        className
      )}
    >
      {children}
    </Typography>
  );
}
