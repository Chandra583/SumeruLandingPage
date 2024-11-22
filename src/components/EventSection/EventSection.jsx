import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './EventSection.css';
import Spline from '@splinetool/react-spline';

gsap.registerPlugin(ScrollTrigger);

const EventSection = () => {
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
        trigger: ".sec1",
        start: "top 10%",
        end: "+=4000",
        scrub: 3
      }
    });

    // Text animations for each section
    sections.forEach((section, index) => {
      // Select all elements with 'anim' class in this section
      const texts = section.querySelectorAll(".anim");
      
      if (texts.length === 0) return;
      
      gsap.set(texts, { opacity: 0, y: -150 }); // Set initial state

      gsap.to(texts, {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
        stagger: 0.3,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left 40%",
          end: "left 40%",
          toggleActions: "play none none reverse",
          markers: true,
          id: `section-${index}`
        }
      });
    });

    // Add animation for the Events title
    gsap.to(".events-title", {
      scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "+=300",
          scrub: true
      },
      color: "#000000",
      ease: "none"
  }); 

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="wrapper">
      <h1 className="events-title">Events In Sumeru</h1>
      <div className="container" ref={containerRef}>
        <svg viewBox="0 0 950 10" fill="cian" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H297.1C297.563 1.71776 299.581 0 302 0C304.419 0 306.437 1.71776 306.9 4H593.1C593.563 1.71776 595.581 0 598 0C600.419 0 602.437 1.71776 602.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H602.9C602.437 8.28224 600.419 10 598 10C595.581 10 593.563 8.28224 593.1 6H306.9C306.437 8.28224 304.419 10 302 10C299.581 10 297.563 8.28224 297.1 6H9.89998Z" fill="#D9D9D9"/>
          <mask id="mask0_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="950" height="50">
            <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H297.1C297.563 1.71776 299.581 0 302 0C304.419 0 306.437 1.71776 306.9 4H593.1C593.563 1.71776 595.581 0 598 0C600.419 0 602.437 1.71776 602.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H602.9C602.437 8.28224 600.419 10 598 10C595.581 10 593.563 8.28224 593.1 6H306.9C306.437 8.28224 304.419 10 302 10C299.581 10 297.563 8.28224 297.1 6H9.89998Z" fill="red"/>
          </mask>
          <g mask="url(#mask0_0_1)">
            <rect className="mask" ref={maskRef} y="-49" height="800" fill="#00"/>
          </g>
        </svg>

        <section className="sec1 pin" ref={el => sectionsRef.current[0] = el}>
          {/* <div className="spline-container anim">
            <Spline
              scene="https://prod.spline.design/014pxYRtowxVZxOc/scene.splinecode"
            />
          </div> */}
          <img 
            src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Random decorative image" 
            className="section-image anim"
          />
          <span className="anim">Advanced</span>
          <div className="col anim">
            <p>Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque.</p>
          </div>
        </section>

        <section className="sec2 pin" ref={el => sectionsRef.current[1] = el}>
        <div className="spline-container anim">
            <Spline
              scene="https://prod.spline.design/014pxYRtowxVZxOc/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <span className="anim">Advanced</span>
          <div className="col anim">
            <p>Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque.</p>
          </div>
        </section>

        <section className="sec3 pin" ref={el => sectionsRef.current[2] = el}>
        <div className="spline-container anim">
        <Spline
        scene="https://prod.spline.design/vas27EXWX5CSRACl/scene.splinecode" 
      />
          </div>
          <span className="anim">Advanced</span>
          <div className="col anim">
            <p>Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque.</p>
          </div>
        </section>

        <section className="sec4 pin" ref={el => sectionsRef.current[3] = el}>
          <img 
            src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Random decorative image" 
            className="section-image anim"
          />
          <span className="anim">Advanced</span>
          <div className="col anim">
            <p>Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventSection; 