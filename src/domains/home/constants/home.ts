export interface ServiceItem {
  id: number;
  title: string;
  href: string;
  image: { src: string; alt: string };
}

export const SERVICES_SECTION = {
  eyebrow: "Our Services",
  heading:
    "Transforming Concepts into Iconic Architectural Masterpieces Through Innovation and Expertise",
} as const;

// TODO: every service uses the same placeholder image for now; swap in each
// service's own image when the designs are ready. Hovering a row shows its image.
const SERVICES_PLACEHOLDER_IMAGE = "/images/home/services.png";

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Architectural Design",
    href: "/services/architectural-design",
    image: {
      src: SERVICES_PLACEHOLDER_IMAGE,
      alt: "Architect drafting a floor plan with a pencil and ruler",
    },
  },
  {
    id: 2,
    title: "Interior Design",
    href: "/services/interior-design",
    image: {
      src: SERVICES_PLACEHOLDER_IMAGE,
      alt: "Architect drafting a floor plan with a pencil and ruler",
    },
  },
  {
    id: 3,
    title: "Space Renovation",
    href: "/services/space-renovation",
    image: {
      src: SERVICES_PLACEHOLDER_IMAGE,
      alt: "Architect drafting a floor plan with a pencil and ruler",
    },
  },
  {
    id: 4,
    title: "Building Construction",
    href: "/services/building-construction",
    image: {
      src: SERVICES_PLACEHOLDER_IMAGE,
      alt: "Architect drafting a floor plan with a pencil and ruler",
    },
  },
];

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  area: string;
  year: string;
  location: string;
  image: { src: string; alt: string };
  thumbnail: { src: string; alt: string };
}

export const PROJECTS_SECTION = {
  eyebrow: "Our Projects",
  heading:
    "We've brought visionary spaces to life through thoughtful design and execution.",
  description:
    "At Tattva Lifespaces, every project reflects our commitment to quality, creativity and precision. From distinctive architectural developments to thoughtfully designed interiors, we transform ideas into spaces built to inspire.",
  cardLabel: "Featured Projects",
  cta: { label: "View All Projects", href: "/projects" },
} as const;

// TODO: projects 1 and 2 still carry placeholder copy from the Figma file.
export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "The Urban Workspace",
    description:
      "At Modexan, we design with people in mind, creating environments that elevate daily life while standing as landmarks.",
    area: "6,500 sq. ft.",
    year: "2024",
    location: "Bengaluru, India",
    image: {
      src: "/images/home/projects/project-1.png",
      alt: "Living room with a terracotta sofa and tall green walls",
    },
    thumbnail: {
      src: "/images/home/projects/project-1-thumb.png",
      alt: "Terracotta sofa with teal cushions in a green living room",
    },
  },
  {
    id: 2,
    title: "The Urban Workspace",
    description:
      "At Modexan, we design with people in mind, creating environments that elevate daily life while standing as landmarks.",
    area: "6,500 sq. ft.",
    year: "2024",
    location: "Bengaluru, India",
    image: {
      src: "/images/home/projects/project-2.png",
      alt: "Classic living room with cream sofas and a brick wall",
    },
    thumbnail: {
      src: "/images/home/projects/project-2-thumb.png",
      alt: "Cream sofas around a wooden coffee table",
    },
  },
  {
    id: 3,
    title: "The Meridian Business Centre",
    description:
      "A modern commercial development that brings together architectural character, efficient planning and refined detailing to create a distinctive business environment.",
    area: "18,000 sq. ft",
    year: "2025",
    location: "Bengaluru, India",
    image: {
      src: "/images/home/projects/project-3.png",
      alt: "Open office lounge with hexagonal ceiling lights",
    },
    thumbnail: {
      src: "/images/home/projects/project-3-thumb.png",
      alt: "Office lounge seating under geometric lights",
    },
  },
];
