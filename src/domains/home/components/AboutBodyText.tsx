import type { ReactNode } from "react";
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
        "w-full max-w-[748px] font-medium leading-[1.55] text-[#313131] lg:text-[clamp(18px,0.1282vw+17.5385px,20px)] lg:leading-[1.6]",
        className
      )}
    >
      {children}
    </Typography>
  );
}
