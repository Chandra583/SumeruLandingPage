import React from 'react';
// import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="font-manrope relative">
      <div className="relative z-50">
        <Navbar/>
      </div>
      <MainContent/>
    </div>
  );
}

export default App;
