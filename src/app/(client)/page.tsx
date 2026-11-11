import Typography from "@/lib/Typography";

export default function ClientPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 sm:px-8">
      <Typography
        variant="display-3xl"
        as="h1"
        className="font-bold text-orange-500"
      >
        Welcome to Tattva
      </Typography>
    </main>
  );
}
