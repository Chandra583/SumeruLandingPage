import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HorizontalScroll.css';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const maskRef = useRef(null);

  useEffect(() => {
    const sections = sectionsRef.current;
    const mask = maskRef.current;

    // Main horizontal scroll animation
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: "+=3000",
        markers: true
      }
    });

    // Progress bar animation
    gsap.to(mask, {
      width: "100%",
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top left",
        scrub: 1
      }
    });

    // Text animations for each section
    sections.forEach((section, index) => {
      // Select all elements with 'anim' class in this section
      const texts = section.querySelectorAll(".anim");
      
      if (texts.length === 0) return;
      
      gsap.set(texts, { opacity: 0, y: -130 }); // Set initial state

      gsap.to(texts, {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none none reverse",
          markers: true,
          id: `section-${index}`
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="container" ref={containerRef}>
        <svg viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"/>
          <mask id="mask0_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="10">
            <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_0_1)">
            <rect className="mask" ref={maskRef} y="-49" height="99" fill="black"/>
          </g>
        </svg>

        <section className="sec1 pin" ref={el => sectionsRef.current[0] = el}>
          <img 
            src="https://source.unsplash.com/random/800x600" 
            alt="Random decorative image" 
            className="section-image anim"
          />
          <span>Advanced</span>
          <h1>Signify Elegance</h1>
          <div className="col">
            <p>Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque.</p>
          </div>
        </section>

        <section className="sec2 pin" ref={el => sectionsRef.current[1] = el}>
          <span className="anim">Advanced</span>
          <h1 className="anim">Signify Elegance</h1>
          <div className="col anim">
            <p>Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque.</p>
          </div>
        </section>

        <section className="sec3 pin" ref={el => sectionsRef.current[2] = el}>
          <span className="anim">Advanced</span>
          <h1 className="anim">Signify Elegance</h1>
          <div className="col anim">
            <p>Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HorizontalScroll; 