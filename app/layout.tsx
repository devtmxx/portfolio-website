import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Header from "@/components/sections/header";
import clsx from "clsx";
import Footer from "@/components/footer";

const urbanist = Urbanist({ subsets: ["latin"] });

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
    <html lang="en" className="bg-slate-900">
      <body
        className={clsx(
          urbanist.className,
          "relative min-h-screen antialiased",
        )}
      >
        <Header />
        {children}
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
        <Footer />
      </body>
    </html>
  );
}
