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

const MOBILE_LINK_DELAYS = [
  ["delay-80", "delay-100"],
  ["delay-125", "delay-80"],
  ["delay-170", "delay-60"],
  ["delay-215", "delay-40"],
  ["delay-260", "delay-20"],
  ["delay-305", "delay-0"],
] as const;

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
      <nav className="flex h-15 w-full items-center justify-between gap-1 px-3 lg:grid lg:h-22 lg:grid-cols-[minmax(0,1fr)_max-content_minmax(0,1fr)] lg:gap-2 lg:px-4 xl:gap-4 xl:px-[6.25vw]">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 lg:justify-self-start"
        >
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
        <ul className="hidden items-center lg:flex lg:justify-self-center lg:pr-15 lg:gap-4 min-[85rem]:gap-5 2xl:gap-10">
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

        <div className="pl-1 pr-2 flex shrink-0 items-center gap-3 sm:gap-5 lg:translate-x-3 lg:justify-self-end lg:pl-0">
          {/* Premium / Modular toggle */}
          <div className="flex h-10 w-auto items-center border border-[#3A2E31] p-1 lg:h-14 lg:w-[clamp(7.5rem,20vw,20rem)] lg:p-1.5 xl:h-18.5 xl:w-[19.37rem] ">
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
                  className="relative z-10 h-full cursor-pointer whitespace-nowrap px-2 text-[#323232] transition-colors xl:px-2"
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
            className="relative size-7 shrink-0 cursor-pointer lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded bg-[#3A2E31] transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded bg-[#3A2E31] transition-opacity duration-200 ease-in-out motion-reduce:transition-none ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded bg-[#3A2E31] transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
                open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </nav>
 
      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        data-open={open}
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-x-0 top-15 z-40 flex h-[calc(100dvh-3.75rem)] flex-col justify-start overflow-y-auto overscroll-contain bg-white text-center transition-[clip-path] motion-reduce:transition-none lg:hidden ${
          open
            ? "pointer-events-auto duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] [clip-path:inset(0)]"
            : "pointer-events-none duration-360 ease-[cubic-bezier(0.4,0,0.2,1)] [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="h-4/5 shrink-0 px-6 pt-4"
        >
          <ul className="flex h-full flex-col items-center justify-evenly">
            {NAV_LINKS.map(({ label, href }, index) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block overflow-hidden text-foreground"
                >
                  <Typography
                    variant="h3"
                    as="span"
                    className={`block transition-[translate,opacity] motion-reduce:transition-none ${
                      open
                        ? "translate-y-0 opacity-100 duration-[460ms,280ms] ease-[cubic-bezier(0.22,1,0.36,1),ease-out]"
                        : "translate-y-[110%] opacity-0 duration-[200ms,160ms] ease-[cubic-bezier(0.4,0,1,1),ease-in]"
                    } ${MOBILE_LINK_DELAYS[index][open ? 0 : 1]}`}
                  >
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
 
 