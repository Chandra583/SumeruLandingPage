import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="relative mx-auto max-w-7xl px-4">
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
  );
}

export default App;
