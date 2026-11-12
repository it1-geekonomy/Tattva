import Typography from "@/lib/Typography";
import {
  FIRST_PANEL_LEFT,
  WORDMARK_LEFT,
  WORDMARK_LH,
  WORDMARK_SIZE,
  WORDMARK_TOP,
} from "@/domains/home/constants/hero";

export default function HeroWordmark() {
  const wordmarkStyle = {
    fontSize: WORDMARK_SIZE,
    lineHeight: `${WORDMARK_LH}px`,
  } as const;

  return (
    <>
      <Typography
        variant="hero"
        as="span"
        aria-hidden
        className="pointer-events-none absolute z-[1] whitespace-nowrap text-tattva-ink select-none tracking-normal"
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
          className="inline-block whitespace-nowrap text-white tracking-normal"
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
