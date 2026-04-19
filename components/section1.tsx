"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section1() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Flask",
    "Laravel",
    "Flutter",
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "Supabase",
    "Docker",
    "Python",
    "Git",
    "Figma",
    "Framer Motion",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="h-auto flex flex-col items-center justify-center px-4 sm:px-12 py-12 lg:py-24 mb-20 lg:mb-40"
    >
      <motion.div
        className="flex flex-col sm:flex-row items-start gap-8 lg:gap-12 w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex-1 space-y-8">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-customColors-darkGray dark:text-customColors-pastelWhite">
              <span className="text-xl lg:text-2xl text-customColors-bloodRed dark:text-customColors-brightTurquoise font-mono">
                01.
              </span>{" "}
              About me
            </h2>
            <div className="h-[1px] flex-1 bg-border "></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-6 text-customColors-gray dark:text-customColors-pastelWhite/80"
          >
            <p className="text-lg sm:text-xl leading-relaxed tracking-wide">
              Hello! My name is Bain Hansly Cruz, and I enjoy solving problems
              and turning ideas into solutions. My interest in freelancing
              started in 2023 when I was reached out to develop a web-based
              system for a rice mill owner in my hometown. This experience not
              only honed my technical skills but also fueled my passion for
              creating software that meets real-world needs.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed tracking-wide">
              My main focus these days is building accessible, inclusive
              products and digital experiences for a variety of clients. I
              believe in the power of technology to bridge gaps, simplify
              processes, and make a meaningful impact on people&apos;s lives.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-3 text-customColors-gray dark:text-customColors-pastelWhite/80"
          >
            <p className="text-lg sm:text-xl tracking-wide">
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.3, delay: index * 0.05 },
                    },
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1 text-sm font-mono rounded-full border border-customColors-bloodRed/40 dark:border-customColors-brightTurquoise/40 text-customColors-bloodRed dark:text-customColors-brightTurquoise hover:bg-customColors-bloodRed/10 dark:hover:bg-customColors-brightTurquoise/10 hover:border-customColors-bloodRed dark:hover:border-customColors-brightTurquoise transition-colors duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={itemVariants}
          className="relative inline-block group self-center sm:self-auto"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 sm:mt-20 rounded-lg">
            <div className="relative w-full h-full z-10 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
              <Image
                src="/bain/Cruz, Bain Hansly.png"
                alt="Bain Hansly Cruz"
                fill
                className="rounded-lg transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal"
              />
            </div>
            <div className="absolute top-3.5 left-3.5 w-full h-full border-2 z-0 border-customColors-bloodRed dark:border-customColors-brightTurquoise rounded-lg transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
