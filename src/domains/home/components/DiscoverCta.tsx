import Link from "next/link";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

export default function DiscoverCta({ className }: { className?: string }) {
  return (
    <Link
      href="#projects"
      className={cn(
        "hero-cta inline-flex h-[59px] min-w-[238px] items-center justify-center px-[9px] pt-1.5 pb-[9px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tattva-ink",
        className
      )}
    >
      <Typography variant="body-xl" as="span" className="text-white">
        Discover Our Projects
      </Typography>
    </Link>
  );
}
