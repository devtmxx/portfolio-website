import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/sections/header";
import Footer from "@/components/footer";
import React from "react";

const urbanist = localFont({
  src: [
    {
      path: "./fonts/Urbanist-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Urbanist-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Urbanist-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Urbanist-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Urbanist-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Urbanist-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Urbanist-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "devtmxx.de",
  description: "Minigame Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-slate-900 ${urbanist.variable}`}>
      <body className="relative min-h-screen antialiased">
        <Header />
        {children}
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
        <Footer />
      </body>
    </html>
  );
}
