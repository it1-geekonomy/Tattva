import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

type WorkStepBadgeProps = {
  number: string;
  className?: string;
};

/**
 * Equal dark square badge.
 * Scales down on mobile (48 → 56 → 60) so columns don’t feel oversized.
 */
export default function WorkStepBadge({
  number,
  className,
}: WorkStepBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex size-12 shrink-0 items-center justify-center bg-foreground text-white sm:size-14 lg:size-[60px]",
        className
      )}
    >
      <Typography
        variant="h1"
        as="span"
        className="font-medium leading-[1.6] text-white"
      >
        {number}
      </Typography>
    </span>
  );
}
