import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const manrope = localFont({
  src: [
    {
      path: "../app/Fonts/Manrope-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../app/Fonts/Manrope-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../app/Fonts/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/Fonts/Manrope-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/Fonts/Manrope-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../app/Fonts/Manrope-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../app/Fonts/Manrope-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

/**
 * Navbar “Lifespaces” — Google Montserrat.
 */
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat-face",
  display: "swap",
});

/**
 * Navbar “Tattva” + hero wordmark — Mont Blanc-Trial when files exist.
 * Drop TTFs into `src/app/Fonts/` (e.g. MontBlanc-Trial-SemiBold.ttf) and
 * point `src` there. Until then, SemiBold Manrope keeps the face variable live.
 */
export const montblanc = localFont({
  src: [
    {
      path: "../app/Fonts/Manrope-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../app/Fonts/Manrope-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montblanc-face",
  display: "swap",
});
