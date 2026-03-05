import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display"
});

export const metadata: Metadata = {
  title: "ALO Advisory Group",
  description:
    "Cross-border expansion architecture into GCC jurisdictions for UK firms. Licensing, governance, and sequencing designed before execution."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-alo-bg text-alo-text font-sans">
        <div className="min-h-screen">
          <Header />
          <main className="container px-6 md:px-8 lg:px-10">{children}</main>
        </div>
      </body>
    </html>
  );
}

