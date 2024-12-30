"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { MenuIcon } from "./icons/icons";

const navItems = [
  { href: "#about", label: "About", number: "01" },
  { href: "#project", label: "Project", number: "02" },
  { href: "#contact", label: "Contact", number: "03" },
];
export default function Header() {
  const { scrollDirection } = useScrollDirection();

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 sm:px-12 pt-4 sm:pt-6 bg-customColors-pastelWhite/70 backdrop-blur-sm z-50 transition-all duration-300  ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
          className="w-10 h-10 text-3xl lg:w-12 lg:h-12 bg-customColors-bloodRed flex items-center justify-center clip-hexagon text-customColors-pastelWhite"
        >
          <span className="mt-2">B</span>
        </motion.div>
      </div>
      <nav className="hidden sm:flex items-center gap-8">
        {navItems.map((item, i) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <Link
              href={item.href}
              className="text-md text-customColors-gray hover:text-customColors-bloodRed transition-colors"
            >
              <span className="text-customColors-bloodRed mr-1 font-mono">
                {item.number}.
              </span>
              {item.label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <div className="relative inline-block">
            <div className="absolute rounded-md inset-0 bg-customColors-bloodRed transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            <Link
              href={"/resume/Bain Cruz Resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="relative group border-customColors-bloodRed text-customColors-bloodRed bg-customColors-pastelWhite hover:bg-customColors-pastelWhite hover:text-customColors-bloodRed
            transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1"
              >
                Resume
              </Button>
            </Link>
          </div>
        </motion.div>
      </nav>
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-customColors-gray hover:text-customColors-bloodRed transition-colors">
              <MenuIcon className="w-8 h-8" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-3/4 sm:w-1/2 flex flex-col items-center justify-center"
          >
            <SheetHeader className="w-full">
              <SheetTitle className="hidden">Nav</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col items-center justify-center w-1/2 gap-6">
              {navItems.map((item) => (
                <div
                  className="flex flex-col items-center justify-center"
                  key={item.number}
                >
                  <span className="text-customColors-bloodRed text-md ml-2 font-mono">
                    {item.number}.
                  </span>
                  <Link
                    href={item.href}
                    className="text-lg text-customColors-gray hover:text-customColors-bloodRed transition-colors mb-2 font-mono"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <Button
                variant="outline"
                className="flex items-center justify-center text-lg mt-6 h-12 w-full border-customColors-bloodRed text-customColors-bloodRed hover:bg-customColors-bloodRed hover:text-white transition-colors"
              >
                Resume
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
