import Typography from "@/lib/Typography";
import { TESTIMONIALS_SECTION } from "@/domains/home/constants/home";
import TestimonialSlider from "@/domains/home/components/TestimonialSlider";

export default function TestimonialsSection() {
  const { eyebrow, heading } = TESTIMONIALS_SECTION;

  return (
    <section className="w-full bg-[#FFFFFF] pt-16 lg:pt-40">
      <div className="w-full px-3 lg:px-[6.25vw]">
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <Typography
            variant="body-lg"
            className="text-left font-medium text-[#AC2A4E] uppercase"
          >
            {eyebrow}
          </Typography>
          <Typography
            variant="section"
            as="h2"
            className="text-left font-medium text-[#0B0B0B]"
          >
            {heading}
          </Typography>
        </div>

        <div className="mt-10 lg:mt-21">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
}
