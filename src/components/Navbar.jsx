import React, { useEffect, useState } from "react";
import CircularButton from "./CircularButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null); // Track hovered menu item

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = ["Home", "About Us", "Services", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center backdrop-blur-md bg-white/60 shadow-sm px-10 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
            {/* Logo */}
<div className="flex items-center relative">
  {/* Icon Image - Always Visible */}
  <img
    src="/sumeruDigitalIcon.svg"
    alt="Icon"
    className="h-5 absolute"
    style={{
      zIndex: 10, // Ensure it stays on top if necessary
    }}
  />

  {/* Logo Image - With Fade and Blur */}
  <img
    src="/sumeruDigitalLogo.svg"
    alt="Logo"
    className={`h-5 transition-all duration-1000 ease-in-out ${
      isScrolled ? "opacity-0 blur-md" : "opacity-100 blur-0"
    }`}
    style={{
      transition: "opacity 1s ease-in-out, filter 1s ease-in-out",
    }}
  />
</div>

      {/* Center Menu */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-8 font-normal text-gray-700 text-sm">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredMenu(item)}
              onMouseLeave={() => setHoveredMenu(null)}
              className={`cursor-pointer transition-all duration-400 ${
                hoveredMenu === item
                  ? "text-gray-700" // Highlight hovered item
                  : hoveredMenu
                  ? "text-gray-300" // Dim non-hovered items
                  : "text-gray-600" // Default state
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Button */}
      <div className="ml-auto">
        <CircularButton text="Contact Us" icon="ri-mail-line" className="" />
      </div>
    </nav>
  );
};

export default Navbar;
