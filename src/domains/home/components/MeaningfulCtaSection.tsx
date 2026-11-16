"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";
import GetInTouchCta from "@/domains/home/components/GetInTouchCta";
import {
  CTA_DESCRIPTION,
  CTA_FLOAT_IMAGES,
  CTA_FLOAT_MOTION,
  CTA_FLUID,
  CTA_HEADING,
} from "@/domains/home/constants/cta";

gsap.registerPlugin(useGSAP);

/**
 * Closing CTA — centered copy + four floating images.
 * Floats pulse scale + opacity together (GSAP), pause off-screen,
 * and stay static when prefers-reduced-motion is on.
 */
export default function MeaningfulCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const floats = section.querySelectorAll<HTMLElement>("[data-cta-float]");
      if (floats.length === 0) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(floats, {
          scale: CTA_FLOAT_MOTION.scaleFrom,
          opacity: CTA_FLOAT_MOTION.opacityTo,
        });
        return;
      }

      gsap.set(floats, {
        scale: 0.86,
        opacity: 0,
        transformOrigin: "center center",
      });

      const pulse = gsap.to(floats, {
        scale: CTA_FLOAT_MOTION.scaleTo,
        opacity: CTA_FLOAT_MOTION.opacityTo,
        duration: CTA_FLOAT_MOTION.duration,
        ease: CTA_FLOAT_MOTION.ease,
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.28, from: "start" },
        paused: true,
      });

      const intro = gsap.to(floats, {
        scale: CTA_FLOAT_MOTION.scaleFrom,
        opacity: CTA_FLOAT_MOTION.opacityFrom,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        paused: true,
        onComplete: () => {
          pulse.play();
        },
      });

      let started = false;
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.some((entry) => entry.isIntersecting);
          if (visible) {
            if (!started) {
              started = true;
              intro.play();
            } else {
              pulse.play();
            }
          } else {
            pulse.pause();
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(section);

      return () => {
        observer.disconnect();
        intro.kill();
        pulse.kill();
      };
    },
    { dependencies: [], revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      id="lets-create"
      aria-labelledby="lets-create-heading"
      className={cn(
        "relative w-full overflow-hidden bg-white",
        CTA_FLUID.sectionPadX,
        CTA_FLUID.sectionPadY
      )}
    >
      {/* Self-contained responsive rules: 2 lines below 1700px, 1 line at 1700px+ */}
      <style>{`
        @media (min-width: 106.25rem) {
          .cta-heading-responsive {
            white-space: nowrap !important;
          }
          .cta-heading-responsive br {
            display: none !important;
          }
          .cta-content-responsive {
            max-width: 64.75rem !important;
          }
        }
      `}</style>

      <div
        className={cn(
          "relative mx-auto flex w-full max-w-[120rem] flex-col items-center justify-center",
          CTA_FLUID.stageMinH
        )}
      >
        {/* Decorative floats — staggered on mobile/tablet + desktop (scale pulse). */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {CTA_FLOAT_IMAGES.map((image) => (
            <div
              key={image.id}
              data-cta-float
              className={cn(
                "absolute overflow-hidden will-change-transform",
                image.frameClassName
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 96rem) 8.375rem, (min-width: 80rem) 6.5rem, (min-width: 64rem) 5.5rem, 5.875rem"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div
          className={cn(
            "cta-content-responsive relative z-10 mx-auto flex w-full flex-col items-center justify-center text-center",
            CTA_FLUID.contentMaxW,
            CTA_FLUID.contentPad,
            "gap-8 sm:gap-10 lg:gap-12 2xl:gap-[3rem]"
          )}
        >
          {/* Heading + description */}
          <div className="flex w-full flex-col items-center gap-5 sm:gap-6 lg:gap-[2rem]">
            <Typography
              variant="display-heading"
              as="h2"
              id="lets-create-heading"
              className="cta-heading-responsive mx-auto w-full text-center font-medium tracking-normal text-[#0B0B0B] text-[1.875rem] leading-[1.2] sm:text-[2.25rem] sm:leading-[1.25] lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[4rem] 2xl:leading-[1.3]"
            >
              Let’s create something <br className="hidden sm:inline" />
              meaningful
            </Typography>

            <Typography
              variant="body-xl"
              as="p"
              className={cn(
                "w-full text-center font-medium tracking-normal text-[#313131] text-[1rem] leading-[1.6] sm:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.375rem] 2xl:text-[1.5975rem]",
                CTA_FLUID.bodyMaxW
              )}
            >
              {CTA_DESCRIPTION}
            </Typography>
          </div>

          <GetInTouchCta className="w-full max-w-[17.5rem] sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
