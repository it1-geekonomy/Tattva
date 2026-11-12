import ServicesSection from "@/domains/home/components/ServicesSection";
import ProjectsSection from "@/domains/home/components/ProjectsSection";

export default function ClientPage() {
  return (
    <main className="w-full">
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
