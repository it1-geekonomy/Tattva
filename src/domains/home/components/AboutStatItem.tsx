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
    <div className={cn("flex min-w-[7.5rem] shrink-0 flex-col", className)}>
      <Typography
        variant="body-lg"
        as="span"
        className="font-medium leading-[1.6] text-black"
      >
        {label}
      </Typography>
      <Typography
        variant="stat"
        as="span"
        className="-mt-1 font-medium leading-[1.6] text-black"
      >
        {value}
      </Typography>
    </div>
  );
}
