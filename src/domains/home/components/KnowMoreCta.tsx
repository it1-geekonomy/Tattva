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
        "inline-flex h-14 min-w-48 items-center justify-center border border-black px-2 py-2 text-black transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-85",
        className
      )}
    >
      <Typography variant="body-xl" as="span" className="font-medium text-black">
        {label}
      </Typography>
    </Link>
  );
}
