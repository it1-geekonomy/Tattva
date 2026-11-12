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
    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
 
    document.body.style.overflow = "hidden";
    desktop.addEventListener("change", closeOnDesktop);
 
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);
 
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <nav className="flex h-19 w-full items-center justify-between gap-1 px-3 lg:h-24 lg:gap-2 lg:px-4 xl:gap-4 xl:px-[6.25vw]">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-12 w-9 shrink-0 items-center justify-center border border-[#494949]">
            <Image
              src="/Logo.svg"
              alt="Tattva Lifespaces logo"
              width={28}
              height={40}
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
        <ul className="hidden items-center gap-4 lg:flex xl:gap-5 2xl:gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href} className="whitespace-nowrap">
              <Link href={href} className="whitespace-nowrap transition-colors">
                <Typography
                  variant="body-lg"
                  as="span"
                  className="whitespace-nowrap text-[#353535] transition-colors font-medium"
                >
                  {label}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
 
        <div className="pl-1 pr-1 flex shrink-0 items-center gap-2 lg:ml-0">
          {/* Premium / Modular toggle */}
          <div className="flex h-10 w-auto items-center border border-[#3A2E31] p-1 lg:h-14 lg:w-[clamp(7.5rem,20vw,20rem)] lg:p-1.5 xl:h-18.5">
            <div className="relative grid h-full w-full grid-cols-2 items-center">
              <span
                aria-hidden="true"
                className={`absolute inset-y-0 left-0 w-1/2 bg-[#3A2E31] transition-transform duration-300 ease-in-out ${
                  category === "Modular" ? "translate-x-full" : ""
                }`}
              />
              {CATEGORIES.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                  className="relative z-10 h-full cursor-pointer whitespace-nowrap px-2 text-[#323232] transition-colors xl:px-6"
                >
                  <Typography
                    variant="body-xl"
                    as="span"
                    className={`font-medium transition-colors duration-300 ${
                      category === item ? "text-white" : "text-[#323232]"
                    }`}
                  >
                    {item}
                  </Typography>
                </button>
              ))}
            </div>
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
            <span className="block h-0.5 w-5 bg-[#3A2E31]" />
            <span className="mt-1 block h-0.5 w-5 bg-[#3A2E31]" />
            <span className="mt-1 block h-0.5 w-5 bg-[#3A2E31]" />
          </button>
        </div>
      </nav>
 
      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-x-0 top-19 z-40 flex h-[calc(100dvh-4.75rem)] flex-col justify-start overflow-y-auto overscroll-contain bg-white text-center transition-[opacity,transform] duration-400 ease-in-out lg:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="h-4/5 shrink-0 px-6 pt-4">
          <ul className="flex h-full flex-col items-center justify-evenly">
            {NAV_LINKS.map(({ label, href }, index) => (
              <li
                key={href}
                className={`transition-[opacity,transform] duration-500 ease-out ${
                  open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${index * 50}ms` : "0ms" }}
              >
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-foreground"
                >
                  <Typography variant="h3" as="span">
                    {label}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
 
 