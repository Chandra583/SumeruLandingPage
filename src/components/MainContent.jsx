import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Spline from '@splinetool/react-spline';
import ScrollCards from './ScrollCards';
import MovieSection from './MovieSection';

const MainContent = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cursor = cursorRef.current;

    // Basic cursor movement
    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };

    // Handle hover effects for text elements
    const handleTextHover = () => {
      if (cursor) {
        cursor.style.height = "100px";
        cursor.style.width = "100px";
        cursor.style.mixBlendMode = "difference";
      }
    };

    // Handle mouse leave from text elements
    const handleTextLeave = () => {
      if (cursor) {
        cursor.style.height = "20px";
        cursor.style.width = "20px";
      }
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);

    // Add hover effects to all text elements
    const textElements = document.querySelectorAll('h1, h2, h3, p, span, button, li');
    textElements.forEach(element => {
      element.addEventListener("mouseenter", handleTextHover);
      element.addEventListener("mouseleave", handleTextLeave);
    });

    // Your existing GSAP animations...
    gsap.fromTo('.heading', { opacity: 0 }, { opacity: 1, duration: 2 });

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      textElements.forEach(element => {
        element.removeEventListener("mouseenter", handleTextHover);
        element.removeEventListener("mouseleave", handleTextLeave);
      });
    };
  }, []);

  return (
    <div className="relative h-screen bg-white transition-colors">
      {/* Custom Cursor */}
      <div className="cursor" ref={cursorRef}></div>

      {/* Spline container */}
      <div className="absolute inset-0 w-full h-full">
      <Spline scene="https://prod.spline.design/TnbbJJ60ykPOykTn/scene.splinecode" />

      </div>
      
      {/* Content overlay - added pointer-events-none */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start p-8 pointer-events-none">
        <div className="text-gray-700 text-sm mb-2">Lorem, ipsum.</div>
        <h1 className="heading text-5xl md:text-7xl font-bold text-gray-900">Lorem ipsum dolor sit.</h1>
        <p className="mt-4 text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        {/* Button container - restore pointer events */}
        <div className="mt-6 flex space-x-4 pointer-events-auto">
          <button className="bg-black text-white py-2 px-4 rounded">Contact sales</button>
          <button className="bg-white text-black py-2 px-4 rounded border border-black">Request a demo</button>
        </div>
      </div>

      {/* MovieSection component */}
      <MovieSection />

      {/* Add ScrollCards component */}
      <ScrollCards />

      <div className="c-noise"></div>
      <div className="c-old"></div>
    </div>
  );
};

export default MainContent;
