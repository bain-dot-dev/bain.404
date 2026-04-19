"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const one = (
    <motion.h1
      className="text-lg sm:text-xl text-customColors-bloodRed dark:text-customColors-brightTurquoise mb-2 lg:mb-4 ml-1 font-mono tracking-wider"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
    >
      Hi, my name is
    </motion.h1>
  );

  const two = (
    <motion.h1
      className="text-5xl sm:text-8xl font-bold mb-0 lg:mb-2 tracking-tight bg-[linear-gradient(90deg,var(--g)_0%,var(--g)_35%,var(--h)_50%,var(--g)_65%,var(--g)_100%)] bg-clip-text text-transparent bg-[length:300%_auto] animate-gradient [--g:#393738] [--h:#a71814] dark:[--g:#FFF] dark:[--h:#00FFD1]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1.3 }}
    >
      Bain Cruz.
    </motion.h1>
  );

  const three = (
    <motion.h2
      className="text-3xl sm:text-6xl text-customColors-gray dark:text-customColors-pastelWhite/50 font-bold mb-2 lg:mb-4 tracking-tighter"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1.4 }}
    >
      I engineer seamless web experiences
      <span className="inline-block w-[3px] h-[0.8em] ml-1 bg-customColors-bloodRed dark:bg-customColors-brightTurquoise animate-blink align-middle" />
    </motion.h2>
  );

  const four = (
    <motion.p
      className="text-base sm:text-2xl text-customColors-gray dark:text-customColors-pastelWhite/50 leading-relaxed w-full sm:w-5/6 tracking-normal"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
    >
      Hey there! I&apos;m a full-stack developer with years of experience
      turning ideas into real, working web apps. I love building things that are
      not just functional, but clean, efficient, and scalable whether it&apos;s
      on the frontend or backend.
    </motion.p>
  );

  const items = [one, two, three, four];

  return (
    <section className="min-h-screen  flex flex-col items-center justify-center px-4 sm:px-8">
      <motion.main
        className="flex-1 flex flex-col items-start justify-center text-left w-full px-4 sm:px-12 lg:px-28 lg:w-3/4 xl:w-2/3 lg:mt-12 sm:-mt-48"
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
