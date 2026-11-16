import type { Metadata } from "next";
import { manrope, montblanc, montserrat } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tattva",
  description: "Tattva lifespaces",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${montblanc.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className={`${manrope.className} flex min-h-full flex-col font-sans`}>
        {children}
      </body>
    </html>
  );
}
