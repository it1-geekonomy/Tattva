import Link from "next/link";
import { ABOUT_CTA, ABOUT_FLUID } from "@/domains/home/constants/about";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

type KnowMoreCtaProps = {
  className?: string;
  href?: string;
  label?: string;
};

/** Outlined “Know More” ghost button. */
export default function KnowMoreCta({
  className,
  href = ABOUT_CTA.href,
  label = ABOUT_CTA.label,
}: KnowMoreCtaProps) {
  return (
    <Link
      href={href}
      className={cn(
        "min-w-48 border border-foreground text-foreground focus-visible:outline-foreground",
        ABOUT_FLUID.ctaBase,
        className
      )}
    >
      <Typography
        variant="body-xl"
        as="span"
        className="font-medium text-foreground"
      >
        {label}
      </Typography>
    </Link>
  );
}
