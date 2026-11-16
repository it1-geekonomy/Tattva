import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HOME_CLASS } from "@/domains/home/constants/breakpoints";
import { CTA_BUTTON } from "@/domains/home/constants/cta";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

type GetInTouchCtaProps = {
  className?: string;
  href?: string;
  label?: string;
};

/** Solid black “Let’s get in touch” CTA. */
export default function GetInTouchCta({
  className,
  href = CTA_BUTTON.href,
  label = CTA_BUTTON.label,
}: GetInTouchCtaProps) {
  return (
    <Link
      href={href}
      className={cn(
        "min-w-60 gap-2 bg-foreground text-background focus-visible:outline-foreground",
        HOME_CLASS.ctaBase,
        className
      )}
    >
      <Typography
        variant="body-xl"
        as="span"
        className="font-medium text-background"
      >
        {label}
      </Typography>
      <ArrowUpRight
        aria-hidden="true"
        strokeWidth={1.5}
        className="size-5 shrink-0 text-background"
      />
    </Link>
  );
}
