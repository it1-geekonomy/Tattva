import Image from "next/image";
import Typography from "@/lib/Typography";
import { PROJECTS_SECTION, type ProjectItem } from "@/domains/home/constants/home";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  total: number;
}

const pad = (value: number) => String(value).padStart(2, "0");

export default function ProjectCard({ project, index, total }: ProjectCardProps) {
  const tags = [project.area, project.year, project.location];

  return (
    <article className="sticky top-24 flex max-h-[calc(100svh-8rem)] w-full flex-col gap-5 bg-white px-5 py-6 md:top-28 md:max-h-[calc(100svh-9rem)] md:gap-8 md:px-10 md:py-10 lg:top-32 lg:max-h-[calc(100svh-10rem)]">
      <div className="flex min-h-0 w-full flex-col items-center gap-4 md:gap-6">
        <div className="flex shrink-0 flex-col items-center gap-1">
          <Typography
            variant="h2"
            as="p"
            className="text-center font-medium text-[#838383]"
          >
            [{pad(index + 1)}/{pad(total)}]
          </Typography>
          <Typography
            variant="project"
            as="h3"
            className="text-center font-medium text-[#0B0B0B]"
          >
            {PROJECTS_SECTION.cardLabel}
          </Typography>
        </div>
        <div className="relative aspect-[522/293] min-h-16 w-full shrink">
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            fill
            sizes="(min-width: 1024px) 35vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex w-full shrink-0 flex-col gap-5 md:gap-8">
        <div className="flex w-full flex-col gap-2 md:gap-4">
          <Typography
            variant="card"
            as="h3"
            className="text-left font-medium text-[#000000]"
          >
            {project.title}
          </Typography>
          <Typography
            variant="body-lg"
            className="text-left font-medium text-[#313131]"
          >
            {project.description}
          </Typography>
        </div>
        <ul className="flex flex-wrap items-center gap-2 md:gap-4">
          {tags.map((tag) => (
            <li key={tag} className="bg-[#F3F1EF] px-3 py-1.5 md:px-4 md:py-2.5">
              <Typography
                variant="caption"
                as="span"
                className="text-left font-medium text-[#717171]"
              >
                {tag}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
