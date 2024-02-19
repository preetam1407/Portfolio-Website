
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/serviceSlider"; // Ensure this import matches the file name exactly, including case sensitivity.
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 
            variants={fadeIn('up',0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 sm:1 -md:text-3xl  xl:mt-15 '>
              My services<span className='text-accent'>.</span>
            </motion.h2>
            <motion.p 
            variants={fadeIn('up',0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mb-0 md:max-w-[100%] mx-auto sm:mt:2 lg:mx-0'> 
              Offer expertise in web dev, data crawl, 
              and AI solutions. Specializing in C, CPP, Python, JavaScript, SQL,
              and cloud technologies to deliver robust, scalable applications 
              and innovative data-driven strategies for diverse project needs
            </motion.p>
          </div>
          <motion.div 
          variants={fadeIn('down',0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="w-full xl:max-w-[75%] ">
          {/* slider */}
          <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
