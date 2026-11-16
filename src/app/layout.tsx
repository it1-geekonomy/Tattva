import type { Metadata } from "next";
import { fontSans, fontVariables, manrope } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tattva",
  description: "Tattva lifespaces",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body
        className={`${manrope.className} ${fontSans} flex min-h-full flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
