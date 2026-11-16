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
        "w-full max-w-[46.75rem] font-medium leading-[1.55] text-[#313131] lg:text-[clamp(1.125rem,0.1282vw+1.096rem,1.25rem)] lg:leading-[1.6]",
        className
      )}
    >
      {children}
    </Typography>
  );
}
