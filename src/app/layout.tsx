import type { Metadata } from "next";
import { manrope } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tattva",
  description: "Tattva lifespaces",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className={`${manrope.className} min-h-full flex flex-col font-sans`}>
        {children}
      </body>
    </html>
  );
}
