"use client";

import { Minus, Plus } from "lucide-react";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/domains/home/constants/faq";

type FaqAccordionItemProps = {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
};

/**
 * One FAQ row — button header + animated answer panel.
 * Height uses CSS grid 0fr→1fr so layout stays accessible without measuring.
 */
export default function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: FaqAccordionItemProps) {
  const panelId = `faq-panel-${item.id}`;
  const buttonId = `faq-button-${item.id}`;

  return (
    <div className="border-b border-black/10">
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={cn(
            "flex w-full items-start justify-between gap-6 py-5 text-left transition-opacity sm:py-6 lg:py-7",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          )}
        >
          <Typography
            variant="h2"
            as="span"
            className="flex-1 font-normal leading-[1.4] text-[#5A5A5A]"
          >
            {item.question}
          </Typography>
          <span
            aria-hidden="true"
            className="mt-1 flex size-6 shrink-0 items-center justify-center text-[#5A5A5A]"
          >
            {isOpen ? (
              <Minus strokeWidth={1.5} className="size-5" />
            ) : (
              <Plus strokeWidth={1.5} className="size-5" />
            )}
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <Typography
            variant="body-lg"
            as="p"
            className="pb-5 font-normal leading-[1.6] text-[#8A8A8A] sm:pb-6 lg:pb-7"
          >
            {item.answer}
          </Typography>
        </div>
      </div>
    </div>
  );
}
