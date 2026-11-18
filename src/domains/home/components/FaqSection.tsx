"use client";

import { useState } from "react";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";
import FaqAccordionItem from "@/domains/home/components/FaqAccordionItem";
import {
  FAQ_DESCRIPTION,
  FAQ_EYEBROW,
  FAQ_FLUID,
  FAQ_HEADING,
  FAQ_ITEMS,
} from "@/domains/home/constants/faq";

/**
 * Home FAQ — two columns on desktop (intro + accordion), stacked on mobile.
 * Only one item open at a time; all closed by default.
 */
export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={cn(
        "relative w-full bg-white",
        FAQ_FLUID.sectionPadX,
        FAQ_FLUID.sectionPadY
      )}
    >
      <div
        className={cn(
          "mx-auto grid w-full grid-cols-1 lg:grid-cols-12",
          FAQ_FLUID.sectionMaxW,
          FAQ_FLUID.columnGap
        )}
      >
        <div
          className={cn(
            "flex flex-col lg:col-span-5",
            FAQ_FLUID.introGap
          )}
        >
          <Typography
            variant="body-lg"
            as="p"
            className={FAQ_FLUID.eyebrow}
          >
            {FAQ_EYEBROW}
          </Typography>

          <Typography
            variant="section"
            as="h2"
            id="faq-heading"
            className={cn("font-medium", FAQ_FLUID.ink)}
          >
            {FAQ_HEADING}
          </Typography>

          <Typography
            variant="body-lg"
            as="p"
            className={cn(
              "max-w-md font-normal leading-relaxed",
              FAQ_FLUID.muted
            )}
          >
            {FAQ_DESCRIPTION}
          </Typography>
        </div>

        <div className="lg:col-span-7">
          <div className="border-t border-foreground/10">
            {FAQ_ITEMS.map((item) => (
              <FaqAccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() =>
                  setOpenId((current) =>
                    current === item.id ? null : item.id
                  )
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
