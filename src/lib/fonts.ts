import localFont from "next/font/local";

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

