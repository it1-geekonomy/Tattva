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
        "inline-flex size-12 shrink-0 items-center justify-center bg-foreground text-white max-[475px]:size-10 sm:size-14 lg:size-[60px]",
        className
      )}
    >
      <Typography
        variant="h1"
        as="span"
        className="font-medium leading-[1.6] text-white max-[475px]:text-[20px] max-[475px]:leading-none"
      >
        {number}
      </Typography>
    </span>
  );
}
