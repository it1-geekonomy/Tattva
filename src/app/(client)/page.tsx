import Typography from "@/lib/Typography";

export default function ClientPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
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