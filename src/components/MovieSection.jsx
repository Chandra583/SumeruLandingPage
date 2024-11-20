import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

// Styled Components
const Section = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: #0a0a0a;
  padding: 0vw 15vw 0vw 20vw;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0%;
  width: 100%;
  height: 100vh;
//   background-image: linear-gradient(rgb(19, 19, 19), rgba(255, 255, 0, 0), rgb(19, 19, 19));
`;

const TextArea = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  padding-top: 15vh;
  z-index: 9;
  gap: 3vh;

  h1 {
    font-family: var(--font-family);
    font-size: 4vw;
    color: black;
    overflow: hidden;
    white-space: nowrap;
    margin: 0;
  }

  p {
    font-family: var(--font-family);
    font-size: 1vw;
    color: black;
    margin: 0;
    max-width: 90%;
    line-height: 1.5;
  }

  a {
    width: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    font-family: var(--font-family);
    text-decoration: none;
    color: black;
    
    &:hover {
      gap: 1vw;
    }

    h3 {
      font-size: 0.8vw;
    }
  }

  h2 {
    font-family: var(--font-family);
    margin: 0;
    font-size: 0.6vw;
    color: #454545;
  }
`;

const LineOne = styled.div`
  width: 20%;
  height: 100vh;
  overflow: hidden;
`;

const InnerLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
  width: 100%;
  height: 200vh;
  ${props => props.isSecond && `
    margin-top: -100vh;
  `}
`;

const Card = styled.div`
  width: 100%;
  height: 50vh;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.bgImage});
`;

const MovieSection = () => {
  const lineOneRef = useRef(null);
  const lineTwoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Remove the text animation timeline (tl0)
    
    // Keep only the background color animation
    gsap.to("#movie-section", {
      scrollTrigger: {
        trigger: "#movie-section",
        start: "30% 50%",
        end: "80% 50%",
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const section = document.getElementById('movie-section');
          section.style.backgroundColor = gsap.utils.interpolate('#0a0a0a', '#FAFAFA', progress);
        }
      }
    });

    // Adjust the margin values for more space between lines
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#movie-section",
        markers: true,
        start: "50% 50%",
        end: "150% 50%",
        scrub: 1.5,
        pin: true
      }
    });

    tl.to(lineOneRef.current, {
      marginTop: "-150vh",
    }, 'baba')
    .to(lineTwoRef.current, {
      marginTop: "50vh",
    }, 'baba');

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const images = {
    line1: [
      "https://www.cinecasero.uy/img/hmd/hmd-1.jpg",
      "https://www.cinecasero.uy/img/hmd/hmd-2.jpg",
      "https://www.cinecasero.uy/img/hmd/hmd-3.jpg",
      "https://www.cinecasero.uy/img/hmd/hmd-4.jpg",
      "https://www.cinecasero.uy/img/hmd/hmd-5.jpg",
      
    ],
    line2: [
      "https://www.cinecasero.uy/img/hmd/hmd-6.jpg",
      "https://www.cinecasero.uy/img/hmd/hmd-7.jpg",
      "https://www.cinecasero.uy/img/hmd/hmd-8.jpg",
      "https://www.cinecasero.uy/img/hmd/hmd-9.jpg",
      "https://www.cinecasero.uy/img/hmd/hmd-10.jpg"
    ]
  };

  return (
    <Section id="movie-section">
      <Overlay />
      <TextArea ref={textRef}>
        <h1>About Us</h1>
        <p className="text-p">
          At Sumeru Digital Solutions, we are passionate about harnessing the power of technology to drive business growth and innovation. As a leading software development company, we specialize in crafting cutting-edge digital solutions that empower businesses to thrive in today's fast-paced digital landscape.
        </p>
        <p className="text-p">
          Our team of experts is dedicated to delivering tailored software applications, web solutions, and digital transformation strategies that meet the unique needs of each client. We believe in fostering long-term partnerships built on trust, innovation, and a relentless pursuit of excellence.
        </p>
        <a href="#" className="text-a">
          <h3>LEARN MORE ABOUT OUR STORY</h3>
          <i className="ri-arrow-right-line"></i>
        </a>
        <a href="#" className="text-a">
          <h3>MEET OUR TEAM</h3>
          <i className="ri-arrow-right-line"></i>
        </a>
        <h2 className="text-h2">EMPOWERING YOUR BUSINESS FOR THE FUTURE</h2>
        <h2 className="text-h2">WHERE INNOVATION MEETS EXECUTION</h2>
      </TextArea>

      <LineOne>
        <InnerLine ref={lineOneRef}>
          {images.line1.map((img, index) => (
            <Card key={`line1-${index}`} bgImage={img} />
          ))}
        </InnerLine>
      </LineOne>

      <LineOne>
        <InnerLine ref={lineTwoRef} isSecond>
          {images.line2.map((img, index) => (
            <Card key={`line2-${index}`} bgImage={img} />
          ))}
        </InnerLine>
      </LineOne>
    </Section>
  );
};

export default MovieSection;