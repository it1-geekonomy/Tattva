import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import Typography from "@/lib/Typography";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Featured Projects", href: "/featured-projects" },
  { label: "Contact Us", href: "/contact-us" },
];

const OTHER_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const SOCIAL_ICONS = [
  {
    label: "Instagram",
    src: "/images/footer/instagram1.svg",
    href: "https://www.instagram.com/",
  },
  {
    label: "LinkedIn",
    src: "/images/footer/linkedin1.svg",
    href: "https://www.linkedin.com/",
  },
  {
    label: "Facebook",
    src: "/images/footer/facebook1.svg",
    href: "https://www.facebook.com/",
  },
];

export default function Footer() {
  const wordmarkId = useId();

  return (
    <footer className="w-full overflow-hidden bg-black text-white">
      <div className="sm:flex sm:justify-center">
        <div className="mx-6 grid gap-12 pt-14 pb-16 sm:mx-0 sm:w-[87.5%] sm:max-w-[1680px] sm:pt-20 xl:flex xl:items-start xl:justify-between xl:gap-8 xl:pt-[min(6.25vw,120px)] xl:pb-[min(6.4vw,123px)]">
          <div className="xl:w-[28.45%] xl:min-w-max">
            <Typography
              variant="display-mobile"
              as="h2"
              className="font-medium leading-[1.4] tracking-[-0.01em] text-white"
            >
              Architecture with
              <br />
              intention starts here
            </Typography>
            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center justify-center bg-[#67182E] px-7 py-5 transition-colors hover:bg-[#81213d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white xl:mt-[min(3.75vw,72px)]"
            >
              <Typography
                variant="body-xl"
                as="span"
                className="font-medium leading-5 text-white"
              >
                Start a conversation
              </Typography>
            </Link>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-x-6 gap-y-10 text-base leading-[1.45] sm:text-lg md:flex md:items-start md:justify-between xl:w-[51.76%] xl:min-w-max xl:gap-x-[clamp(1.5rem,18vw-13rem,137px)] xl:text-[clamp(18px,1.05vw,20px)] xl:*:flex-auto">
            {[
              { title: "Quick Links", links: QUICK_LINKS },
              { title: "Other Links", links: OTHER_LINKS },
            ].map(({ title, links }) => (
              <nav key={title} aria-label={`Footer ${title.toLowerCase()}`}>
                <Typography
                  variant="h3"
                  className="mb-5 text-white uppercase underline decoration-gray-400 underline-offset-1"
                >
                  {title}
                </Typography>
                <ul className="space-y-4">
                  {links.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="inline-block transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                      >
                        <Typography
                          variant="h3"
                          as="span"
                      className="text-white font-normal"
                        >
                          {label}
                        </Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="col-span-2 min-w-0">
              <Typography
                variant="h3"
                as="span"
                className="text-white uppercase underline decoration-gray-400 underline-offset-1"
              >
                Connect Us
              </Typography>
              <div className="flex flex-col items-start">
                <Typography variant="h3" className="text-white font-normal mt-5">
                  Tattva Lifespaces GF,
                  <br />
                  287/C, 10th Main,
                  <br />
                  Jayanagar 5th Block,
                  <br />
                  Bengaluru, Karnataka -
                  <br />
                  560041, India.
                </Typography>
                <a
                  href="tel:+918046607760"
                  className="mt-2 inline-block transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <Typography
                  variant="h3"
                    as="span"
                  className="text-white"
                  >
                    +91-80-4660-7760
                  </Typography>
                </a>
                <a
                  href="mailto:info@tattvalifespaces.com"
                  className="mt-2 inline-block max-w-full wrap-anywhere transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <Typography
                  variant="h3"
                    as="span"
                  className="wrap-anywhere text-white"
                  >
                    info@tattvalifespaces.com
                  </Typography>
                </a>
              </div>

              <ul
                aria-label="Social media"
                className="mt-6 flex items-center gap-3.5"
              >
                {SOCIAL_ICONS.map(({ label, src, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} (opens in a new tab)`}
                      className="flex size-8 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:size-[clamp(1.5rem,1.875vw,2.25rem)]"
                    >
                      <Image
                        src={src}
                        alt=""
                        width={26}
                        height={26}
                        className="h-[60%] w-[60%] object-contain"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="overflow-hidden bg-black">
        <svg className="block h-[22vw] w-full overflow-hidden sm:h-[15.8vw]">
          <defs>
            <mask id={`${wordmarkId}-text`} maskUnits="userSpaceOnUse">
              <text
                x="6.25%"
                y="0.77em"
                fill="white"
                className="text-[31.5vw] font-bold tracking-[-0.030em] sm:text-[23vw]"
              >
                <tspan>T</tspan>
                <tspan>a</tspan>
                <tspan className="tracking-[-0.07em]">t</tspan>
                <tspan>t</tspan>
                <tspan>v</tspan>
                <tspan>a</tspan>
              </text>
            </mask>
            <filter
              id={`${wordmarkId}-blur`}
              x="-5%"
              y="-5%"
              width="110%"
              height="110%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>
          <image
            href="/images/footer/footer-img.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMax slice"
            filter={`url(#${wordmarkId}-blur)`}
            mask={`url(#${wordmarkId}-text)`}
            className="h-[calc(22vw+max(5rem,10.4vw))] sm:h-[calc(15.8vw+max(5rem,10.4vw))]"
          />
        </svg>
        <div className="h-[max(5rem,10.4vw)] bg-[url('/images/footer/footer-img.png')] bg-[length:100%_auto] bg-[position:center_bottom] bg-no-repeat" />
      </div>
    </footer>
  );
}
