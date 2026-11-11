import Typography, { type TypographyVariant } from "@/lib/Typography";

const variants: { variant: TypographyVariant; size: string }[] = [
  { variant: "hero", size: "72px" },
  { variant: "display-3xl", size: "64px" },
  { variant: "display-heading", size: "56px" },
  { variant: "stat", size: "51px" },
  { variant: "display-2xl", size: "48px" },
  { variant: "display-mobile", size: "44px" },
  { variant: "section", size: "39px" },
  { variant: "display-xl", size: "36px" },
  { variant: "project", size: "34px" },
  { variant: "subtitle", size: "29px" },
  { variant: "h1", size: "28px" },
  { variant: "card", size: "26px" },
  { variant: "h2", size: "24px" },
  { variant: "h3", size: "20px" },
  { variant: "body-xl", size: "18px" },
  { variant: "body-lg", size: "16px" },
  { variant: "caption", size: "15px" },
  { variant: "body-sm", size: "14px" },
  { variant: "micro", size: "13px" },
  { variant: "overline", size: "12px" },
];

const SAMPLE = "The quick brown fox jumps over the lazy dog";

export default function ClientPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 sm:px-8">
      <Typography
        variant="display-3xl"
        as="h1"
        className="mb-10 font-bold text-orange-500"
      >
        Welcome to Tattva
      </Typography>

      <div className="flex flex-col gap-8">
        {variants.map(({ variant, size }) => (
          <div key={variant} className="border-b border-neutral-200 pb-6">
            <p className="mb-2 text-[10px] font-medium tracking-[0.14em] text-neutral-400 uppercase">
              {variant} · {size}
            </p>
            <Typography variant={variant}>
              {variant === "hero" ? "Tattva" : SAMPLE}
            </Typography>
          </div>
        ))}
      </div>
    </main>
  );
}
