import React, { useEffect, useState } from "react";
import { slides } from "../../constant/HeroData";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full  overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className=" relative min-w-full flex items-center bg-gray-900"
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[600px] object-cover"
            />
            <div className=" absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
              <h2 className="text-4xl md:text-6xl font-bold ">{slide.text}</h2>
              <h1 className="text-3xl md:text-4xl font-bold">{slide.text1}</h1>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
