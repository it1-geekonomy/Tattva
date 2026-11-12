"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Typography from "@/lib/Typography";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Work", href: "/our-work" },
  { label: "Services", href: "/services" },
  { label: "Featured Projects", href: "/featured-projects" },
  { label: "Contact Us", href: "/contact-us" },
];

const CATEGORIES = ["Premium", "Modular"] as const;

export default function Navbar() {
  const [category, setCategory] =
    useState<(typeof CATEGORIES)[number]>("Premium");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <nav className="mx-auto flex h-19 items-center justify-between gap-1 px-3 lg:h-24 lg:gap-4 lg:px-[6.25vw]">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-12 w-9 shrink-0 items-center justify-center border border-[#494949]">
            <Image
              src="/Logo.svg"
              alt="Tattva Lifespaces logo"
              width={28}
              height={39}
              priority
              className="h-10 w-7 object-contain"
            />
          </span>
          <span className="flex flex-col">
            <Typography
              variant="h2"
              as="span"
              className="font-montblanc font-semibold leading-none text-[#910F33]"
            >
              Tattva
            </Typography>
            <Typography
              variant="h2"
              as="span"
              className="font-montserrat font-semibold leading-none text-[#494949]"
            >
              Lifespaces
            </Typography>
          </span>
        </Link>

        {/* Links */}
        <ul className="hidden items-center gap-3 lg:flex xl:gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href} className="whitespace-nowrap">
              <Link href={href} className="whitespace-nowrap transition-colors">
                <Typography
                  variant="body-lg"
                  as="span"
                  className="whitespace-nowrap font-medium tracking-[0.03em] text-[#353535] transition-colors"
                >
                  {label}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex shrink-0 items-center gap-3 lg:ml-0">
          {/* Premium / Modular toggle */}
          <div className="flex h-10 w-32 items-center border border-[#3A2E31] p-1 lg:h-18.5 lg:w-80 lg:p-1.5">
            {CATEGORIES.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`h-full min-w-0 flex-1 cursor-pointer px-1 transition-colors lg:px-6 ${
                  category === item
                    ? "bg-[#3A2E31] text-[#FFFFFF]"
                    : "bg-transparent text-[#323232]"
                }`}
              >
                <Typography
                  variant="body-lg"
                  as="span"
                  className={`text-xs font-medium tracking-[0.03em] lg:text-base ${
                    category === item ? "text-[#FFFFFF]" : "text-[#323232]"
                  }`}
                >
                  {item}
                </Typography>
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-0.5 w-6 bg-[#3A2E31]" />
            <span className="mt-1.5 block h-0.5 w-6 bg-[#3A2E31]" />
            <span className="mt-1.5 block h-0.5 w-6 bg-[#3A2E31]" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-19 z-40 flex min-h-0 flex-col items-center justify-start gap-6 overflow-y-auto overscroll-contain bg-white px-6 pb-6 pt-8 text-center lg:hidden"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col items-center gap-6">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="text-foreground"
                  >
                    <Typography
                      variant="body-lg"
                      as="span"
                      className="font-medium tracking-[0.03em]"
                    >
                      {label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
