import AboutBodyText from "@/domains/home/components/AboutBodyText";
import AboutStatItem from "@/domains/home/components/AboutStatItem";
import type { AboutStat } from "@/domains/home/constants/about";
import { cn } from "@/lib/utils";

type AboutStatRowProps = {
  stat: AboutStat;
  className?: string;
};

/** One stats row: number left / copy right at all breakpoints. */
export default function AboutStatRow({ stat, className }: AboutStatRowProps) {
  return (
    <div
      className={cn(
        "flex w-full min-w-0 flex-row items-start gap-4 sm:gap-6 lg:items-center lg:gap-10 xl:gap-16",
        className
      )}
    >
      <AboutStatItem label={stat.label} value={stat.value} />
      <AboutBodyText className="min-w-0 flex-1">
        {stat.description}
      </AboutBodyText>
    </div>
  );
}
