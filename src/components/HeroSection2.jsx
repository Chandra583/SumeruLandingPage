import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

const HeroSection2 = () => {
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
        <Spline scene="https://prod.spline.design/vOUPI0452kHVy7gD/scene.splinecode" />
      </div>

      {/* Text overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-10 pointer-events-none">
        {/* Left bottom text */}
        <div className="absolute bottom-20 left-20 space-y-6">
          {/* Heading */}
          <h1 className="font-mono text-5.5xl leading-tight text-gradient bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent font-bold">
            Revolutionizing Tomorrow with{" "}
            <span
              className={`inline-block transition-opacity duration-500 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
              style={{
                fontSize: "1.5em", // Slightly larger than the sentence
                fontFamily: "'Dancing Script', cursive", // Cursive font style
                lineHeight: "inherit",
              }}
            >
              {words[currentWordIndex]}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg font-mono text-gray-700">
            Empowering businesses with visionary software
            and cutting-edge development services.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-5">
            {/* Shape the Future Button */}
            <button className="bg-gray-800 border border-gray-600 text-white py-3 px-8 rounded-full hover:bg-gray-700 hover:scale-105 hover:shadow-lg transition transform duration-300">
              Shape the Future
            </button>

            {/* Learn More Button */}
            <button className="bg-blue-600 border border-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition transform duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
