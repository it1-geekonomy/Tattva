import Image from "next/image";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";
import WorkStepBadge from "@/domains/home/components/WorkStepBadge";
import { WORK_FLUID, type WorkStep } from "@/domains/home/constants/work";

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
      <div className="flex w-full items-center gap-3 sm:gap-4 lg:hidden">
        <WorkStepBadge number={step.number} />
        <span
          data-work-line="mobile"
          aria-hidden
          className="h-px min-w-0 flex-1 origin-left bg-black"
        />
      </div>

      <div className={cn("flex flex-col", WORK_FLUID.copyGap)}>
        <Typography
          variant="subtitle"
          as="h3"
          className="font-medium leading-[1.5] text-[#0B0B0B]"
        >
          {step.title}
        </Typography>
        <Typography
          variant="body-xl"
          as="p"
          className="font-medium leading-[1.6] text-[#313131]"
        >
          {step.description}
        </Typography>
      </div>

      <div data-work-image className={cn(WORK_FLUID.imageFrame, "mt-auto")}>
        <Image
          src={step.src}
          alt={step.alt}
          fill
          sizes="(max-width: 1023px) 360px, 33vw"
          className="object-cover"
        />
      </div>
    </article>
  );
}
