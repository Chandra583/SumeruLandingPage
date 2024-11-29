import React from "react";

const CircularButton = ({
  text,
  icon,
  onClick,
  className = "",
  textSize = "text-sm", // Default text size
  iconSize = "text-base", // Default icon size
  buttonWidth = "w-48", // Fixed width for the button
  buttonHeight = "h-12", // Fixed height for the button
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center justify-between bg-gray-700 text-white font-normal rounded-full hover:bg-gray-900 transition-colors duration-300 ${buttonWidth} ${buttonHeight} ${className} overflow-hidden`}
      style={{ paddingLeft: "16px", paddingRight: "4px" }} // Custom padding
    >
      {/* Text on the left */}
      <span
        className={`flex-grow text-left ${textSize} transform transition-transform duration-300 ease-in-out group-hover:translate-x-8`}
      >
        {text}
      </span>

      {/* Icon on the right */}
      <div
        className={`absolute right-1 flex justify-center items-center bg-white text-gray-800 rounded-full w-10 h-10 ${iconSize} transform transition-all duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0`}
      >
        <i className={icon}></i>
      </div>

      {/* New Icon on the left */}
      <div
        className={`absolute left-[-2.5rem] flex justify-center items-center bg-white text-gray-800 rounded-full w-10 h-10 ${iconSize} transform transition-all duration-300 ease-in-out group-hover:translate-x-[calc(2.5rem+4px)] group-hover:opacity-100 opacity-0`}
      >
        <i className="ri-arrow-right-line"></i> {/* New circle's icon */}
      </div>
    </button>
  );
};

export default CircularButton;
