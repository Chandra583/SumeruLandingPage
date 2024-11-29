import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

import CircularButton from "./CircularButton";

const HeroSection = () => {
  const words = ["Ideas", "Code", "Creativity", "Impact"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Trigger fade-out effect
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setFade(false); // Trigger fade-in effect
      }, 500); // Duration of the fade
    }, 2500); // Interval time for switching words

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative min-h-screen w-full mx-auto flex flex-col py-[112px]">
      {/* Top Content Section */}
      <div className="flex w-full h-[40vh] px-0">
        {/* Left Div */}
        <div className="w-2/3 flex flex-col justify-between items-start p-6">
          <h1 className="text-4xl leading-tight text-gray-500 font-black">
            Revolutionizing Tomorrow with <br />{" "}
            <span
              className={`inline-block transition-opacity duration-500 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
              style={{
                fontSize: "3em", // Larger size for emphasis
                fontFamily: "'Dancing Script', cursive", // Elegant font style
                backgroundImage: "linear-gradient(90deg, #A1C4FD, #C2E9FB, #D4FCFF)",
                backgroundSize: "200% auto", // Creates animation effect
                backgroundClip: "text", // Clip gradient to text
                color: "transparent", // Makes text itself transparent
                animation: "gradient-shift 2.5s linear infinite", // Infinite gradient animation
              }}
            >
              {words[currentWordIndex]}
            </span>
          </h1>
        </div>

        {/* Right Div */}
        <div className="w-1/3 rounded-lg flex flex-col justify-end items-end h-full p-6">
          {/* Paragraph at the bottom */}
          <p className="text-base text-gray-500 font-normal text-right mb-6">
            Discover a world of opportunities with our innovative solutions and 
            collaborative efforts.
          </p>
          {/* Button directly below the paragraph */}
          <CircularButton
            text="Explore Now"
            icon="ri-arrow-right-line"
            onClick={() => console.log("Button Clicked!")} // Add your click logic here
            className="mt-1 bg-yellow-500 text-white"
          />
        </div>
      </div>

      {/* Spline Section with Glass Effect */}
      <div
        className="relative w-full h-[70vh] rounded-xl mt-[10px]"
        // style={{
        //   backdropFilter: "blur(12px)", // Frosted glass effect
        //   WebkitBackdropFilter: "blur(40px)", // For Safari support
        //   background: "rgba(255, 255, 255, 0.4)", // Semi-transparent background
        //   boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
        //   overflow: "hidden", // Ensures the border-radius affects children
        // }}
      >
        <Spline scene="https://prod.spline.design/hCf5LpoqFfn6FgmY/scene.splinecode" />
      </div>

{/* Custom Animation Styles */}
<style>{`
  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`}</style>
    </div>
  );
};

export default HeroSection;
