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
      className={`flex items-center justify-between bg-gray-700 text-white font-normal rounded-full hover:bg-gray-900 transition-all duration-300 ${buttonWidth} ${buttonHeight} ${className}`}
      style={{ paddingLeft: "16px", paddingRight: "4px" }} // Add custom padding
    >
      {/* Text on the left */}
      <span className={`flex-grow text-left ${textSize}`}>{text}</span>
      
      {/* Icon on the right */}
      <div
        className={`flex justify-center items-center bg-white text-gray-800 rounded-full w-10 h-10 ${iconSize}`}
      >
        <i className={icon}></i>
      </div>
    </button>
  );
};

export default CircularButton;
