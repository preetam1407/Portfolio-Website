import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiCplusplus,
  SiFlask,
   SiGit, 
   SiGithub, 
   SiLinux,
} from "react-icons/si";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Languages",
        icons: ["FaHtml5", "FaCss3", "FaJs", "FaPython", "SiCplusplus", "FaDatabase"],
      },
      {
        title: "Tools & Technologies",
        icons: ["FaReact", "SiTailwindcss", "SiMysql", "SiFlask", "SiGit", "SiGithub", "SiLinux"],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Academic Excellence Award",
        stage: "2023",
      },
      {
        title: "2nd Runner Up - Prestigious Poster Competition, IITGN",
        stage: "2022",
      },
    ],
  },
];

const iconComponents = {
  FaHtml5: FaHtml5,
  FaCss3: FaCss3,
  FaJs: FaJs,
  FaReact: FaReact,
  FaPython: FaPython,
  FaDatabase: FaDatabase,
  SiTailwindcss: SiTailwindcss,
  SiMysql: SiMysql,
  SiCplusplus: SiCplusplus,
  SiFlask: SiFlask,
  SiGit: SiGit,
  SiGithub: SiGithub,
  SiLinux: SiLinux,
};

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth magnificent design.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Started as an IIT undergrad, I&apos;ve advanced to developing AI for environmental solutions and refining data extraction processes, preparing for a tech-driven future.
          </motion.p>
        </div>
        <motion.div 
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-[75%] xl:max-w-[48%] h-[480px]"
        >
          <div className="flex xl:mx-0 xl:my-16 gap-x-4 xl:gap-x-8 mx-auto">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-lg relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-[2px] ${
                  index === itemIndex ? "text-accent after:bg-accent" : "after:bg-white"
                }`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-6 xl:py-4 flex flex-col gap-y-2 xl:gap-y-6 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                {/* Optionally handling stages */}
                <div className="flex gap-x-4">
                  {item.icons?.map((iconName, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {React.createElement(iconComponents[iconName])}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
