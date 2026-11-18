"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Typography from "@/lib/Typography";
import { TESTIMONIALS, TESTIMONIALS_SECTION } from "@/domains/home/constants/home";

const arrowButtonClass =
  "flex size-9 items-center justify-center md:size-11 bg-[#000000] transition-colors disabled:cursor-default disabled:bg-[#CACACA]";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const testimonial = TESTIMONIALS[index];
  const isFirst = index === 0;
  const isLast = index === TESTIMONIALS.length - 1;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-24 md:gap-x-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative w-full md:col-span-10 lg:col-span-9"
        >
          {/* Keeps the image at least 624:426; if the text column is taller,
              the image stretches to match it so neither side sticks out. */}
          <div aria-hidden="true" className="aspect-[624/426] w-full" />
          <Image
            src={testimonial.image.src}
            alt={testimonial.image.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative flex w-full flex-col md:col-span-13 md:col-start-12 lg:col-span-14 lg:col-start-11">
        {/* All testimonials sit in the same grid cell; only the active one is
            visible. The box is always as tall as the longest testimonial, so
            the author row and arrows never jump when switching. */}
        <div className="grid flex-1">
          {TESTIMONIALS.map((item, itemIndex) => {
            const isActive = itemIndex === index;

            return (
              <div
                key={item.id}
                aria-hidden={!isActive}
                className={`flex flex-col justify-between gap-10 transition-opacity duration-400 [grid-area:1/1] ${
                  isActive ? "opacity-100" : "invisible opacity-0"
                }`}
              >
                <Typography
                  variant="card"
                  as="p"
                  className="text-left font-medium text-[#575757]"
                >
                  {item.quote}
                </Typography>

                <div className="flex items-end gap-3 pr-20 md:gap-4 md:pr-26">
                  <div className="relative size-16 shrink-0 bg-[#D9D9D9] md:h-20 md:w-21">
                    <Image
                      src={item.avatar.src}
                      alt={item.avatar.alt}
                      fill
                      sizes="84px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <Typography
                      variant="h2"
                      as="p"
                      className="text-left font-medium text-[#000000] uppercase"
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      as="span"
                      className="text-left font-medium text-[#575757]"
                    >
                      {item.project}
                    </Typography>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrows stay fixed at the bottom-right, outside the switching content. */}
        <div className="absolute right-0 bottom-0 flex items-center gap-2">
          <button
            type="button"
            aria-label={TESTIMONIALS_SECTION.previousLabel}
            disabled={isFirst}
            onClick={() => setIndex((current) => current - 1)}
            className={arrowButtonClass}
          >
            <ArrowLeft aria-hidden="true" strokeWidth={1.5} className="size-5 text-[#FFFFFF] md:size-6" />
          </button>
          <button
            type="button"
            aria-label={TESTIMONIALS_SECTION.nextLabel}
            disabled={isLast}
            onClick={() => setIndex((current) => current + 1)}
            className={arrowButtonClass}
          >
            <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-5 text-[#FFFFFF] md:size-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
