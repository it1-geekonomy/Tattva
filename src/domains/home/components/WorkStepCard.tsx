import Image from "next/image";
import WorkStepBadge from "@/domains/home/components/WorkStepBadge";
import {
  HOME_CLASS,
  IMAGE_SIZES,
} from "@/domains/home/constants/breakpoints";
import { WORK_FLUID, type WorkStep } from "@/domains/home/constants/work";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";


type WorkStepCardProps = {
  step: WorkStep;
  className?: string;
};

/**
 * Process column body. Badge + line show only below lg (stacked layout);
 * desktop uses the shared `WorkStepRail` for one continuous line draw.
 */
export default function WorkStepCard({ step, className }: WorkStepCardProps) {
  return (
    <article
      className={cn(
        "flex h-full w-full min-w-0 flex-col",
        WORK_FLUID.stepGap,
        className
      )}
    >
      <div
        className={cn(
          "flex w-full items-center gap-3 sm:gap-4 lg:hidden",
          HOME_CLASS.workFullBleedGap
        )}
      >
        <WorkStepBadge number={step.number} />
        <span
          data-work-line="mobile"
          aria-hidden
          className="h-px min-w-0 flex-1 origin-left bg-foreground"
        />
      </div>

      <div className={cn("flex flex-col", WORK_FLUID.copyGap)}>
        <Typography
          variant="subtitle"
          as="h3"
          className={cn("font-medium leading-snug", HOME_CLASS.ink)}
        >
          {step.title}
        </Typography>
        <Typography
          variant="body-xl"
          as="p"
          className={cn("font-medium leading-relaxed", HOME_CLASS.muted)}
        >
          {step.description}
        </Typography>
      </div>

      <div data-work-image className={cn(WORK_FLUID.imageFrame, "mt-auto")}>
        <Image
          src={step.src}
          alt={step.alt}
          fill
          sizes={IMAGE_SIZES.workStep}
          className="object-cover"
        />
      </div>
    </article>
  );
}
