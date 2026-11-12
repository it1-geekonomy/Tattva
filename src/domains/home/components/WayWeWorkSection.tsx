"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";
import WorkStepCard from "@/domains/home/components/WorkStepCard";
import WorkStepRail from "@/domains/home/components/WorkStepRail";
import {
  WORK_EYEBROW,
  WORK_FLUID,
  WORK_STEPS,
} from "@/domains/home/constants/work";

gsap.registerPlugin(useGSAP);

/**
 * “The Way We Work” — 3 equal columns.
 * Desktop: each column completes as one beat — line + image together,
 * then the next column (slower line so both finish in sync).
 * Mobile/tablet: same pairing per stacked step.
 */
export default function WayWeWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const desktopLines = section.querySelectorAll<HTMLElement>(
        '[data-work-line="desktop"]'
      );
      const mobileLines = section.querySelectorAll<HTMLElement>(
        '[data-work-line="mobile"]'
      );
      const images = section.querySelectorAll<HTMLElement>("[data-work-image]");
      if (images.length === 0) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set([desktopLines, mobileLines], { scaleX: 1 });
        gsap.set(images, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set([desktopLines, mobileLines], {
        scaleX: 0,
        transformOrigin: "left center",
      });
      gsap.set(images, { autoAlpha: 0, y: -30 });

      let played = false;

      /**
       * Per column: line + image run together (same start/duration),
       * then move to the next column. Slower line so the pair feels complete.
       */
      const playPaired = (
        lines: NodeListOf<HTMLElement> | HTMLElement[],
        imgs: NodeListOf<HTMLElement> | HTMLElement[],
        duration: number
      ) => {
        const tl = gsap.timeline();
        const count = Math.min(lines.length, imgs.length);

        for (let i = 0; i < count; i += 1) {
          const at = tl.duration();
          tl.to(
            lines[i],
            { scaleX: 1, duration, ease: "none" },
            at
          ).to(
            imgs[i],
            { autoAlpha: 1, y: 0, duration, ease: "power2.out" },
            at
          );
        }

        return tl;
      };

      const playDesktop = () => playPaired(desktopLines, images, 0.95);

      const playMobile = () => playPaired(mobileLines, images, 0.8);

      const play = () => {
        if (played) return;
        played = true;
        const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
        if (isDesktop) playDesktop();
        else playMobile();
      };

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            play();
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(section);

      return () => {
        observer.disconnect();
      };
    },
    { dependencies: [], revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      id="the-way-we-work"
      aria-labelledby="way-we-work-heading"
      className={cn(
        "relative w-full bg-white",
        WORK_FLUID.sectionPadX,
        WORK_FLUID.sectionPadY
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1680px] flex-col",
          WORK_FLUID.eyebrowGap
        )}
      >
        <Typography
          variant="micro"
          as="p"
          id="way-we-work-heading"
          className="font-medium uppercase leading-[1.6] tracking-normal text-[#AC2A4E]"
        >
          {WORK_EYEBROW}
        </Typography>

        <div className={cn("flex flex-col", WORK_FLUID.stackGap)}>
          <WorkStepRail />

          <div
            className={cn(
              "grid grid-cols-1 lg:grid-cols-3",
              WORK_FLUID.columnGap
            )}
          >
            {WORK_STEPS.map((step) => (
              <WorkStepCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
