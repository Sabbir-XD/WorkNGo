import { FiCode, FiPenTool, FiBarChart2, FiCamera, FiGlobe } from 'react-icons/fi';
import { FaFacebookF, FaYoutube, FaWordpress } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PopularServices = () => {
  const services = [
    { icon: <FiCode className="text-2xl" />, name: "Web Development", color: "bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200" },
    { icon: <FiPenTool className="text-2xl" />, name: "Graphic Design", color: "bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-200" },
    { icon: <FaWordpress className="text-2xl" />, name: "WordPress", color: "bg-sky-100 text-sky-600 border-sky-200 hover:bg-sky-200" },
    { icon: <FiBarChart2 className="text-2xl" />, name: "Digital Marketing", color: "bg-green-100 text-green-600 border-green-200 hover:bg-green-200" },
    { icon: <FaFacebookF className="text-2xl" />, name: "Social Media", color: "bg-indigo-100 text-indigo-600 border-indigo-200 hover:bg-indigo-200" },
    { icon: <FiCamera className="text-2xl" />, name: "Photo Editing", color: "bg-pink-100 text-pink-600 border-pink-200 hover:bg-pink-200" },
    { icon: <FiGlobe className="text-2xl" />, name: "Translation", color: "bg-amber-100 text-amber-600 border-amber-200 hover:bg-amber-200" },
    { icon: <FaYoutube className="text-2xl" />, name: "Video Editing", color: "bg-red-100 text-red-600 border-red-200 hover:bg-red-200" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">Popular</span> Services
        </h2>
          <p className="text-center text-green-600 max-w-2xl mx-auto mb-12">
            Browse the most requested freelance skills
          </p>

          
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="relative"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className={`group p-6 rounded-xl transition-all duration-300 border ${service.color} shadow-sm hover:shadow-md cursor-pointer h-full flex flex-col items-center`}>
                <div className={`w-14 h-14 mb-4 rounded-full bg-white flex items-center justify-center ${service.color.split(' ')[1]} shadow-inner`}>
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-800 text-center">
                  {service.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
          
          <div className="swiper-button-prev !text-green-600 !left-0 after:!text-xl"></div>
          <div className="swiper-button-next !text-green-600 !right-0 after:!text-xl"></div>
        </Swiper>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:from-green-600 hover:to-green-700">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;