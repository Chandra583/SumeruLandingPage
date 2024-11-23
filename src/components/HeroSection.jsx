import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <>
      {/* Spline container */}
      <div className="absolute inset-0 w-full h-full">
        <Spline scene="https://prod.spline.design/TnbbJJ60ykPOykTn/scene.splinecode" />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start p-8 md:p-16 lg:p-24 pointer-events-none">
        <div className="text-gray-600 text-base md:text-lg tracking-wide mb-4">Your Technology Partner</div>
        <h1 className="heading text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight tracking-tight">
          We Deliver, Support,<br />and Grow together
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          To turn your vision into a reality you want a company like us to help. Our expertise, resources, and deep commitment to our craft make us the ideal choice to meet your Project needs.
        </p>
        {/* Button container */}
        <div className="mt-8 flex space-x-6 pointer-events-auto">
          <button className="bg-black hover:bg-gray-800 text-white text-lg py-3 px-8 rounded-lg transition-all duration-200">
            Contact Us
          </button>
          <button className="bg-white hover:bg-gray-50 text-black text-lg py-3 px-8 rounded-lg border-2 border-black transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection; 