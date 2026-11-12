import Typography from "@/lib/Typography";
import { SERVICES_SECTION } from "@/domains/home/constants/home";
import ServicesShowcase from "@/domains/home/components/ServicesShowcase";

export default function ServicesSection() {
  const { eyebrow, heading } = SERVICES_SECTION;

  return (
    <section className="w-full bg-[#67182E] pt-16 lg:pt-25">
      <div className="w-full px-4 pb-16 sm:px-6 lg:px-20 lg:pb-25">
        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-7 lg:gap-8">
            <Typography
              variant="body-lg"
              className="font-manrope text-left font-medium text-[#FFFFFF] uppercase"
            >
              {eyebrow}
            </Typography>
            <Typography
              variant="section"
              as="h2"
              className="font-manrope text-left font-medium text-[#FFFFFF]"
            >
              {heading}
            </Typography>
          </div>
        </div>

        <ServicesShowcase />
      </div>
    </section>
  );
}
