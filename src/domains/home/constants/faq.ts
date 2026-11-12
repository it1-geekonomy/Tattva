/**
 * Home FAQ — copy + spacing tokens (Figma Home Premium).
 * Mobile pads/gaps follow hero `FLUID` (`px-4 sm:px-6`).
 */

export const FAQ_EYEBROW = "Everything You Need to Know";

export const FAQ_HEADING = "Frequently Asked Questions";

export const FAQ_DESCRIPTION =
  "Explore helpful insights about our services, process and project journey.";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "projects",
    question: "What types of projects does Tattva Lifespaces undertake?",
    answer:
      "We undertake residential and commercial projects, offering architectural design, construction, end-to-end interiors and modular interior solutions tailored to different requirements.",
  },
  {
    id: "services",
    question: "What services do you offer?",
    answer:
      "We offer architectural design, interior design, space renovation and building construction — delivered as focused engagements or as an end-to-end journey from concept through completion.",
  },
  {
    id: "process",
    question: "How does your design and execution process work?",
    answer:
      "We begin by understanding your vision, then develop the design through careful planning and technical coordination, and finally deliver with precise execution and quality craftsmanship.",
  },
  {
    id: "custom-interiors",
    question: "Do you provide customised interior solutions?",
    answer:
      "Yes. Every interior is tailored to how you live and work — from material selection and spatial planning to modular solutions shaped around your requirements.",
  },
];

export const FAQ_FLUID = {
  sectionPadX: "px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-[7.5rem]",
  sectionPadY: "py-10 sm:py-12 lg:py-16 xl:py-20",
  eyebrowGap: "gap-5 sm:gap-6 lg:gap-8",
  columnGap: "gap-10 sm:gap-12 lg:gap-16 xl:gap-20",
  introGap: "gap-4 sm:gap-5 lg:gap-6",
} as const;
