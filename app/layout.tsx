import type { Metadata } from "next";
import { Bungee, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungee",
  display: "optional",
  adjustFontFallback: false,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "optional",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Unasfest",
  description:
    "Website for UNAS FEST at Universitas Nasional Jakarta, unas, universitas nasional festival",
  icons: "./favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bungee.variable} overflow-x-hidden bg-page-white text-page-black`}
      >
        {/* Navbar */}
        <Navbar />
        {children}
        <Toaster />
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
