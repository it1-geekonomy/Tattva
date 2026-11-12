import Image from "next/image";
import Typography from "@/lib/Typography";
import { SERVICES_SECTION } from "@/domains/home/constants/home";
import ServicesList from "@/domains/home/components/ServicesList";

export default function ServicesSection() {
  const { eyebrow, heading, image } = SERVICES_SECTION;

  return (
    <section className="w-full bg-[#67182E] pt-16 lg:pt-25">
      <div className="mx-auto w-full max-w-[90rem] px-4 pb-16 sm:px-6 lg:px-8 lg:pb-25 2xl:max-w-[97.5rem]">
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

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12 lg:items-stretch lg:gap-x-8">
          <ServicesList />

          <div className="relative order-first aspect-[4/3] w-full overflow-hidden sm:aspect-video lg:order-none lg:col-span-5 lg:col-start-8 lg:aspect-auto lg:h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
