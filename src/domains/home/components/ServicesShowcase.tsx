"use client";

import { useState } from "react";
import ServicesList from "@/domains/home/components/ServicesList";
import ServicesImage from "@/domains/home/components/ServicesImage";

export default function ServicesShowcase() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12 lg:items-stretch lg:gap-x-8">
      <ServicesList activeId={activeId} onActiveChange={setActiveId} />
      <ServicesImage activeId={activeId} />
    </div>
  );
}
