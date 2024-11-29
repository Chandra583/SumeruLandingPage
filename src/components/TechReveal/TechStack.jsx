import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import styles from './TechReveal.module.css';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // GSAP Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-section',
        pin: true,
        start: '50% 50%',
        end: '300% 50%',
        scrub: true,
      }
    });

    tl.to('.all-skills .skils', {
      opacity: 1,
      filter: "blur(0px)",
      stagger: { 
        each: 0.2, 
        from: "random",
       },// staggers the animations by 0.2 seconds between each element
    });

    const animationSequence = [
      'AR_VR', 'logo', 'social', 'seo', 'adobe', 
      'reels', 'html', 'digital', 'webflow', 'figma', 
      'javascript', 'wordpress', 'css'
    ];

    animationSequence.forEach((id) => {
      tl.to(`#${id}`, {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
      });
    });

    // Cleanup
    return () => {
      lenis.destroy();
      tl.kill();
    };
  }, []);

  return (
    <div className={styles.mainGc} id="main-gc" style={{ backgroundColor: '#FAFAFA' }}>
      <div className={`${styles.oneBlank} ${styles.dFlexC}`}>
        <h1 style={{ color: '#0a0a0a' }}>Tech Stack</h1>
        {/* <h4 style={{ color: '#0a0a0a' }}>Technologies We Use to Build Products</h4> */}
      </div>
      <div className={`${styles.mainSection} main-section ${styles.dFlex}`}>
        <div className={`${styles.skills} ${styles.dFlex}`}>
          <h2 id="figma" style={{ color: '#0a0a0a' }}>Figma</h2>
          <h2 id="adobe" style={{ color: '#0a0a0a' }}>AWS</h2>
          <h2 id="html" style={{ color: '#0a0a0a' }}>HTML</h2>
          <h2 id="css" style={{ color: '#0a0a0a' }}>CSS</h2>
          <h2 id="javascript" style={{ color: '#0a0a0a' }}>TypeScript</h2>
          <h2 id="webflow" style={{ color: '#0a0a0a' }}>NextJS</h2>
          <h2 id="wordpress" style={{ color: '#0a0a0a' }}>Wordpress</h2>
          <h2 id="seo" style={{ color: '#0a0a0a' }}>SEO</h2>
          <h2 id="digital" style={{ color: '#0a0a0a' }}>Digital Marketing</h2>
          <h2 id="logo" style={{ color: '#0a0a0a' }}>Blockchain</h2>
          <h2 id="AR_VR" style={{ color: '#0a0a0a' }}>AR & VR</h2>
          <h2 id="social" style={{ color: '#0a0a0a' }}>MERN Stack</h2>
          <h2 id="reels" style={{ color: '#0a0a0a' }}>AI &ML</h2>
        </div>
      </div>
    </div>
  );
};

export default TechStack; 