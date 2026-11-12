import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";
import { CTA_BUTTON } from "@/domains/home/constants/cta";

type GetInTouchCtaProps = {
  className?: string;
  href?: string;
  label?: string;
};

/** Solid black “Let’s get in touch” CTA (Figma home closing band). */
export default function GetInTouchCta({
  className,
  href = CTA_BUTTON.href,
  label = CTA_BUTTON.label,
}: GetInTouchCtaProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-[59px] min-w-[238px] items-center justify-center gap-2 bg-black px-[9px] pt-1.5 pb-[9px] text-white transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-85",
        className
      )}
    >
      <Typography variant="body-xl" as="span" className="font-medium text-white">
        {label}
      </Typography>
      <ArrowUpRight
        aria-hidden="true"
        strokeWidth={1.5}
        className="size-5 shrink-0 text-white"
      />
    </Link>
  );
}
