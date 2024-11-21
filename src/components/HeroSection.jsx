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
      <div className="relative z-10 h-full flex flex-col justify-center items-start p-8 pointer-events-none">
        <div className="text-gray-700 text-sm mb-2">Lorem, ipsum.</div>
        <h1 className="heading text-5xl md:text-7xl font-bold text-gray-900">Lorem ipsum dolor sit.</h1>
        <p className="mt-4 text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        {/* Button container */}
        <div className="mt-6 flex space-x-4 pointer-events-auto">
          <button className="bg-black text-white py-2 px-4 rounded">Contact sales</button>
          <button className="bg-white text-black py-2 px-4 rounded border border-black">Request a demo</button>
        </div>
      </div>
    </>
  );
};

export default HeroSection; 