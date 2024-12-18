import Header from "@/components/header";
import Section1 from "@/components/intro";
import Section2 from "@/components/section1";
import Section3 from "@/components/section2";
import Section4 from "@/components/section3";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="relative max-w-5xl mx-auto">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />

        <footer className="flex flex-col items-center justify-center gap-4 py-8 text-center">
          <p className="text-muted-foreground">
            Loosely designed in Figma and coded in Visual Studio Code by yours
            truly.
          </p>
          <p className="text-muted-foreground">
            Built with Next.js and Tailwind CSS.
          </p>
        </footer>

        {/* Fixed Social Links */}
        <div className="fixed left-12 bottom-0 flex flex-col gap-6 items-center after:content-[''] after:w-[1px] after:h-32 after:bg-border">
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
        </div>

        {/* Fixed Email */}
        <div className="fixed right-12 bottom-0 flex flex-col items-center gap-6">
          <Link
            href="mailto:cruzbanhansly@gmail.com"
            className="text-muted-foreground hover:text-customColors-bloodRed vertical-text"
          >
            cruzbanhansly@gmail.com
          </Link>
          <div className="w-[1px] h-32 bg-border"></div>
        </div>
      </div>
    </div>
  );
}
