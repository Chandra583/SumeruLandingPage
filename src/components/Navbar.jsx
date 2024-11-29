import React, { useEffect, useState } from "react";
import CircularButton from "./CircularButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center backdrop-blur-md bg-white/80 shadow-sm px-10 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={isScrolled ? "/sumeruDigitalIcon.svg" : "/sumeruDigitalLogo.svg"}
          alt="Logo"
          className="h-5 transition-all duration-300"
        />
      </div>

      {/* Center Menu */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-8 font-medium text-gray-700 text-sm">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About Us</li>
          <li className="hover:text-blue-500 cursor-pointer">Services</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Right Button */}
      <div className="ml-auto">
        <CircularButton
          text="Contact Us"
          icon="ri-mail-line"
          className=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
