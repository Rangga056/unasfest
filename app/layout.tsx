import type { Metadata } from "next";
import { Bungee, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungee",
  display: "swap",
  adjustFontFallback: false,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Unasfest",
  description: "Website for unasfest at Universitas Nasional Jakarta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bungee.variable} bg-page-white text-page-black overflow-x-hidden`}
      >
        {/* Navbar */}
        <Navbar />
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
