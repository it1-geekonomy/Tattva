import Link from "next/link";
import { ABOUT_CTA } from "@/domains/home/constants/about";
import { HOME_CLASS } from "@/domains/home/constants/breakpoints";
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
        HOME_CLASS.ctaBase,
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
