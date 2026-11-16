import Link from "next/link";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

export default function DiscoverCta({ className }: { className?: string }) {
  return (
    <Link
      href="#projects"
      className={cn(
        "hero-cta inline-flex h-[3.6875rem] min-w-[14.875rem] items-center justify-center px-[0.5625rem] pt-1.5 pb-[0.5625rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tattva-ink",
        className
      )}
    >
      <Typography variant="body-xl" as="span" className="text-white">
        Discover Our Projects
      </Typography>
    </Link>
  );
}
