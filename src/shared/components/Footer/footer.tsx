import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/Typography";
import { OTHER_LINKS, QUICK_LINKS, SOCIAL_ICONS } from "@/lib/constants/footer";
import { FooterWordmark } from "./wordmark";

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-black text-white">
      <div className="sm:flex sm:justify-center">
        <div className="grid w-full gap-7 px-5 pt-4 pb-2 sm:mx-0 sm:w-[87.5%] sm:max-w-[105rem] sm:px-0 sm:pt-8 xl:flex xl:items-start xl:justify-between xl:pt-10">
          <div className="flex flex-col items-center md:items-start xl:w-full xl:min-w-0">
            <Typography
              variant="display-mobile"
              as="h2"
              className="max-w-[12em] pb-3 text-center font-medium text-white md:text-left xl:pb-6"
            >
              Architecture with intention starts here
            </Typography>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center bg-[#67182E] px-5 py-3 transition-colors hover:bg-[#81213d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-6 sm:py-4 lg:px-7 lg:py-5"
            >
              <Typography
                variant="body-xl"
                as="span"
                className="font-medium text-white"
              >
                Start a conversation
              </Typography>
            </Link>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-x-6 gap-y-5 md:flex md:items-start md:justify-between xl:w-[51.76%] xl:min-w-max xl:gap-x-[clamp(1.5rem,18vw-13rem,8.5625rem)]  xl:*:flex-auto">
            {[
              { title: "Quick Links", links: QUICK_LINKS },
              { title: "Other Links", links: OTHER_LINKS },
            ].map(({ title, links }) => (
              <nav
                key={title}
                aria-label={`Footer ${title.toLowerCase()}`}
              >
                <Typography
                  variant="h3"
                  as="p"
                  className="pb-2 text-white text-[clamp(18px,0.2564vw+19.0769px,22px)] uppercase underline decoration-gray-400 decoration-[0.06em] underline-offset-1"
                >
                  {title}
                </Typography>
                <ul className="space-y-1">
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

            <div className="col-span-2 text-center md:text-left">
              <Typography
                variant="h3"
                as="p"
                className="text-white pb-2 text-[clamp(18px,0.2564vw+19.0769px,22px)] uppercase underline decoration-gray-400 decoration-[0.06em] underline-offset-1"
              >
                Connect Us
              </Typography>
              <div className="flex flex-col items-start text-left">
                <Typography
                  variant="h3"
                  as="p"
                  className="w-full font-normal text-white md:max-w-[11em]"
                >
                  Tattva Lifespaces GF, 287/C, 10th Main, Jayanagar 5th Block,
                  Bengaluru, Karnataka - 560041, India.
                </Typography>
                <a
                  href="tel:+918046607760"
                  className="pt-2 inline-block transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
                  className=" pt-2 inline-block max-w-full wrap-anywhere transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white "
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
                className="pt-3 flex w-full items-center gap-3.5 "
              >
                {SOCIAL_ICONS.map(({ label, src, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} (opens in a new tab)`}
                      className="flex size-7 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:size-8"
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

      {/* Mobile: footer-mobile.png */}
      <FooterWordmark
        src="/images/footer/footer-mobile.png"
        className="sm:hidden"
      />
      {/* sm and up: footer-img.png */}
      <FooterWordmark
        src="/images/footer/footer-img.png"
        className="hidden sm:block"
      />
    </footer>
  );
}
