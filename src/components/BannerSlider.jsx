import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowRight, Leaf, Sprout, Trees } from 'lucide-react';

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
      title: "Grow Your Team",
      description: "Connect with top-tier green technology professionals committed to sustainability.",
      buttonText: "Hire Experts",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "from-emerald-900/80 to-teal-900/80",
      accentColor: "text-emerald-100",
      buttonColor: "bg-emerald-500 hover:bg-emerald-600",
      shape: <Leaf className="absolute -left-6 -top-6 w-32 h-32 text-emerald-800/20" />,
      pattern: "light"
    },
    {
      title: "Sustainable Projects",
      description: "Discover eco-friendly projects that align with your values and expertise.",
      buttonText: "Browse Initiatives",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "from-green-900/80 to-emerald-900/80",
      accentColor: "text-green-100",
      buttonColor: "bg-green-500 hover:bg-green-600",
      shape: <Sprout className="absolute -right-8 -bottom-8 w-36 h-36 text-green-800/20" />,
      pattern: "medium"
    },
    {
      title: "Green Partnerships",
      description: "Collaborate with organizations making a positive environmental impact.",
      buttonText: "Join Network",
      image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "from-teal-900/80 to-cyan-900/80",
      accentColor: "text-teal-100",
      buttonColor: "bg-teal-500 hover:bg-teal-600",
      shape: <Trees className="absolute -left-10 -top-10 w-40 h-40 text-teal-800/20" />,
      pattern: "dark"
    },
  ];

  const PatternBackground = ({ type }) => {
    const baseClasses = "absolute inset-0 opacity-20";
    
    if (type === "light") {
      return (
        <svg className={baseClasses} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern-leaves" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M20 10 L30 0 L40 10 L50 0 L60 10 L50 20 L60 30 L50 40 L60 50 L50 60 L40 50 L30 60 L20 50 L10 60 L0 50 L10 40 L0 30 L10 20 L0 10 L10 0 Z" fill="#10b981" opacity="0.3" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-leaves)"></rect>
        </svg>
      );
    } else if (type === "medium") {
      return (
        <svg className={baseClasses} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern-waves" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M0 40 Q20 20 40 40 T80 40" stroke="#059669" fill="none" strokeWidth="2" opacity="0.4" />
            <path d="M0 60 Q20 40 40 60 T80 60" stroke="#059669" fill="none" strokeWidth="2" opacity="0.4" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-waves)"></rect>
        </svg>
      );
    } else {
      return (
        <svg className={baseClasses} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="#0d9488" opacity="0.4" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-dots)"></rect>
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
                {slide.shape}
                
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
                  <span className="font-bold">{index+1}K+</span> {index === 0 ? 'Professionals' : index === 1 ? 'Projects' : 'Partners'}
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