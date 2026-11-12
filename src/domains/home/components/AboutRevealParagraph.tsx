"use client";

import { useMemo, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";
import {
  ABOUT_REVEAL_ACTIVE,
  ABOUT_REVEAL_MUTED,
} from "@/domains/home/constants/about";

gsap.registerPlugin(useGSAP);

type AboutRevealParagraphProps = {
  text: string;
  className?: string;
};

function splitWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean);
}

/**
 * Gray text sits fully visible. When the block enters view, black fills
 * word-by-word in one smooth wave (plays once — not scroll-scrubbed).
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

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(wordNodes, { color: ABOUT_REVEAL_ACTIVE });
        return;
      }

      gsap.set(wordNodes, { color: ABOUT_REVEAL_MUTED });

      let played = false;
      const play = () => {
        if (played) return;
        played = true;
        gsap.to(wordNodes, {
          color: ABOUT_REVEAL_ACTIVE,
          duration: 1.15,
          stagger: 0.05,
          ease: "power2.out",
        });
      };

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            play();
            observer.disconnect();
          }
        },
        { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
      );

      observer.observe(root);
      return () => observer.disconnect();
    },
    { dependencies: [text], revertOnUpdate: true }
  );

  return (
    <div ref={rootRef} className={cn("w-full max-w-[1367px]", className)}>
      <Typography
        variant="display-xl"
        as="p"
        className="text-pretty font-medium leading-[1.45] text-black sm:leading-[1.55] lg:leading-[1.6]"
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
