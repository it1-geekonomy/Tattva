import AboutRevealParagraph from "@/domains/home/components/AboutRevealParagraph";
import AboutStatRow from "@/domains/home/components/AboutStatRow";
import KnowMoreCta from "@/domains/home/components/KnowMoreCta";
import {
  ABOUT_EYEBROW,
  ABOUT_FLUID,
  ABOUT_STATEMENT,
  ABOUT_STATS,
} from "@/domains/home/constants/about";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

/**
 * Home About Us block — IHDUA-style domain section composed of small parts.
 * Mobile spacing mirrors hero `FLUID`; desktop keeps Figma scale.
 */
export default function AboutSection() {
  return (
    <section
      id="about-us"
      aria-labelledby="about-us-heading"
      className={cn(
        "relative w-full bg-white",
        ABOUT_FLUID.sectionPadX,
        ABOUT_FLUID.sectionPadY
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-[105rem] flex-col",
          ABOUT_FLUID.eyebrowGap
        )}
      >
        <Typography
          variant="body-lg"
          as="p"
          id="about-us-heading"
          className="font-medium uppercase leading-[1.6] tracking-normal text-[#AC2A4E]"
        >
          {ABOUT_EYEBROW}
        </Typography>

        <div className={cn("flex flex-col", ABOUT_FLUID.blockGap)}>
          <AboutRevealParagraph text={ABOUT_STATEMENT} />

          <div className="flex flex-col gap-10 sm:gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10 xl:gap-16">
            <div className={cn("flex min-w-0 flex-1 flex-col", ABOUT_FLUID.rowsGap)}>
              {ABOUT_STATS.map((stat) => (
                <AboutStatRow key={stat.label} stat={stat} />
              ))}
            </div>

            {/* Centered below stats on mobile/tablet; right of stats from lg up */}
            <KnowMoreCta className="mx-auto h-12 w-full max-w-xs min-w-0 shrink-0 self-center sm:h-14 sm:w-auto sm:min-w-48 lg:mx-0 lg:self-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
