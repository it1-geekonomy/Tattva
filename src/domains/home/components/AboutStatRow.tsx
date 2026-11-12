import AboutBodyText from "@/domains/home/components/AboutBodyText";
import AboutStatItem from "@/domains/home/components/AboutStatItem";
import type { AboutStat } from "@/domains/home/constants/about";
import { cn } from "@/lib/utils";

type AboutStatRowProps = {
  stat: AboutStat;
  className?: string;
};

/** One stats row: stacked on mobile, number left / copy right from lg. */
export default function AboutStatRow({ stat, className }: AboutStatRowProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-16 xl:gap-[clamp(4rem,23vw,27.5rem)]",
        className
      )}
    >
      <AboutStatItem label={stat.label} value={stat.value} />
      <AboutBodyText className="w-full lg:ml-auto lg:w-auto">
        {stat.description}
      </AboutBodyText>
    </div>
  );
}
