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
        trigger: '#main-gc',
        pin: true,
        pinSpacing: true,
        start: 'top top',
        end: '+=300%',
        scrub: 1,
        markers: true,
      }
    });

    // Remove the incorrect animation
    // tl.to('.all-skills .skils', {...});

    // Update the animation sequence
    const animationSequence = [
      'AR_VR', 'logo', 'social', 'seo', 'adobe', 
      'reels', 'html', 'digital', 'webflow', 'figma', 
      'javascript', 'wordpress', 'css'
    ];

    // Add initial state
    gsap.set(animationSequence.map(id => `#${id}`), {
      opacity: 0,
      filter: "blur(10px)"
    });

    // Animate each element
    animationSequence.forEach((id) => {
      tl.to(`#${id}`, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        stagger: {
          each: 0.3,
          from: "random"
        }
      }, "<0.2");
    });

    // Initial state for cards
    gsap.set('.first-card', { opacity: 1, y: 0 });
    gsap.set('.second-card', { 
      opacity: 0, 
      y: 200
    });

    // Separate timeline for right content cards
    const rightContentTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.right-content',
        start: 'top center',
        end: '+=250%', // Increased scroll distance
        scrub: true,
        markers: true
      }
    });

    // Right content card animations
    rightContentTl
      // First card stays visible for longer
      .to('.first-card', {
        opacity: 1,  // Stays fully visible
        y: 0,        // Stays in place
        duration: 4  // Extended duration
      })
      // Then fades out
      .to('.first-card', {
        opacity: 0,
        y: -50,
        duration: 3
      })
      // Second card animation
      .to('.second-card', {
        opacity: 1,
        y: 0,
        duration: 4
      }, '>');

    // Cleanup
    return () => {
      lenis.destroy();
      tl.kill();
      rightContentTl.kill();
    };
  }, []);

  return (
    <div className={styles.mainGc} id="main-gc" style={{ 
      marginTop: '10px',
      backgroundColor: '#000000', 
      position: 'relative',
      overflow: 'hidden',
      height: '100vh'
    }}>
      <div className={styles.contentWrapper} style={{ 
        display: 'flex', 
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        padding: '3rem',
        position: 'relative'
      }}>
        {/* Left Content - 60% width */}
        <div className={styles.leftContent} style={{
          width: '60%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '2rem'
        }}>
          {/* Heading Section */}
          <div className={styles.headingSection}>
            <h1 style={{ color: '#ffffff' }}>Tech Stack</h1>
          </div>
          
          {/* Skills Section */}
          <div className={`${styles.mainSection} main-section ${styles.dFlex}`}>
            <div className={`${styles.skills} ${styles.dFlex}`} style={{ 
              // border: '1px solid red',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <h2 id="figma" style={{ color: '#ffffff' }}>Figma</h2>
              <h2 id="adobe" style={{ color: '#ffffff' }}>AWS</h2>
              <h2 id="html" style={{ color: '#ffffff' }}>HTML</h2>
              <h2 id="css" style={{ color: '#ffffff' }}>CSS</h2>
              <h2 id="javascript" style={{ color: '#ffffff' }}>TypeScript</h2>
              <h2 id="webflow" style={{ color: '#ffffff' }}>NextJS</h2>
              <h2 id="wordpress" style={{ color: '#ffffff' }}>Wordpress</h2>
              <h2 id="seo" style={{ color: '#ffffff' }}>SEO</h2>
              <h2 id="digital" style={{ color: '#ffffff' }}>Digital Marketing</h2>
              <h2 id="logo" style={{ color: '#ffffff' }}>Blockchain</h2>
              <h2 id="AR_VR" style={{ color: '#ffffff' }}>AR & VR</h2>
              <h2 id="social" style={{ color: '#ffffff' }}>MERN Stack</h2>
              <h2 id="reels" style={{ color: '#ffffff' }}>AI &ML</h2>
            </div>
          </div>
        </div>

        {/* Right Content - 40% width */}
        <div className={`${styles.rightContent} right-content`} style={{ 
          width: '40%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div className={styles.rightInner} style={{ color: '#ffffff', position: 'relative' }}>
            {/* First Card */}
            <div className={`${styles.radialGradient} first-card`} style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%)',
              borderRadius: '12px',
              padding: '20px',
              margin: '20px 0',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h4 style={{ marginBottom: '10px' }}>Technology Expertise</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                We leverage cutting-edge technologies to build innovative solutions.
              </p>
            </div>

            {/* Second Card */}
            <div className={`${styles.radialGradient} second-card`} style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              opacity: 0,
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%)',
              borderRadius: '12px',
              padding: '20px',
              margin: '20px 0',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h4 style={{ marginBottom: '10px' }}>Future Technologies</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                Exploring the next generation of tech solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack; 