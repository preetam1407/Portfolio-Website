// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const typingAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      ease: "linear",
      repeat: 0,
      repeatType: "loop",
      duration: 0.6,
    },
  },
};

const Home = () => {
  return (
    <div className="bg-black/60 h-full">
      {/* {text}  */}
      <div
        className="w-full h-full bg-gradient-to-r 
                    from-primary/10 via-black/30 to-black/10"
      >
        <div
          className="text-center flex flex-col justify-center 
                        xl:pt-40 xl:text-left h-full container mx-auto"
        >
          {/* {title} */}
          <motion.h2 f
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Tranform your 
            <motion.span className="block text-accent h2 text-2xl md:text-3xl lg:text-4xl ">ideas into code</motion.span>
          </motion.h2>
        

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Discover the synergy of engineering and software in my projects,
            where I transform complex challenges into elegant, code-driven
            solutions. From data-driven AI models to robust web applications, my
            portfolio is a gateway to innovation and efficiency.
          </motion.p>
          {/*btn*/}
          {/* Show this button on small to medium screens only */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          {/* Show this button on large screens (xl and above) */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex "
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* {image} */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></div>
        {/* particle */}
        <ParticlesContainer />

        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[747px] max-h-[620px] absolute -bottom-32 
        lg:bottom-0 lg:right-[3%]"
        >
          {/* <Avatar /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
