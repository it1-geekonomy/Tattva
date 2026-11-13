"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Typography from "@/lib/Typography";
import { TESTIMONIALS, TESTIMONIALS_SECTION } from "@/domains/home/constants/home";

const arrowButtonClass =
  "flex size-11 items-center justify-center bg-[#000000] transition-colors disabled:cursor-default disabled:bg-[#CACACA]";

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

      <div className="flex w-full flex-col justify-between gap-10 md:col-span-13 md:col-start-12 lg:col-span-14 lg:col-start-11">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Typography
              variant="card"
              as="p"
              className="text-left font-medium text-[#575757]"
            >
              {testimonial.quote}
            </Typography>
          </motion.div>
        </AnimatePresence>

        <div className="flex w-full items-end justify-between gap-6">
          <div className="flex items-end gap-4">
            <div className="relative h-20 w-21 shrink-0 bg-[#D9D9D9]">
              <Image
                src={testimonial.avatar.src}
                alt={testimonial.avatar.alt}
                fill
                sizes="84px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <Typography
                variant="h2"
                as="p"
                className="text-left font-medium text-[#000000] uppercase"
              >
                {testimonial.name}
              </Typography>
              <Typography
                variant="caption"
                as="span"
                className="text-left font-medium text-[#575757]"
              >
                {testimonial.project}
              </Typography>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label={TESTIMONIALS_SECTION.previousLabel}
              disabled={isFirst}
              onClick={() => setIndex((current) => current - 1)}
              className={arrowButtonClass}
            >
              <ArrowLeft aria-hidden="true" strokeWidth={1.5} className="size-6 text-[#FFFFFF]" />
            </button>
            <button
              type="button"
              aria-label={TESTIMONIALS_SECTION.nextLabel}
              disabled={isLast}
              onClick={() => setIndex((current) => current + 1)}
              className={arrowButtonClass}
            >
              <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-6 text-[#FFFFFF]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
