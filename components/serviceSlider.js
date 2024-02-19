import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';

// data
import { FaDatabase, FaCode, FaRobot, FaCloud } from 'react-icons/fa';

export const serviceData = [
  {
    icon: <FaDatabase />,
    title: 'Data Extraction',
    description: 'Efficiently extracting and processing large datasets using advanced web scraping technologies and Python libraries for actionable insights.',
  },
  {
    icon: <FaCode />,
    title: 'Software Development',
    description: 'Building robust web applications with a focus on frontend and backend technologies, and databases, to deliver seamless user experiences.',
  },
  {
    icon: <FaRobot />,
    title: 'AI Solutions',
    description: 'Designing and deploying AI models for environmental sustainability and data-driven decision making, leveraging ML and DL techniques.',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Computing',
    description: 'Utilizing AWS to host and manage scalable, secure web services and databases, ensuring high availability and performance for all projects.',
  },
];


import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";


const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        1080: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}

      className='h-[240px] sm:h-[340px] flex xl:mt-16 -lg-6' 
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            <div className='text-4xl text-accent mb-4' >
              {item.icon} {/* Displaying the icon */}
            </div>
            <div className='mb-8'>
              <div className='mb-2 text-lg'>
                {item.title}</div> {/* Made title bold for better visual hierarchy */}
              <p className='max-w-[100%] leading-normal'>
                {item.description}</p>
            </div>
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-250'/>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;