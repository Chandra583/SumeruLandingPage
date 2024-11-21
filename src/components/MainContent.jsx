import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Spline from '@splinetool/react-spline';
import ScrollCards from './ScrollCards';
import MovieSection from './MovieSection';
import OurWorkSection from './OurWorkSection';
import HorizontalScroll from './HorizontalScroll/HorizontalScroll';
import HeroSection from './HeroSection';


const MainContent = () => {
  const cursorRef = useRef(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    // Load messages from localStorage on initial render
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef(null);

  // Add this effect to save messages to localStorage
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'user', timestamp: new Date() }]);
      setNewMessage('');
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cursor = cursorRef.current;

    // Basic cursor movement
    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };

    // Handle hover effects for text elements
    const handleTextHover = () => {
      if (cursor) {
        cursor.style.height = "100px";
        cursor.style.width = "100px";
        cursor.style.mixBlendMode = "difference";
      }
    };

    // Handle mouse leave from text elements
    const handleTextLeave = () => {
      if (cursor) {
        cursor.style.height = "20px";
        cursor.style.width = "20px";
      }
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);

    // Add hover effects to all text elements
    const textElements = document.querySelectorAll('h1, h2, h3, p, span, button, li');
    textElements.forEach(element => {
      element.addEventListener("mouseenter", handleTextHover);
      element.addEventListener("mouseleave", handleTextLeave);
    });

    // Your existing GSAP animations...
    gsap.fromTo('.heading', { opacity: 0 }, { opacity: 1, duration: 2 });

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      textElements.forEach(element => {
        element.removeEventListener("mouseenter", handleTextHover);
        element.removeEventListener("mouseleave", handleTextLeave);
      });
    };
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      if (isChatOpen) {
        gsap.fromTo(
          chatContainerRef.current,
          {
            opacity: 0,
            y: 20,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          }
        );
      }
    }
  }, [isChatOpen]);

  return (
    <div className="relative h-screen bg-white transition-colors">
      {/* Custom Cursor */}
      <div className="cursor" ref={cursorRef}></div>

      {/* Hero Section */}
      {/* <HeroSection /> */}

      {/* about section component */}
      <MovieSection />

      {/* our product  component */}
      <ScrollCards />
      {/* OurWorkSection component */}
     <OurWorkSection/>
     <HorizontalScroll />

      {/* Chat Bot Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full z-50 shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Chat Interface */}
      {isChatOpen && (
        <div 
          ref={chatContainerRef}
          className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl z-50 overflow-hidden"
        >
          {/* Chat Header */}
          <div className="bg-blue-500 p-4 text-white">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Talk with Sumeru 👋</h3>
              <button onClick={() => setIsChatOpen(false)} className="text-white">
                ✕
              </button>
            </div>
            <p className="text-sm opacity-75"></p>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="border-t p-4">
            <div className="flex items-center">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Compose your message..."
                className="flex-1 p-2 border rounded-l focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2,21L23,12L2,3V21Z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="c-noise"></div>
      <div className="c-old"></div>
    </div>
  );
};

export default MainContent;
