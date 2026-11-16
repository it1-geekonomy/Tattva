import { WORK_FLUID } from "@/domains/home/constants/work";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

type WorkStepBadgeProps = {
  number: string;
  className?: string;
};

/** Equal dark square badge — compact on narrow phones, larger from sm / lg. */
export default function WorkStepBadge({
  number,
  className,
}: WorkStepBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex size-12 shrink-0 items-center justify-center bg-foreground text-background sm:size-14 lg:size-[3.75rem]",
        WORK_FLUID.fullBleedBadge,
        className
      )}
    >
      <Typography
        variant="h1"
        as="span"
        className={cn(
          "font-medium leading-relaxed text-background",
          WORK_FLUID.fullBleedBadgeText
        )}
      >
        {number}
      </Typography>
    </span>
  );
}
