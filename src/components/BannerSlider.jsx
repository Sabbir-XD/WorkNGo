import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowRight, Briefcase, Handshake, Rocket, Users, Zap } from 'lucide-react';

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
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
  };

  const slides = [
    {
      title: "Find Skilled Freelancers",
      description: "Connect with talented professionals ready to complete your tasks efficiently and affordably.",
      buttonText: "Post a Task",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "from-emerald-900/80 to-teal-900/80",
      accentColor: "text-emerald-100",
      buttonColor: "bg-emerald-500 hover:bg-emerald-600",
      icon: <Users className="absolute -left-6 -top-6 w-32 h-32 text-emerald-800/20" />,
      stats: "50K+ Professionals",
      pattern: "light"
    },
    {
      title: "Get Work Opportunities",
      description: "Browse hundreds of tasks posted daily and find projects that match your skills.",
      buttonText: "Browse Tasks",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "from-green-900/80 to-emerald-900/80",
      accentColor: "text-green-100",
      buttonColor: "bg-green-500 hover:bg-green-600",
      icon: <Briefcase className="absolute -right-8 -bottom-8 w-36 h-36 text-green-800/20" />,
      stats: "10K+ Active Tasks",
      pattern: "medium"
    },
    {
      title: "Quick & Easy Connections",
      description: "Our platform makes it simple to connect, communicate, and get work done.",
      buttonText: "Join Now",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "from-teal-900/80 to-cyan-900/80",
      accentColor: "text-teal-100",
      buttonColor: "bg-teal-500 hover:bg-teal-600",
      icon: <Zap className="absolute -left-10 -top-10 w-40 h-40 text-teal-800/20" />,
      stats: "95% Satisfaction Rate",
      pattern: "dark"
    },
  ];

  const PatternBackground = ({ type }) => {
    const baseClasses = "absolute inset-0 opacity-20";
    
    if (type === "light") {
      return (
        <svg className={baseClasses} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="#10b981" opacity="0.4" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      );
    } else if (type === "medium") {
      return (
        <svg className={baseClasses} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#059669" strokeWidth="1" opacity="0.3" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-grid)"></rect>
        </svg>
      );
    } else {
      return (
        <svg className={baseClasses} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern-diamonds" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M10 0L20 10L10 20L0 10Z" fill="#0d9488" opacity="0.2" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-diamonds)"></rect>
        </svg>
      );
    }
  };

  return (
    <div className="px-2 py-4">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-xl h-[500px]">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-screen object-cover object-center transition-all duration-1000 ease-out hover:scale-105"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor}`} />
              </div>
              
              {/* Content Section */}
              <div className="relative h-full flex flex-col justify-center p-8 md:p-16 max-w-2xl">
                <PatternBackground type={slide.pattern} />
                {slide.icon}
                
                <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight ${slide.accentColor}`}>
                  {slide.title}
                </h2>
                <p className={`text-xl md:text-2xl mb-8 max-w-lg ${slide.accentColor} opacity-90`}>
                  {slide.description}
                </p>
                <button className={`group relative z-10 inline-flex items-center gap-3 ${slide.buttonColor} text-white py-4 px-10 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg`}>
                  {slide.buttonText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                {/* Floating stats */}
                <div className="absolute right-8 bottom-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm text-sm font-medium text-emerald-800">
                  {slide.stats}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className={`absolute top-1/4 -right-12 w-48 h-48 rounded-full ${slide.buttonColor.replace('hover:bg', 'bg')} opacity-20 blur-xl animate-pulse`} />
              <div className={`absolute bottom-8 left-8 w-16 h-16 rounded-full ${slide.buttonColor.replace('hover:bg', 'bg')} opacity-30 z-0`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;