import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Handle scroll to toggle between logo and icon
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-sm bg-white/30 shadow-sm p-8 flex justify-between items-center z-10 transition-all duration-1000">
      {/* Smooth transition between logo and icon */}
      <div className="h-7">
        <img
          src={isScrolled ? '/sumeruDigitalIcon.svg' : '/sumeruDigitalLogo.svg'}
          alt="Sumeru Digital"
          className="h-full transition-opacity duration-500 ease-in-out"
        />
      </div>
    </nav>
  );
};

export default Navbar;
