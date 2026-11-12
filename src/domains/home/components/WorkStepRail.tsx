import WorkStepBadge from "@/domains/home/components/WorkStepBadge";
import { WORK_FLUID, WORK_STEPS } from "@/domains/home/constants/work";
import { cn } from "@/lib/utils";

/**
 * Desktop-only badge + line row — same 3-col grid as the cards below
 * so segments align. Segments animate left→right as one continuous draw
 * (`data-work-line="desktop"`).
 */
export default function WorkStepRail({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "hidden w-full lg:grid lg:grid-cols-3",
        WORK_FLUID.columnGap,
        className
      )}
      aria-hidden
    >
      {WORK_STEPS.map((step) => (
        <div key={step.number} className="flex min-w-0 items-center gap-4">
          <WorkStepBadge number={step.number} />
          <span
            data-work-line="desktop"
            className="h-px min-w-0 flex-1 origin-left bg-black"
          />
        </div>
      ))}
    </div>
  );
}
