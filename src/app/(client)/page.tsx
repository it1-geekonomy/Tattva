import Typography from "@/lib/Typography";

const variants = [
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
] as const;

export default function ClientPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <Typography
        variant="display-3xl"
        as="h1"
        className="mb-8 font-bold text-orange-500"
      >
        Welcome to Tattva
      </Typography>

      <div className="flex flex-col gap-4">
        {variants.map((variant) => (
          <div key={variant} className="border-b border-neutral-200 pb-3">
            <p className="mb-1 text-[10px] tracking-wide text-neutral-400 uppercase">
              {variant}
            </p>
            <Typography variant={variant}>
              The quick brown fox jumps over the lazy dog
            </Typography>
          </div>
        ))}
      </div>
    </main>
  );
}
