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
      variant="h3"
      as="p"
      className={cn(
        "max-w-[748px] font-medium leading-[1.6] text-[#313131]",
        className
      )}
    >
      {children}
    </Typography>
  );
}
