import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Cinzel, Poppins, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orion World — Engineered Window & Door Systems",
  description:
    "Precision-engineered aluminium and uPVC window and door systems for modern residential and commercial spaces.",
  appleWebApp: {
    title: "Orion World",
  },
  icons: {
    icon: "/favicon2.ico",
    shortcut: "/favicon2.ico",
    apple: "/favicon2.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${poppins.variable} ${inter.variable}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
