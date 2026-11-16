import Link from "next/link";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";
import { ABOUT_CTA } from "@/domains/home/constants/about";

type KnowMoreCtaProps = {
  className?: string;
  href?: string;
  label?: string;
};

/** Outlined “Know More” ghost button (Figma Frame 3). */
export default function KnowMoreCta({
  className,
  href = ABOUT_CTA.href,
  label = ABOUT_CTA.label,
}: KnowMoreCtaProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-[3.6875rem] min-w-[11.3125rem] items-center justify-center border border-black px-[0.5625rem] pt-1.5 pb-[0.5625rem] text-black transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-85",
        className
      )}
    >
      <Typography variant="body-xl" as="span" className="font-medium text-black">
        {label}
      </Typography>
    </Link>
  );
}
