import { AboutSection, HomeBanner, WayWeWorkSection } from "@/domains/home";
import ProjectsSection from "@/domains/home/components/ProjectsSection";
import ServicesSection from "@/domains/home/components/ServicesSection";

export default function ClientPage() {
  return (
    // Page chrome below the hero uses white so leftover viewport space
    // is clearly “rest of page”, not hero padding.
    <main className="min-h-screen bg-white">
      <HomeBanner />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WayWeWorkSection />
    </main>
  );
}
