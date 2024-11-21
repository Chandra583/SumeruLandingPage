import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './OurWorkSection.module.css';

const OurWorkSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#work-main",
        start: "50% 50%",
        end: "150% 50%",
        scrub: 2,
        pin: true
      }
    });

    tl.to("#work-center", {
      height: "100vh",
    }, 'a')
    .to("#work-top", {
      top: "-50%",
    }, 'a')
    .to("#work-bottom", {
      bottom: "-50%",
    }, 'a')
    .to("#work-top-h1", {
      top: "60%"
    }, 'a')
    .to("#work-bottom-h1", {
      bottom: "-30%"
    }, 'a')
    .to("#work-center-h1", {
      top: "-30%"
    }, 'a')
    .to(`.${styles.content}`, {
      delay: -0.2,
      marginTop: "0%"
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div id="work-main" className={styles.workMain}>
      <div id="work-top" className={styles.top}>
        <h1 id="work-top-h1" className={styles.heading}>
          OUR WORK
        </h1>
      </div>
      
      <div id="work-center" className={styles.center}>
        <div className={styles.content}>
          <h4 className={styles.subtitle}>OUR WORK</h4>
          <h3 className={styles.description}>
            <i>Explore</i> the projects that define our <i>expertise</i> and showcase our craft.
          </h3>
          <div className={styles.btn}>
            <h5>VIEW PROJECTS</h5>
          </div>
          <h2 className={styles.number}>(24)</h2>
        </div>
      </div>
      
      <div id="work-bottom" className={styles.bottom}>
        <h1 id="work-bottom-h1" className={`${styles.heading} ${styles.bottomHeading}`}>
          OUR WORK
        </h1>
      </div>
    </div>
  );
};

export default OurWorkSection; 