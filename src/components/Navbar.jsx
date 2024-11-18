import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  
  useEffect(() => {
    // Small delay to ensure DOM elements are ready
    const timer = setTimeout(() => {
      if (logoRef.current && linksRef.current.length > 0) {
        gsap.set([logoRef.current, ...linksRef.current], { opacity: 0, y: -50 });
        
        const tl = gsap.timeline();

        tl.to(logoRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        });

        tl.to(linksRef.current, {
          y: 0,
          opacity: 1,
          duration:2,
          stagger: 0.2,
          ease: "power3.out"
        }, "-=0.4");
      }
    }, 100); // 100ms delay

    // Cleanup
    return () => clearTimeout(timer);
  }, []);

  const addToRefs = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-sm bg-white/30 shadow-sm p-4 flex justify-between items-center z-50">
      <div ref={logoRef} className="text-[#000] text-xl font-bold">
        SumeruDigital
      </div>
      <div className="flex space-x-4">
        {['Code scanning', 'Supply chain'].map((text, index) => (
          <a
            key={index}
            ref={addToRefs}
            href="#"
            className="text-[#000] hover:text-gray-700 transition-colors"
          >
            {text}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
