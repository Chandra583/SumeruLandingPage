import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Spline from '@splinetool/react-spline';

const MainContent = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initial heading animation
    gsap.fromTo('.heading', { opacity: 0 }, { opacity: 1, duration: 2 });

    // Background color transition
    gsap.to('.relative.h-screen', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top center', 
        end: 'top top',
        scrub: 2.5,
        markers: true, // Enable for debugging
        toggleActions: 'play none none reverse'
      },
      backgroundColor: '#FAFAFA',
      color: '#ffffff', 
      duration: 1,
      onComplete: () => {
        gsap.to('.relative.h-screen', {
          backgroundColor: '#ffffff',
          color: '#000000',
          duration: 1,
          scrollTrigger: {
            trigger: '.about-section',
            start: 'top bottom',
            end: 'top center',
            scrub: 2.5,
            markers: true
          }
        });
      }
    });
  }, []);

  return (
    <div className="relative h-screen bg-white transition-colors">
      {/* Spline container */}
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/7XDG-4oV648g1hYb/scene.splinecode"
        />
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

      {/* About Section - added h-screen and updated spacing */}
      <div className="about-section relative z-10 bg-[#0A0A0A] h-screen flex items-center">
        <div className="p-8 rounded-lg shadow-lg max-w-4xl mx-auto pointer-events-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Feature point 1</li>
                <li>Feature point 2</li>
                <li>Feature point 3</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
