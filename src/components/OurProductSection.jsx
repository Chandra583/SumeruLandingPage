import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const OurProductSection = () => {
  const sectionRef = useRef(null);
  const textOneRef = useRef(null);
  const textTwoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Add background color animation and text color change
    const backgroundTrigger = {
      trigger: sectionRef.current,
      start: "top top",
      end: "top 0%",
      scrub: 0,
      // markers: true,
      onUpdate: (self) => {
        // Change text color based on scroll progress
        const progress = self.progress;
        const textColor = progress > 0.1 ? "#ffffff" : "#000000";
        textOneRef.current.style.color = textColor;
        textTwoRef.current.style.color = textColor;
      }
    };

    gsap.to(sectionRef.current, {
      backgroundColor: "#000000",
      scrollTrigger: backgroundTrigger
    });

    // Text animations
    gsap.set([textOneRef.current, textTwoRef.current], {
      opacity: 0,
    });

    // "Our" animation from left
    gsap.fromTo(textOneRef.current, 
      {
        x: -200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          end: "top 20%",
          scrub: 3,
          // markers: true
        }
      }
    );

    // "Products" animation from right
    gsap.fromTo(textTwoRef.current,
      {
        x: 200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 10%",
          end: "top 0%",
          scrub: 1,
          // markers: true
        }
      }
    );

    // Cards animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "38% 50%",
        end: "200% 50%",
        scrub: 3,
        pin: true,
        // markers: true
      }
    });

    tl.to(".scroll-text", {
      top: "-7%",
    }, 'a')
    .to("#card-one", {
      top: "35%",
    }, 'a')
    .to("#card-two", {
      top: "150%"
    }, 'a')
    .to("#card-two", {
      top: "42%"
    }, 'b')
    .to("#card-one", {
      width: "45%",
      height: "45vh"
    }, 'b')
    .to("#card-three", {
      top: "150%"
    }, 'b')
    .to("#card-three", {
      top: "50%"
    }, 'c')
    .to("#card-two", {
      width: "50%",
      height: "50vh"
    }, 'c')
    .to("#card-four", {
      top: "150%"
    }, 'c')
    .to("#card-four", {
      top: "58%"
    }, 'd')
    .to("#card-three", {
      width: "55%",
      height: "55vh"
    }, 'd')
    .to("#card-four", {
      width: "60%",
      height: "60vh"
    }, 'd');

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-[150vh] bg-white transition-colors duration-500">
      <div className="scroll-text absolute w-full h-full flex items-center justify-center -mt-32">
        <div className="flex items-center justify-center gap-8 overflow-hidden">
          <div className="overflow-hidden">
            <h1 ref={textOneRef} className="text-[15vw] text-black dark:text-white  transition-colors duration-500">
              Our
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 ref={textTwoRef} className="text-[15vw] text-black dark:text-white transition-colors duration-500">
              Products
            </h1>
          </div>
        </div>
      </div>
      <div id="card-one" 
           className="cards absolute top-[130%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40vh] bg-gradient-to-r from-blue-200 to-purple-300 p-4 rounded-lg m-4">
        <div className="absolute top-0 left-0 right-0 p-4 bg-white bg-opacity-50 rounded-t-lg flex items-center justify-center">
          <p className="text-black font-bold">OFFER GHOSTING</p>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[85%] h-[85%]  rounded-lg overflow-hidden">
            <img 
              src="https://offerghost.com/wp-content/uploads/2024/06/dashboardUI.png" 
              alt="Card One"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div id="card-two"
           className="cards absolute top-[230%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40vh] bg-gradient-to-r from-blue-200 to-purple-300 p-4 rounded-lg m-4">
       <div className="absolute top-0 left-0 right-0 p-4 bg-white bg-opacity-50 rounded-t-lg flex items-center justify-center">
       <p className="text-black font-bold">Find My Pic</p>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[85%] h-[85%] rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/4201333/pexels-photo-4201333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Card Two"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div id="card-three"
           className="cards absolute top-[250%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40vh] bg-gradient-to-r from-blue-200 to-purple-300 p-4 rounded-lg m-4">
       <div className="absolute top-0 left-0 right-0 p-4 bg-white bg-opacity-50 rounded-t-lg flex items-center justify-center">
       <p className="text-black font-bold">GBL"Global Bussines League"</p>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[85%] h-[85%]  rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Card Two"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div id="card-four"
           className="cards absolute top-[270%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40vh] bg-gradient-to-r from-blue-200 to-purple-300 p-4 rounded-lg m-4">
        <div className="absolute top-0 left-0 right-0 p-4 bg-white bg-opacity-50 rounded-t-lg flex items-center justify-center">
        <p className="text-black font-bold">Tech Expert</p>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[85%] h-[85%]  rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200" 
              alt="Card Four"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProductSection; 