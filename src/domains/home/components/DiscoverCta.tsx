import Link from "next/link";
import { HOME_CLASS } from "@/domains/home/constants/breakpoints";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

export default function DiscoverCta({ className }: { className?: string }) {
  return (
    <Link
      href="#projects"
      className={cn(
        "hero-cta min-w-60 focus-visible:outline-tattva-ink",
        HOME_CLASS.ctaBase,
        className
      )}
    >
      <Typography variant="body-xl" as="span" className="text-white">
        Discover Our Projects
      </Typography>
    </Link>
  );
}
