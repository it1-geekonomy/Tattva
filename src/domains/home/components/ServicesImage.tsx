"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SERVICES } from "@/domains/home/constants/home";

interface ServicesImageProps {
  activeId: number | null;
}

const FADE_MS = 500;

export default function ServicesImage({ activeId }: ServicesImageProps) {
  // With nothing hovered, show the first service's image.
  const shownId = activeId ?? SERVICES[0].id;

  // The base image stays fully visible underneath while the new one fades in
  // on top, so the box is always fully covered (no dark dip mid-fade).
  const [baseId, setBaseId] = useState(shownId);

  useEffect(() => {
    const timer = setTimeout(() => setBaseId(shownId), FADE_MS);
    return () => clearTimeout(timer);
  }, [shownId]);

  return (
    <div className="relative order-first aspect-[4/3] w-full overflow-hidden sm:aspect-video lg:order-none lg:col-span-5 lg:col-start-8 lg:aspect-auto lg:h-full">
      {SERVICES.map((service) => {
        const isShown = service.id === shownId;
        const isBase = service.id === baseId;

        const layerClass = isShown
          ? "z-10 opacity-100 transition-opacity duration-500 ease-out"
          : isBase
            ? "z-0 opacity-100"
            : "z-0 opacity-0";

        return (
          <Image
            key={service.id}
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            aria-hidden={!isShown}
            className={`object-cover ${layerClass}`}
          />
        );
      })}
    </div>
  );
}
