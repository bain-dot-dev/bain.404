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
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "#about", label: "About", number: "01" },
  { href: "#project", label: "Project", number: "02" },
  { href: "#contact", label: "Contact", number: "03" },
];
export default function Navbar() {
  const { scrollDirection } = useScrollDirection();

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 sm:px-12 pt-4 sm:pt-6 backdrop-blur-sm z-50 transition-all duration-300  ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
          className="hexagon-wrapper dark:"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            className="w-8 h-8 text-2xl lg:w-10 lg:h-10  flex items-center justify-center hexagon "
          >
            <span className="mt-2">B</span>
          </motion.div>
        </motion.div>
      </div>
      <nav className="hidden sm:flex items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <ThemeToggle />
        </motion.div>
        {navItems.map((item, i) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <Link
              href={item.href}
              className="text-md text-customColors-gray dark:text-white hover:text-customColors-bloodRed dark:hover:text-customColors-brightTurquoise transition-colors"
            >
              <span className="text-customColors-bloodRed dark:text-customColors-brightTurquoise mr-1 font-mono">
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
            <div className="absolute rounded-md inset-0 bg-customColors-bloodRed dark:bg-customColors-brightTurquoise transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />

            <Button
              variant="outline"
              className="relative group border-customColors-bloodRed dark:border-customColors-brightTurquoise text-customColors-bloodRed dark:text-customColors-brightTurquoise bg-customColors-pastelWhite dark:bg-customColors-woodSmoke hover:bg-customColors-pastelWhite dark:hover:bg-customColors-woodSmoke hover:text-customColors-bloodRed dark:hover:text-customColors-brightTurquoise
            transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1"
            >
              <Link
                href={"/resume/Bain Cruz Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </Button>
          </div>
        </motion.div>
      </nav>
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="bg-customColors-pastelWhite dark:bg-customColors-woodSmoke text-customColors-bloodRed dark:text-customColors-brightTurquoise hover:text-customColors-bloodRed dark:hover:text-customColors-brightTurquoise transition-colors">
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
              <div className="flex flex-col items-center justify-center">
                <ThemeToggle />
              </div>
              {navItems.map((item) => (
                <div
                  className="flex flex-col items-center justify-center"
                  key={item.number}
                >
                  <span className="text-customColors-bloodRed dark:text-customColors-brightTurquoise text-md ml-2 font-mono">
                    {item.number}.
                  </span>
                  <Link
                    href={item.href}
                    className="text-lg text-customColors-gray dark:text-customColors-pastelWhite hover:text-customColors-bloodRed dark:hover:text-customColors-brightTurquoise transition-colors mb-2 font-mono"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div className="relative inline-block text-lg mt-6 w-full">
                <div className="absolute h-12 rounded-md inset-0 bg-customColors-bloodRed dark:bg-customColors-brightTurquoise transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />

                <Button
                  variant="outline"
                  className="relative h-12 w-full group border-customColors-bloodRed dark:border-customColors-brightTurquoise text-customColors-bloodRed dark:text-customColors-brightTurquoise bg-customColors-pastelWhite dark:bg-customColors-woodSmoke hover:bg-customColors-pastelWhite dark:hover:bg-customColors-woodSmoke hover:text-customColors-bloodRed dark:hover:text-customColors-brightTurquoise
            transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1"
                >
                  <Link
                    href={"/resume/Bain Cruz Resume.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}
