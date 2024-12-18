import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-12 py-6">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
          Logo
        </div>
      </div>
      <nav className="flex items-center gap-8">
        <Link
          href="/about"
          className="text-sm hover:text-customColors-bloodRed"
        >
          <span className="text-customColors-bloodRed mr-1 font-mono">01.</span>
          About
        </Link>
        <Link
          href="/project"
          className="text-sm hover:text-customColors-bloodRed"
        >
          <span className="text-customColors-bloodRed mr-1 font-mono">02.</span>
          Project
        </Link>
        <Link
          href="/contact"
          className="text-sm hover:text-customColors-bloodRed"
        >
          <span className="text-customColors-bloodRed mr-1 font-mono">03.</span>
          Contact
        </Link>
        <Button
          variant="outline"
          className="border-customColors-bloodRed text-customColors-bloodRed hover:bg-customColors-bloodRed/85 hover:text-white"
        >
          Resume
        </Button>
      </nav>
    </header>
  );
}
