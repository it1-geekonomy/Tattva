import Link from "next/link";
import { HERO_CTA_BASE } from "@/domains/home/constants/hero";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

export default function DiscoverCta({ className }: { className?: string }) {
  return (
    <Link
      href="#projects"
      className={cn(
        "min-w-60 bg-[image:var(--tattva-cta-gradient)] text-white focus-visible:outline-tattva-ink",
        HERO_CTA_BASE,
        className
      )}
    >
      <Typography variant="body-xl" as="span" className="text-white">
        Discover Our Projects
      </Typography>
    </Link>
  );
}
