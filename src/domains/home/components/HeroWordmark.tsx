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

const rem = (value: number) => `${value / 16}rem`;

export default function HeroWordmark() {
  const wordmarkStyle = {
    fontSize: rem(WORDMARK_SIZE),
    lineHeight: rem(WORDMARK_LH),
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
          left: rem(WORDMARK_LEFT),
          top: rem(WORDMARK_TOP),
          ...wordmarkStyle,
        }}
      >
        Tattva
      </Typography>

      <div
        aria-hidden
        className="pointer-events-none absolute z-[10] overflow-hidden whitespace-nowrap select-none"
        style={{
          left: rem(FIRST_PANEL_LEFT),
          top: rem(WORDMARK_TOP),
          width: rem(800),
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
            marginLeft: rem(WORDMARK_LEFT - FIRST_PANEL_LEFT),
            ...wordmarkStyle,
          }}
        >
          Tattva
        </Typography>
      </div>
    </>
  );
}
