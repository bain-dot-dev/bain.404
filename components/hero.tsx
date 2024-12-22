"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const one = (
    <motion.h1
      className="text-xl text-customColors-bloodRed mb-6 ml-1 font-mono"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
    >
      Hi, my name is
    </motion.h1>
  );

  const two = (
    <motion.h1
      className="text-8xl text-gray-800 font-bold mb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1.1 }}
    >
      Bain Hansly Cruz.
    </motion.h1>
  );

  const three = (
    <motion.h2
      className="text-6xl text-gray-500 font-bold mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
    >
      I engineer seamless web experiences.
    </motion.h2>
  );

  const four = (
    <motion.p
      className="text-2xl text-gray-600 leading-relaxed w-5/6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1.3 }}
    >
      I am a skilled IT professional with a specialization in Database Systems
      Technology and Web Development, combining my passion for software
      engineering with a focus on delivering high-quality, efficient, and
      scalable solutions.
    </motion.p>
  );

  const items = [one, two, three, four];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.main
        className="flex-1 flex flex-col items-start justify-center text-left px-28 w-full lg:w-1/2 -mt-48"
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
