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
        "w-full max-w-[46.75rem] font-medium leading-relaxed text-[#313131] lg:text-xl lg:leading-relaxed",
        className
      )}
    >
      {children}
    </Typography>
  );
}
