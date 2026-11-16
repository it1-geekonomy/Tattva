import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

type WorkStepBadgeProps = {
  number: string;
  className?: string;
};

/**
 * Equal dark square badge.
 * Compact ≤29.6875rem; scales up from there; 3.75rem from lg.
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
        className="font-medium leading-[1.6] text-white max-[29.6875rem]:text-xl max-[29.6875rem]:leading-none"
      >
        {number}
      </Typography>
    </span>
  );
}
