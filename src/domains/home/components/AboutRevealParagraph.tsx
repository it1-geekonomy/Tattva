"use client";

import { useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ABOUT_REVEAL_ACTIVE,
  ABOUT_REVEAL_MUTED,
} from "@/domains/home/constants/about";
import {
  ABOUT_REVEAL_MAX_W,
  MQ,
} from "@/domains/home/constants/breakpoints";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type AboutRevealParagraphProps = {
  text: string;
  className?: string;
};

function splitWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean);
}

/**
 * Muted copy sits first. Black fills word-by-word as the paragraph
 * scrolls through the viewport.
 */
export default function AboutRevealParagraph({
  text,
  className,
}: AboutRevealParagraphProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const words = useMemo(() => splitWords(text), [text]);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const wordNodes = root.querySelectorAll<HTMLElement>("[data-about-word]");
      if (wordNodes.length === 0) return;

      const reduceMotion = window.matchMedia(MQ.reduceMotion).matches;

      if (reduceMotion) {
        gsap.set(wordNodes, { color: ABOUT_REVEAL_ACTIVE });
        return;
      }

      gsap.set(wordNodes, { color: ABOUT_REVEAL_MUTED });

      gsap.to(wordNodes, {
        color: ABOUT_REVEAL_ACTIVE,
        ease: "none",
        stagger: 0.12,
        scrollTrigger: {
          trigger: root,
          start: "top 78%",
          end: "bottom 42%",
          scrub: 0.45,
        },
      });
    },
    { dependencies: [text], revertOnUpdate: true }
  );

  return (
    <div ref={rootRef} className={cn("w-full", ABOUT_REVEAL_MAX_W, className)}>
      <Typography
        variant="display-xl"
        as="p"
        className="text-pretty font-medium leading-snug tracking-tight text-foreground sm:leading-normal lg:leading-relaxed"
        aria-label={text}
      >
        {words.map((word, index) => (
          <span key={`${word}-${index}`}>
            <span
              data-about-word
              className="inline will-change-[color]"
              style={{ color: ABOUT_REVEAL_MUTED }}
            >
              {word}
            </span>
            {index < words.length - 1 ? " " : null}
          </span>
        ))}
      </Typography>
    </div>
  );
}
