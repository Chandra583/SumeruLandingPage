import React, { useState } from 'react';
import PreLoaderAnimationPage from './components/PreLoader-Animation/PreLoader-Animation-Page';
import OverlayBlurEffect from './components/PreLoader-Animation/Overlay-BlurEffect';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import HeroSection from './components/HeroSection';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleAnimationComplete = () => {
    setShowPreloader(false);
    setShowOverlay(true);
    // Remove the overlay after its transition
    setTimeout(() => {
      setShowOverlay(false);
    }, 3000); // Match this duration with the CSS transition duration
  };

  return (
    <div className="relative mx-auto max-w-7xl px-4">
      {showPreloader && (
        <PreLoaderAnimationPage onAnimationComplete={handleAnimationComplete} />
      )}

      {showOverlay && <OverlayBlurEffect />}

      {/* Main content */}
      <div className="main-content">
        {/* Navbar */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className="relative z-10">
          <HeroSection />
        </div>

        {/* Main Content */}
        <div className="relative z-20">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
