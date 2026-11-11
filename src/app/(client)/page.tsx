import Typography, { type TypographyVariant } from "@/lib/Typography";

const variants: TypographyVariant[] = [
  "display-3xl",
  "display-2xl",
  "display-xl",
  "h1",
  "h2",
  "h3",
  "h4",
  "body-xl",
  "body-lg",
  "body-sm",
  "caption",
  "overline",
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
        {variants.map((variant) => (
          <div key={variant} className="border-b border-neutral-200 pb-6">
            <p className="mb-2 text-[10px] font-medium tracking-[0.14em] text-neutral-400 uppercase">
              {variant}
            </p>
            <Typography variant={variant}>{SAMPLE}</Typography>
          </div>
        ))}
      </div>
    </main>
  );
}
