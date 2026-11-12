"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Typography from "@/lib/Typography";
import { SERVICES } from "@/domains/home/constants/home";

interface ServicesListProps {
  activeId: number | null;
  onActiveChange: (id: number | null) => void;
}

export default function ServicesList({ activeId, onActiveChange }: ServicesListProps) {
  const [restHeight, setRestHeight] = useState<number>();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const activeIdRef = useRef<number | null>(null);

  activeIdRef.current = activeId;

  // The enlarge-on-hover effect is desktop only; on smaller screens the
  // bigger text would wrap in the narrow column.
  const activate = (id: number) => {
    if (window.matchMedia("(min-width: 1024px)").matches) onActiveChange(id);
  };

  // Lock the wrapper to the list's resting height so an enlarged row
  // grows into the section's bottom space instead of shifting the page.
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const list = listRef.current;
    if (!wrapper || !list) return;

    const measure = () => {
      if (activeIdRef.current === null) setRestHeight(list.offsetHeight);
    };

    const observer = new ResizeObserver(measure);
    observer.observe(wrapper);
    document.fonts?.ready.then(measure);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ height: restHeight }}
      className="w-full lg:col-span-6"
    >
      <ul
        ref={listRef}
        className="w-full border-t border-white/40"
        onMouseLeave={() => onActiveChange(null)}
      >
        {SERVICES.map((service) => {
          const isActive = activeId === service.id;

          return (
            <li key={service.id} className="border-b border-white/40">
              <Link
                href={service.href}
                onMouseEnter={() => activate(service.id)}
                onFocus={() => activate(service.id)}
                onBlur={() => onActiveChange(null)}
                className="flex w-full items-center justify-between gap-4 py-8 lg:py-13"
              >
                <Typography
                  variant={isActive ? "display-heading" : "h1"}
                  as="h3"
                  className="font-manrope flex-1 text-left font-medium text-[#FFFFFF] transition-all duration-500 ease-out"
                >
                  {service.id}.&nbsp;&nbsp;{service.title}
                </Typography>
                <ArrowUpRight
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="size-7 shrink-0 text-[#FFFFFF] lg:size-8"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
