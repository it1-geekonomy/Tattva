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
  CTA_MQ,
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

      const reduceMotion = window.matchMedia(CTA_MQ.reduceMotion).matches;

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
      <div
        className={cn(
          "relative mx-auto flex w-full flex-col items-center justify-center",
          CTA_FLUID.stageMaxW,
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
                sizes={CTA_FLUID.imageSizes}
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div
          className={cn(
            "relative z-10 mx-auto flex w-full flex-col items-center justify-center text-center",
            CTA_FLUID.contentMaxW,
            CTA_FLUID.contentPad,
            CTA_FLUID.contentGap,
            CTA_FLUID.oneLineMax
          )}
        >
          <div
            className={cn(
              "flex w-full flex-col items-center",
              CTA_FLUID.copyGap
            )}
          >
            <Typography
              variant="display-heading"
              as="h2"
              id="lets-create-heading"
              className={cn(
                "mx-auto w-full text-center text-3xl font-medium leading-tight tracking-normal sm:text-4xl lg:text-5xl 2xl:text-6xl",
                CTA_FLUID.ink,
                CTA_FLUID.oneLineText
              )}
            >
              Let’s create something{" "}
              <br
                className={cn("hidden sm:inline", CTA_FLUID.oneLineHideBr)}
              />
              meaningful
            </Typography>

            <Typography
              variant="body-xl"
              as="p"
              className={cn(
                "w-full text-center text-base font-medium leading-relaxed tracking-normal sm:text-lg lg:text-xl",
                CTA_FLUID.muted,
                CTA_FLUID.bodyMaxW
              )}
            >
              {CTA_DESCRIPTION}
            </Typography>
          </div>

          <GetInTouchCta className="w-full max-w-xs sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
