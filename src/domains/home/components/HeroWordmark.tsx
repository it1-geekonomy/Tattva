import { HERO_WORDMARK } from "@/domains/home/constants/hero";
import { fontMontblanc } from "@/lib/fonts";
import Typography from "@/lib/Typography";
import { cn } from "@/lib/utils";

export default function HeroWordmark() {
  return (
    <>
      <Typography
        variant="hero"
        as="span"
        aria-hidden
        className={cn(fontMontblanc, HERO_WORDMARK.base)}
      >
        Tattva
      </Typography>

      <div aria-hidden className={HERO_WORDMARK.clip}>
        <Typography
          variant="hero"
          as="span"
          className={cn(fontMontblanc, HERO_WORDMARK.clipText)}
        >
          Tattva
        </Typography>
      </div>
    </>
  );
}
