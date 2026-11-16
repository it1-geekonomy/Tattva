import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

type AboutStatItemProps = {
  label: string;
  value: string;
  className?: string;
};

/** Label + large number (Founded / 2023). */
export default function AboutStatItem({
  label,
  value,
  className,
}: AboutStatItemProps) {
  return (
    <div
      className={cn(
        "flex w-36 shrink-0 flex-col sm:w-40 lg:w-auto lg:min-w-30",
        className
      )}
    >
      <Typography
        variant="body-lg"
        as="span"
        className="font-medium leading-[1.4] text-black sm:leading-[1.6]"
      >
        {label}
      </Typography>
      <Typography
        variant="stat"
        as="span"
        className="-mt-0.5 font-medium leading-[1.2] text-black sm:-mt-1 sm:leading-[1.6]"
      >
        {value}
      </Typography>
    </div>
  );
}
