import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

type WorkStepBadgeProps = {
  number: string;
  className?: string;
};

/**
 * Equal dark square badge.
 * Compact ≤475px (reference); prior scale from there up; Figma 60px from lg.
 */
export default function WorkStepBadge({
  number,
  className,
}: WorkStepBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex size-12 shrink-0 items-center justify-center bg-foreground text-white max-[29.6875rem]:size-10 sm:size-14 lg:size-[3.75rem]",
        className
      )}
    >
      <Typography
        variant="h1"
        as="span"
        className="font-medium leading-[1.6] text-white max-[29.6875rem]:text-[1.25rem] max-[29.6875rem]:leading-none"
      >
        {number}
      </Typography>
    </span>
  );
}
