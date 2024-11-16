import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-sm bg-white/30 shadow-sm p-4 flex justify-between items-center z-50">
      <div className="text-[#000] text-xl font-bold">SumeruDigital</div>
      <div className="flex space-x-4">
        <a href="#" className="text-[#000] hover:text-gray-700 transition-colors">Code scanning</a>
        <a href="#" className="text-[#000] hover:text-gray-700 transition-colors">Supply chain</a>
      </div>
    </nav>
  );
};

export default Navbar;
