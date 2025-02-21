import type { Metadata } from "next";
import "../globals.css";
import { Urbanist } from "next/font/google";
import Header from "@/components/sections/header";

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
    <html lang="en" className="bg-slate-900 text-slate-100">
      <body className={`${urbanist.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
