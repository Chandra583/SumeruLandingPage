import React, { useEffect } from 'react';
import './Overlay-BlurEffect.css';

const Overlay = ({ onTransitionEnd }) => {
  useEffect(() => {
    // Start the fade-out effect after a short delay
    setTimeout(() => {
      const overlay = document.getElementById('overlay-blur');
      overlay.classList.add('fade-out');
    }, 100); // Start shortly after mounting
  }, []);

  return <div id="overlay-blur" className="overlay-blur"></div>;
};

export default Overlay;
