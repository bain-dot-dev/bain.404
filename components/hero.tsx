"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const one = (
    <motion.h1
      className="text-lg sm:text-xl text-customColors-bloodRed dark:text-customColors-brightTurquoise mb-4 sm:mb-6 ml-1 font-mono"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
    >
      Hi, my name is
    </motion.h1>
  );

  const two = (
    <motion.h1
      className="text-5xl sm:text-8xl text-customColors-darkGray dark:text-customColors-pastelWhite font-bold mb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1.3 }}
    >
      Bain Cruz.
    </motion.h1>
  );

  const three = (
    <motion.h2
      className="text-3xl sm:text-6xl text-customColors-gray dark:text-customColors-pastelWhite/50 font-bold mb-4 sm:mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1.4 }}
    >
      I engineer seamless web experiences.
    </motion.h2>
  );

  const four = (
    <motion.p
      className="text-base sm:text-2xl text-customColors-gray dark:text-customColors-pastelWhite/50 leading-relaxed w-full sm:w-5/6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
    >
      I am a skilled IT professional with a specialization in Database Systems
      Technology and Web Development, combining my passion for software
      engineering with a focus on delivering high-quality, efficient, and
      scalable solutions.
    </motion.p>
  );

  const items = [one, two, three, four];

  return (
    <section className="min-h-screen  flex flex-col items-center justify-center px-4 sm:px-8">
      <motion.main
        className="flex-1 flex flex-col items-start justify-center text-left w-full px-4 sm:px-12 lg:px-28 lg:w-1/2 lg:mt-12 sm:-mt-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </motion.main>
    </section>
  );
}
