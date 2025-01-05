import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Particles from "@/components/ui/particles";
import { Dock } from "@/components/dock/dock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CFC CoLearning",
  description: "CFC Studio CoLearning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full m-8">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Dock />
        <Particles
          quantityDesktop={500}
          quantityMobile={300}
          ease={80}
          color={"dark"}
          refresh
        />
      </body>
    </html>
  );
}
