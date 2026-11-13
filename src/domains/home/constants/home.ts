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

// TODO: services 2–4 temporarily reuse other home-page photos; replace them
// with each service's own image when the designs are ready.
export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Architectural Design",
    href: "/services/architectural-design",
    image: {
      src: "/images/home/services.png",
      alt: "Architect drafting a floor plan with a pencil and ruler",
    },
  },
  {
    id: 2,
    title: "Interior Design",
    href: "/services/interior-design",
    image: {
      src: "/images/home/projects/project-2.png",
      alt: "Classic living room with cream sofas and a brick wall",
    },
  },
  {
    id: 3,
    title: "Space Renovation",
    href: "/services/space-renovation",
    image: {
      src: "/images/home/projects/project-1.png",
      alt: "Renovated living room with a terracotta sofa and green walls",
    },
  },
  {
    id: 4,
    title: "Building Construction",
    href: "/services/building-construction",
    image: {
      src: "/images/home/way-we-work.png",
      alt: "Two professionals reviewing a blueprint in a workshop",
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

export const WAY_WE_WORK_VIDEO = {
  eyebrow: "The Way We Work",
  // TODO: add the video file (e.g. "/videos/home/way-we-work.mp4") when it's ready.
  videoSrc: "",
  playLabel: "Play video",
  poster: {
    src: "/images/home/way-we-work.png",
    alt: "Two professionals reviewing a blueprint in a workshop",
  },
} as const;

export interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  project: string;
  image: { src: string; alt: string };
  avatar: { src: string; alt: string };
}

export const TESTIMONIALS_SECTION = {
  eyebrow: "Testimonials",
  heading: "What Our Clients Say",
  previousLabel: "Previous testimonial",
  nextLabel: "Next testimonial",
} as const;

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Working with Tattva Lifespaces has been a seamless experience. Their thoughtful approach to design, attention to detail and commitment to quality bring every aspect of a project together. The result is a space that reflects our vision beautifully.",
    name: "Rahul Sharma",
    project: "The Serenity Villa-Mysore",
    image: {
      src: "/images/home/testimonials/testimonial-1.png",
      alt: "Modern two-storey villa with stone and wood facade at dusk",
    },
    avatar: {
      src: "/images/home/testimonials/avatar-1.png",
      alt: "Rahul Sharma",
    },
  },
  // TODO: testimonials 2 and 3 are placeholders so the slider can be tested.
  // Replace them with real client testimonials before launch.
  {
    id: 2,
    quote:
      "From the first concept to the final handover, the team kept us informed and involved. Every detail was handled with care, and the finished home feels exactly like us.",
    name: "Client Name",
    project: "Project Name-City",
    image: {
      src: "/images/home/projects/project-1.png",
      alt: "Living room with a terracotta sofa and tall green walls",
    },
    avatar: {
      src: "/images/home/testimonials/avatar-1.png",
      alt: "Client photo placeholder",
    },
  },
  {
    id: 3,
    quote:
      "Tattva Lifespaces delivered our office on time and beyond expectations. The space is efficient, elegant and has made a real difference to how our team works every day.",
    name: "Client Name",
    project: "Project Name-City",
    image: {
      src: "/images/home/projects/project-3.png",
      alt: "Open office lounge with hexagonal ceiling lights",
    },
    avatar: {
      src: "/images/home/testimonials/avatar-1.png",
      alt: "Client photo placeholder",
    },
  },
];
