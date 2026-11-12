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
          "mx-auto flex w-full max-w-[1680px] flex-col",
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

          <div className="relative lg:pr-[13.5rem]">
            <div className={cn("flex flex-col", ABOUT_FLUID.rowsGap)}>
              {ABOUT_STATS.map((stat) => (
                <AboutStatRow key={stat.label} stat={stat} />
              ))}
            </div>

            {/* Mobile: full-width CTA like hero DiscoverCta; desktop: bottom-right */}
            <div className="mt-8 flex justify-start sm:mt-10 lg:mt-0 lg:absolute lg:right-0 lg:bottom-0">
              <KnowMoreCta className="h-12 w-full max-w-[280px] min-w-0 sm:h-[59px] sm:w-auto sm:min-w-[181px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
