import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import styles from './TechReveal.module.css';

gsap.registerPlugin(ScrollTrigger);

//gwvqdy

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
      <div className={`${styles.mainSection} ${styles.dFlex}`}>
        <div className={`${styles.oneBlank} ${styles.dFlexC}`}>
          <h1 style={{ color: '#0a0a0a' }}>Tech Stack We Use </h1>
          <p style={{ 
            color: '#0a0a0a', 
            textAlign: 'center',
            fontSize: '0.9rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            With this tech stack, we empower businesses to innovate and thrive in the digital landscape. From web development to digital marketing, we leverage the latest technologies to craft unique solutions tailored to our clients' needs.
          </p>
        </div>
        <div className={`${styles.skills} ${styles.dFlex}`} style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <h2 id="figma" style={{
            color: '#0a0a0a',
            background: 'linear-gradient(to right, #FFE5E5, #FFB9B9)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>Figma</h2>
          
          <h2 id="adobe" style={{
            color: '#0a0a0a',
            background: 'linear-gradient(to right, #E5F0FF, #B9D5FF)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>AWS</h2>
          
          <h2 id="html" style={{
            color: '#0a0a0a',
            background: 'linear-gradient(to right, #FFE5CC, #FFD199)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>HTML</h2>
          
          <h2 id="css" style={{
            color: '#0a0a0a',
            background: 'linear-gradient(to right, #E5FFE5, #B9FFB9)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>CSS</h2>
          
          <h2 id="javascript" style={{
            color: '#0a0a0a',
            background: 'linear-gradient(to right, #CCFFE5, #99FFD1)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>TypeScript</h2>
          
          <h2 id="webflow" style={{
            color: '#0a0a0a',
            background: 'linear-gradient(to right, #E5E5FF, #B9B9FF)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>NextJS</h2>
          
          <h2 id="wordpress" style={{
            color: '#0a0a0a',
            background: 'linear-gradient(to right, #F5E5FF, #E5B9FF)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>Wordpress</h2>
          
          <h2 id="seo" style={{
            color: '#0a0a0a',
            background: 'linear-gradient(to right, #FFE5CC, #FFCCB9)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>SEO</h2>
          
          <h2 id="digital" style={{
            color: '#0a0a0a',
            background: 'linear-gradient(to right, #E5F0FF, #CCE5FF)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>Digital Marketing</h2>
          
          <h2 id="logo" style={{
            color: '#0a0a0a',
            background: 'linear-gradient(to right, #F2F2F2, #E6E6E6)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>Blockchain</h2>
          
          <h2 id="AR_VR" style={{
            color: '#0a0a0a',
            background: 'linear-gradient(to right, #FFE5F2, #FFB9E5)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>AR & VR</h2>
          
          <h2 id="social" style={{
            color: '#0a0a0a',
            background: 'linear-gradient(to right, #FFE5E5, #FFD6D6)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>MERN Stack</h2>
          
          <h2 id="reels" style={{
            color: '#0a0a0a',
            background: 'linear-gradient(to right, #E5E5FF, #D6D6FF)',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>AI & ML</h2>
        </div>
      </div>
    </div>
  );
};

export default TechStack; 