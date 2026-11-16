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
        scale: CTA_FLOAT_MOTION.scaleFrom,
        opacity: CTA_FLOAT_MOTION.opacityFrom,
        transformOrigin: "center center",
      });

      const tween = gsap.to(floats, {
        scale: CTA_FLOAT_MOTION.scaleTo,
        opacity: CTA_FLOAT_MOTION.opacityTo,
        duration: CTA_FLOAT_MOTION.duration,
        ease: CTA_FLOAT_MOTION.ease,
        yoyo: true,
        repeat: -1,
        paused: true,
      });

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.some((entry) => entry.isIntersecting);
          if (visible) tween.play();
          else tween.pause();
        },
        { threshold: 0.2 }
      );

      observer.observe(section);

      return () => {
        observer.disconnect();
        tween.kill();
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
        @media (min-width: 1700px) {
          .cta-heading-responsive {
            white-space: nowrap !important;
          }
          .cta-heading-responsive br {
            display: none !important;
          }
          .cta-content-responsive {
            max-width: 1036px !important;
          }
        }
      `}</style>

      <div
        className={cn(
          "relative mx-auto flex w-full max-w-[1920px] flex-col items-center justify-center",
          CTA_FLUID.stageMinH
        )}
      >
        {/* Decorative floats — lg+ only so copy stays unobstructed on small screens.
            Scale the whole card (matches reference video), not an inner crop. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
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
                sizes="(min-width: 1536px) 134px, (min-width: 1280px) 104px, 88px"
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
            "gap-8 sm:gap-10 lg:gap-12 2xl:gap-[48px]",
            "px-4 pb-8 pt-8 sm:px-6 sm:pt-10 lg:pt-12 2xl:pt-14"
          )}
        >
          {/* Heading + description with exact 32px gap */}
          <div className="flex w-full flex-col items-center gap-5 sm:gap-6 lg:gap-[32px]">
            <Typography
              variant="display-heading"
              as="h2"
              id="lets-create-heading"
              className="cta-heading-responsive mx-auto w-full text-center font-medium tracking-normal text-[#0B0B0B] text-[30px] sm:text-[36px] lg:text-[44px] xl:text-[52px] 2xl:text-[64px] leading-[1.2] sm:leading-[1.25] 2xl:leading-[1.3]"
            >
              Let’s create something <br className="hidden sm:inline" />
              meaningful
            </Typography>

            <Typography
              variant="body-xl"
              as="p"
              className={cn(
                "w-full text-center font-medium tracking-normal text-[#313131] text-[16px] leading-[1.6] sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25.56px]",
                CTA_FLUID.bodyMaxW
              )}
            >
              {CTA_DESCRIPTION}
            </Typography>
          </div>

          <GetInTouchCta className="w-full max-w-[280px] sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
