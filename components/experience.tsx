"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/data/experiences";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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

  const activeExperience = experiences[activeTab];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="h-auto flex flex-col items-center justify-center px-4 sm:px-12 py-12 lg:py-24 mb-20 lg:mb-40"
    >
      <motion.div
        className="w-full max-w-4xl space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-customColors-darkGray dark:text-customColors-pastelWhite">
            <span className="text-xl lg:text-2xl text-customColors-bloodRed dark:text-customColors-brightTurquoise font-mono">
              02.
            </span>{" "}
            Where I&apos;ve Worked
          </h2>
          <div className="h-[1px] flex-1 bg-border"></div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8"
        >
          {/* Tab List */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-x-visible border-b sm:border-b-0 sm:border-l-2 border-customColors-gray/20">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-300
                  ${
                    activeTab === index
                      ? "text-customColors-bloodRed dark:text-customColors-brightTurquoise bg-customColors-bloodRed/10 dark:bg-customColors-brightTurquoise/10 border-b-2 sm:border-b-0 sm:border-l-2 border-customColors-bloodRed dark:border-customColors-brightTurquoise sm:-ml-[2px]"
                      : "text-customColors-gray dark:text-customColors-pastelWhite/60 hover:text-customColors-bloodRed dark:hover:text-customColors-brightTurquoise hover:bg-customColors-bloodRed/5 dark:hover:bg-customColors-brightTurquoise/5"
                  }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 min-h-[300px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {activeExperience.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="space-y-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-medium text-customColors-darkGray dark:text-customColors-pastelWhite">
                      {role.title}{" "}
                      {activeExperience.urls ? (
                        <span className="text-customColors-bloodRed dark:text-customColors-brightTurquoise">
                          @{" "}
                          {activeExperience.urls.map((u, i) => (
                            <span key={u.label}>
                              <a
                                href={u.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                              >
                                {u.label}
                              </a>
                              {i < activeExperience.urls!.length - 1 && " / "}
                            </span>
                          ))}
                        </span>
                      ) : activeExperience.url ? (
                        <a
                          href={activeExperience.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-customColors-bloodRed dark:text-customColors-brightTurquoise hover:underline"
                        >
                          @ {activeExperience.company}
                        </a>
                      ) : (
                        <span className="text-customColors-bloodRed dark:text-customColors-brightTurquoise">
                          @ {activeExperience.company}
                        </span>
                      )}
                    </h3>

                    <p className="text-sm font-mono text-customColors-gray dark:text-customColors-pastelWhite/60 mt-1">
                      {role.startDate} — {role.endDate}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {role.descriptions.map((desc, descIndex) => (
                      <li key={descIndex} className="flex gap-3">
                        <span className="text-customColors-bloodRed dark:text-customColors-brightTurquoise text-sm mt-1.5 flex-shrink-0">
                          ▶
                        </span>
                        <span className="text-customColors-gray dark:text-customColors-pastelWhite/80 text-base lg:text-lg leading-relaxed">
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {roleIndex < activeExperience.roles.length - 1 && (
                    <div className="h-[1px] bg-customColors-gray/10 mt-6"></div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
