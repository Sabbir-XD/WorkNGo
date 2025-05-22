import {
  FiCode,
  FiPenTool,
  FiBarChart2,
  FiCamera,
  FiGlobe,
} from "react-icons/fi";
import { FaFacebookF, FaYoutube, FaWordpress } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PopularServices = () => {
  const services = [
    {
      icon: <FiCode className="text-2xl" />,
      name: "Web Development",
      light: "bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200",
      dark: "dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800 dark:hover:bg-blue-900/50",
    },
    {
      icon: <FiPenTool className="text-2xl" />,
      name: "Graphic Design",
      light:
        "bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-200",
      dark: "dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800 dark:hover:bg-purple-900/50",
    },
    {
      icon: <FaWordpress className="text-2xl" />,
      name: "WordPress",
      light: "bg-sky-100 text-sky-600 border-sky-200 hover:bg-sky-200",
      dark: "dark:bg-sky-900/30 dark:text-sky-400 dark:border-sky-800 dark:hover:bg-sky-900/50",
    },
    {
      icon: <FiBarChart2 className="text-2xl" />,
      name: "Digital Marketing",
      light: "bg-green-100 text-green-600 border-green-200 hover:bg-green-200",
      dark: "dark:bg-green-900/30 dark:text-green-400 dark:border-green-800 dark:hover:bg-green-900/50",
    },
    {
      icon: <FaFacebookF className="text-2xl" />,
      name: "Social Media",
      light:
        "bg-indigo-100 text-indigo-600 border-indigo-200 hover:bg-indigo-200",
      dark: "dark:bg-indigo-900/30 dark:text-indigo-400 dark:border-indigo-800 dark:hover:bg-indigo-900/50",
    },
    {
      icon: <FiCamera className="text-2xl" />,
      name: "Photo Editing",
      light: "bg-pink-100 text-pink-600 border-pink-200 hover:bg-pink-200",
      dark: "dark:bg-pink-900/30 dark:text-pink-400 dark:border-pink-800 dark:hover:bg-pink-900/50",
    },
    {
      icon: <FiGlobe className="text-2xl" />,
      name: "Translation",
      light: "bg-amber-100 text-amber-600 border-amber-200 hover:bg-amber-200",
      dark: "dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800 dark:hover:bg-amber-900/50",
    },
    {
      icon: <FaYoutube className="text-2xl" />,
      name: "Video Editing",
      light: "bg-red-100 text-red-600 border-red-200 hover:bg-red-200",
      dark: "dark:bg-red-900/30 dark:text-red-400 dark:border-red-800 dark:hover:bg-red-900/50",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 dark:text-green-400 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600">
              Popular
            </span>{" "}
            Services
          </h2>
          <p className="text-center text-green-600 dark:text-green-300 max-w-2xl mx-auto mb-12">
            Browse the most requested freelance skills
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            400: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
            el: ".swiper-pagination",
            bulletClass: "swiper-pagination-bullet dark:!bg-gray-500",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="relative pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="pb-2">
              <div
                className={`group p-6 rounded-xl transition-all duration-300 border ${service.light} ${service.dark} shadow-sm hover:shadow-md cursor-pointer h-full flex flex-col items-center dark:shadow-none dark:hover:shadow-lg dark:hover:shadow-green-900/10`}
              >
                <div
                  className={`w-14 h-14 mb-4 rounded-full flex items-center justify-center ${
                    service.light.split(" ")[1]
                  } dark:${service.dark
                    .split(" ")[1]
                    .replace("dark:", "")} shadow-inner dark:bg-opacity-20`}
                >
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-center">
                  {service.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev !text-green-600 dark:!text-green-400 !left-0 after:!text-xl"></div>
          <div className="swiper-button-next !text-green-600 dark:!text-green-400 !right-0 after:!text-xl"></div>
          <div className="swiper-pagination !bottom-0"></div>
        </Swiper>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:from-green-600 hover:to-green-700 dark:from-emerald-700 dark:to-green-800 dark:hover:from-emerald-800 dark:hover:to-green-900 dark:shadow-green-900/30">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
