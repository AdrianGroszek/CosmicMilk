import type { Metadata } from "next";
import { DM_Sans, Oxanium } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import Footer from "@/components/ui/footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
});

export const metadata: Metadata = {
  title: "CosmicMilk premium quality milk",
  description:
    "CosmicMilk offers premium quality milk harvested from planets across the galaxy. Experience unique flavors and cosmic freshness delivered right to your doorstep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${oxanium.variable} relative font-sans antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
