import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  const words = ["Ideas", "Code", "Creativity", "Impact"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade-out effect
      setFade(true);

      // Wait for fade-out to finish, then switch word and fade back in
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setFade(false);
      }, 500); // Match this duration with the CSS transition time
    }, 2500); // Total interval time for each word

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      {/* Spline container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Spline scene="https://prod.spline.design/1vD-Yx853UHLqj2v/scene.splinecode" />
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
    </div>
  );
};
export default HeroSection;
