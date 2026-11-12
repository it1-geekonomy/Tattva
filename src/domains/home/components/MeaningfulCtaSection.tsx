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
      <div
        className={cn(
          "relative mx-auto w-full max-w-[1680px]",
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
                sizes="(min-width: 1024px) 18vw, 0px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div
          className={cn(
            "relative z-10 mx-auto flex h-full w-full flex-col items-center justify-center text-center",
            CTA_FLUID.contentMaxW,
            CTA_FLUID.contentGap,
            "px-4 py-10 sm:px-6 sm:py-12 lg:py-16"
          )}
        >
          <Typography
            variant="display-heading"
            as="h2"
            id="lets-create-heading"
            className="w-full text-center font-medium leading-[1.15] tracking-[-0.02em] text-[#0B0B0B]"
          >
            {CTA_HEADING}
          </Typography>

          <Typography
            variant="body-xl"
            as="p"
            className={cn(
              "w-full text-center font-medium leading-[1.6] text-[#313131]",
              CTA_FLUID.bodyMaxW
            )}
          >
            {CTA_DESCRIPTION}
          </Typography>

          <GetInTouchCta className="mt-1 w-full max-w-[280px] sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
