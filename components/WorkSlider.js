import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Flood Forecasting System",
          path: "/flood.jpg",
        },
        {
          title: "Placement Management System",
          path: "/dbms1.png",
        },
        {
          title: "Web Tracker Extension",
          path: "/chrome.png",
        },
        {
          title: "Waste Segregation System",
          path: "/waste5.jpg",
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: "Chatbot Application",
    //       path: "/thumb4.jpg",
    //     },
    //     {
    //       title: "Ecommerce Web Crawler",
    //       path: "/thumb1.jpg",
    //     },
    //     {
    //       title: "Snow Hunt Game",
    //       path: "/thumb2.jpg",
    //     },
    //     {
    //       title: "Real Structure Forces Analysis",
    //       path: "/thumb3.jpg",
    //     },
    //   ],
    // },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] flex xl:mt-14"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group ">
                      {/* image */}
                      <Image src={image.path} width={400} height={200} alt="" />
                      {/* overlay gradient */}
                      <div
                        className="absolute inset-2bg-gradient-to-l
                      from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                      group-hover:opacity-80 transition-all duration-700"
                      ></div>
                      {/* title container*/}
                      <div
                        className="absolute bottom-0 translate-y-full
                      group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                      transiton-all duration-300 group-hover:justify-center"
                      >
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part1 */}
                          <div className="delay-100"> {image.title}</div>
                          {/* title part2 */}
                          <div
                            className="translate-y-[500%] group-hover:translate-y-0
                          transition-all duration-300 delay-150"
                          ></div>
                          {/* icon */}
                          <div
                            className="text-xl translate-y-[500%]
                          group-hover:translate-y-0 transition-all duration-300 delay-200"
                          >
                            <BsArrowRight />
                          </div>
                          {/* overlay */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
