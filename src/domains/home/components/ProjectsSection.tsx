import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/Typography";
import { PROJECTS, PROJECTS_SECTION } from "@/domains/home/constants/home";
import ProjectCard from "@/domains/home/components/ProjectCard";

// How far each card's sticky area stretches below its own photo, indexed by
// the number of photos after it. Supports up to 5 projects.
const TRACK_BOTTOM = [
  "md:bottom-0",
  "md:-bottom-full",
  "md:-bottom-[200%]",
  "md:-bottom-[300%]",
  "md:-bottom-[400%]",
];

export default function ProjectsSection() {
  const { eyebrow, heading, description, cta } = PROJECTS_SECTION;

  return (
    <section className="w-full bg-[#FFFCF8] pt-16 lg:pt-18">
      <div className="w-full px-3 lg:px-[6.25vw]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <div className="flex flex-col gap-6 lg:col-span-7 lg:gap-9">
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
          <Typography
            variant="body-lg"
            className="text-left font-medium text-[#313131] lg:col-span-4 lg:col-start-9"
          >
            {description}
          </Typography>
        </div>

        <div className="mt-12 flex flex-col gap-12 md:gap-0 lg:mt-26">
          {PROJECTS.map((project, index) => {
            const isLast = index === PROJECTS.length - 1;
            const remaining = PROJECTS.length - 1 - index;

            return (
              <div key={project.id} className="relative w-full md:aspect-[4/5] lg:aspect-[10/9]">
                <div className="relative aspect-[4/3] w-full md:absolute md:inset-0 md:aspect-auto">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(min-width: 1536px) 1500px, 100vw"
                    className="object-cover"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
                </div>

                {/* The card track runs from this photo to the end of the showcase,
                    so every card sticks in the same spot and the next card
                    slides up and sits on top of the previous one. */}
                <div
                  className={`relative w-full md:absolute md:inset-x-0 md:top-0 ${TRACK_BOTTOM[remaining]} md:z-10 md:pt-21 md:pb-40`}
                >
                  <div className="grid w-full grid-cols-1 md:h-full md:grid-cols-24 md:gap-x-4">
                    <div className="w-full md:col-span-14 md:col-start-6 lg:col-span-12 lg:col-start-7 xl:col-span-10 xl:col-start-8">
                      <ProjectCard
                        project={project}
                        index={index}
                        total={PROJECTS.length}
                      />
                    </div>
                  </div>
                </div>

                {isLast && (
                  <div className="mt-8 flex w-full justify-center md:absolute md:inset-x-0 md:bottom-20 md:z-20 md:mt-0">
                    <Link
                      href={cta.href}
                      className="inline-flex h-10 w-full items-center justify-center bg-[linear-gradient(122deg,#AC2A4E_4%,#BD5773_51%,#461120_107%)] px-5 py-2.5 transition-opacity hover:opacity-90 sm:w-auto lg:h-12"
                    >
                      <Typography
                        variant="body-sm"
                        as="span"
                        className="text-center font-medium text-[#FFFFFF]"
                      >
                        {cta.label}
                      </Typography>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
