import {
  FIRST_PANEL_LEFT,
  WORDMARK_LEFT,
  WORDMARK_LH,
  WORDMARK_SIZE,
  WORDMARK_TOP,
} from "@/domains/home/constants/hero";
import { fontMontblanc } from "@/lib/fonts";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

export default function HeroWordmark() {
  const wordmarkStyle = {
    fontSize: WORDMARK_SIZE,
    lineHeight: `${WORDMARK_LH / 16}rem`,
  } as const;

  return (
    <>
      <Typography
        variant="hero"
        as="span"
        aria-hidden
        className={cn(
          fontMontblanc,
          "pointer-events-none absolute z-[1] whitespace-nowrap text-tattva-ink select-none tracking-normal"
        )}
        style={{
          left: WORDMARK_LEFT,
          top: WORDMARK_TOP,
          ...wordmarkStyle,
        }}
      >
        Tattva
      </Typography>

      <div
        aria-hidden
        className="pointer-events-none absolute z-[10] overflow-hidden whitespace-nowrap select-none"
        style={{
          left: FIRST_PANEL_LEFT,
          top: WORDMARK_TOP,
          width: 800,
          ...wordmarkStyle,
        }}
      >
        <Typography
          variant="hero"
          as="span"
          className={cn(
            fontMontblanc,
            "inline-block whitespace-nowrap tracking-normal text-white"
          )}
          style={{
            marginLeft: WORDMARK_LEFT - FIRST_PANEL_LEFT,
            ...wordmarkStyle,
          }}
        >
          Tattva
        </Typography>
      </div>
    </>
  );
}
