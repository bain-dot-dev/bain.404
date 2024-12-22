import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SocialsOnSide from "@/components/socialsOnSide";
// import { Github, Linkedin } from "lucide-react";
// import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bain.404",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <SocialsOnSide />
        {/* <div className="fixed left-16 bottom-0 flex flex-col gap-6 items-center after:content-[''] after:w-[1px] after:h-32 after:bg-border">
          <Link
            href="https://github.com"
            className="text-muted-foreground hover:text-customColors-bloodRed"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-muted-foreground hover:text-customColors-bloodRed"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        </div> */}

        {/* Fixed Email */}
        {/* <div className="fixed right-16 bottom-0 flex flex-col items-center gap-6">
          <Link
            href="mailto:cruzbanhansly@gmail.com"
            className="text-muted-foreground hover:text-customColors-bloodRed vertical-text"
          >
            cruzbainhansly@gmail.com
          </Link>
          <div className="w-[1px] h-32 bg-border"></div>
        </div> */}
      </body>
    </html>
  );
}
