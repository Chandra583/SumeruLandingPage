import React, { useEffect } from 'react';
import './PreLoader-Animation-Page.css'; // Adjust the import path if necessary

const PreLoaderAnimationPage = ({ onAnimationComplete }) => {
  useEffect(() => {
    const timeouts = [];
    const flowerParts = document.querySelectorAll('.logo-part');
    const flowerContainer = document.getElementById('flower-container');
    const textParts = document.querySelectorAll('.text-container img');
    const shine = document.getElementById('shine');
    const logoWrapper = document.getElementById('logo-wrapper');

    // Step 1: Animate flower parts (bloom with tilt effect)
    const centerPart = document.getElementById('part3');
    const outerParts = document.querySelectorAll('.logo-part:not(.center)');

    timeouts.push(
      setTimeout(() => {
        centerPart.classList.add('active'); // Bloom the center part
      }, 0)
    ); // Spawn immediately

    timeouts.push(
      setTimeout(() => {
        outerParts.forEach((part) => {
          part.classList.add('active'); // Bloom outer parts
        });
      }, 1000)
    );

    // Step 2: Move flower-container to the left-most position
    timeouts.push(
      setTimeout(() => {
        flowerContainer.style.left = '0'; // Move to the left side of the wrapper
        flowerContainer.style.transform = 'translateX(0)'; // Remove center alignment
      }, 2000)
    ); // Ensure flower animation finishes first

    // Step 3: Animate line and text parts
    timeouts.push(
      setTimeout(() => {
        textParts.forEach((part, index) => {
          const timeoutId = setTimeout(() => {
            part.classList.add('active');
          }, index * 300); // Delay between each text part
          timeouts.push(timeoutId);
        });
      }, 3000)
    ); // Start after flower movement

    // Step 4: Add the shine effect after all animations complete
    timeouts.push(
      setTimeout(() => {
        shine.style.animation = 'shine-effect 1.5s ease-in-out forwards'; // Trigger shine animation
      }, 6000)
    ); // Ensure it plays after all animations are done

    // Step 5: Fade out the logo-wrapper with blur and call the callback
    timeouts.push(
      setTimeout(() => {
        logoWrapper.style.opacity = '0'; // Fade out
        logoWrapper.style.filter = 'blur(5px)'; // Add blur effect

        // Wait for the fade-out to complete before calling the callback
        setTimeout(() => {
          if (onAnimationComplete) {
            onAnimationComplete();
          }
        }, 2000); // Duration matching the CSS transition
      }, 8000)
    ); // Trigger after shine animation

    // Cleanup timeouts on unmount
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [onAnimationComplete]);

  return (
    <div className="preloader-container">
      {/* Main wrapper */}
      <div className="logo-wrapper" id="logo-wrapper">
        {/* Left: Flower container */}
        <div className="flower-container" id="flower-container">
          <div className="logo-container" id="flower">
            <img
              src="/PreLoader-Animation/logoPart-1.svg"
              alt="Part 1"
              className="logo-part tilt-right"
              id="part1"
            />
            <img
              src="/PreLoader-Animation/logoPart-2.svg"
              alt="Part 2"
              className="logo-part tilt-right"
              id="part2"
            />
            <img
              src="/PreLoader-Animation/logoPart-3.svg"
              alt="Part 3"
              className="logo-part center"
              id="part3"
            />
            <img
              src="/PreLoader-Animation/logoPart-4.svg"
              alt="Part 4"
              className="logo-part tilt-left"
              id="part4"
            />
            <img
              src="/PreLoader-Animation/logoPart-5.svg"
              alt="Part 5"
              className="logo-part tilt-left"
              id="part5"
            />
          </div>
        </div>

        {/* Right: Text block container */}
        <div className="text-container" id="text-container">
          <img src="/PreLoader-Animation/logoPart-6.svg" alt="Line" id="line" />
          <img src="/PreLoader-Animation/logoPart-7.svg" alt="S" />
          <img src="/PreLoader-Animation/logoPart-8.svg" alt="U" />
          <img src="/PreLoader-Animation/logoPart-9.svg" alt="M" />
          <img src="/PreLoader-Animation/logoPart-10.svg" alt="E" />
          <img src="/PreLoader-Animation/logoPart-11.svg" alt="R" />
          <img src="/PreLoader-Animation/logoPart-12.svg" alt="U" />
          <img src="/PreLoader-Animation/logoPart-13.svg" alt="D" />
          <img src="/PreLoader-Animation/logoPart-14.svg" alt="I" />
          <img src="/PreLoader-Animation/logoPart-15.svg" alt="G" />
          <img src="/PreLoader-Animation/logoPart-16.svg" alt="I" />
          <img src="/PreLoader-Animation/logoPart-17.svg" alt="T" />
          <img src="/PreLoader-Animation/logoPart-18.svg" alt="A" />
          <img src="/PreLoader-Animation/logoPart-19.svg" alt="L" />
        </div>

        {/* Shine Effect */}
        <div className="shine" id="shine"></div>
      </div>
    </div>
  );
};

export default PreLoaderAnimationPage;
