import Typography from "@/lib/Typography";
import { WAY_WE_WORK_VIDEO } from "@/domains/home/constants/home";
import WayWeWorkVideo from "@/domains/home/components/WayWeWorkVideo";

export default function WayWeWorkVideoSection() {
  return (
    <section className="w-full bg-[#FFFFFF] pt-8 lg:pt-28">
      <div className="w-full px-3 lg:px-[6.25vw]">
        <div className="flex w-full items-center gap-4">
          <Typography
            variant="body-lg"
            className="shrink-0 text-left font-medium text-[#AC2A4E] uppercase"
          >
            {WAY_WE_WORK_VIDEO.eyebrow}
          </Typography>
          <span aria-hidden="true" className="h-px flex-1 bg-[#D9D9D9]" />
        </div>

        <div className="mt-6 lg:mt-9">
          <WayWeWorkVideo />
        </div>
      </div>
    </section>
  );
}
