import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowRight,
  Briefcase,
  Handshake,
  Rocket,
  Users,
  Zap,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true,
    pauseOnHover: true,
    fade: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    dotsClass: "slick-dots !bottom-4",
  };

  const slides = [
    {
      title: "Find Skilled Freelancers",
      titleParts: ["Find", "Skilled", "Freelancers"],
      description:
        "Connect with talented professionals ready to complete your tasks efficiently and affordably.",
      buttonText: "Post a Task",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      darkImage:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "from-emerald-900/80 to-teal-900/80",
      darkBgColor: "from-emerald-900/90 to-teal-900/90",
      accentColor: "text-emerald-100",
      buttonColor:
        "bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700",
      icon: (
        <Users className="absolute -left-6 -top-6 w-32 h-32 text-emerald-800/20 dark:text-emerald-900/30" />
      ),
      stats: "50K+ Professionals",
      pattern: "light",
    },
    {
      title: "Get Work Opportunities",
      titleParts: ["Get", "Work", "Opportunities"],
      description:
        "Browse hundreds of tasks posted daily and find projects that match your skills.",
      buttonText: "Browse Tasks",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      darkImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "from-green-900/80 to-emerald-900/80",
      darkBgColor: "from-green-900/90 to-emerald-900/90",
      accentColor: "text-green-100",
      buttonColor:
        "bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700",
      icon: (
        <Briefcase className="absolute -right-8 -bottom-8 w-36 h-36 text-green-800/20 dark:text-green-900/30" />
      ),
      stats: "10K+ Active Tasks",
      pattern: "medium",
    },
    {
      title: "Quick & Easy Connections",
      titleParts: ["Quick", "Easy", "Connections"],
      description:
        "Our platform makes it simple to connect, communicate, and get work done.",
      buttonText: "Join Now",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      darkImage:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "from-teal-900/80 to-cyan-900/80",
      darkBgColor: "from-teal-900/90 to-cyan-900/90",
      accentColor: "text-teal-100",
      buttonColor:
        "bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700",
      icon: (
        <Zap className="absolute -left-10 -top-10 w-40 h-40 text-teal-800/20 dark:text-teal-900/30" />
      ),
      stats: "95% Satisfaction Rate",
      pattern: "dark",
    },
  ];

  const PatternBackground = ({ type }) => {
    const baseClasses = "absolute inset-0 opacity-20 dark:opacity-10";

    if (type === "light") {
      return (
        <svg
          className={baseClasses}
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="20"
              cy="20"
              r="1.5"
              fill="#10b981"
              className="dark:fill-emerald-500"
              opacity="0.4"
            />
          </pattern>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-circles)"
          ></rect>
        </svg>
      );
    } else if (type === "medium") {
      return (
        <svg
          className={baseClasses}
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="pattern-grid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#059669"
              className="dark:stroke-green-500"
              strokeWidth="1"
              opacity="0.3"
            />
          </pattern>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-grid)"
          ></rect>
        </svg>
      );
    } else {
      return (
        <svg
          className={baseClasses}
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="pattern-diamonds"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 0L20 10L10 20L0 10Z"
              fill="#0d9488"
              className="dark:fill-teal-500"
              opacity="0.2"
            />
          </pattern>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-diamonds)"
          ></rect>
        </svg>
      );
    }
  };

  return (
    <div className="w-100%">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-xl h-[400px] sm:h-[500px] lg:h-[400px] xl:h-[500px]">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-screen object-cover object-center transition-all duration-1000 ease-out hover:scale-105 hidden dark:block"
                  loading="lazy"
                />
                <img
                  src={slide.darkImage}
                  alt={slide.title}
                  className="w-full h-screen object-cover object-center transition-all duration-1000 ease-out hover:scale-105 block dark:hidden"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor} dark:${slide.darkBgColor}`}
                />
              </div>

              {/* Content Section */}
              <div className="relative h-full flex flex-col justify-center p-6 sm:p-10 md:p-12 lg:p-16 max-w-2xl xl:max-w-3xl">
                <PatternBackground type={slide.pattern} />
                {slide.icon}

                <h2
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight ${slide.accentColor}`}
                >
                  <Typewriter
                    words={slide.titleParts}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
                <p
                  className={`text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-lg ${slide.accentColor} opacity-90`}
                >
                  {slide.description}
                </p>
                <button
                  className={`group relative z-10 inline-flex items-center gap-3 ${slide.buttonColor} text-white py-3 px-8 sm:py-4 sm:px-10 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg`}
                >
                  {slide.buttonText}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Floating stats */}
                <div className="absolute right-4 sm:right-8 bottom-4 sm:bottom-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-sm text-xs sm:text-sm font-medium text-emerald-800 dark:text-emerald-200">
                  {slide.stats}
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className={`absolute top-1/4 -right-12 w-48 h-48 rounded-full ${
                  slide.buttonColor.replace("hover:bg", "bg").split(" ")[0]
                } opacity-20 blur-xl animate-pulse`}
              />
              <div
                className={`absolute bottom-8 left-8 w-16 h-16 rounded-full ${
                  slide.buttonColor.replace("hover:bg", "bg").split(" ")[0]
                } opacity-30 z-0 hidden sm:block`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
