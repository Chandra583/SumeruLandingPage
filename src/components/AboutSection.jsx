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
  height: 400vh;
  ${props => props.isSecond && `
    margin-top: -200vh;
  `}
`;

const Card = styled.div`
  width: 100%;
  height: 50vh;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.bgImage});
  opacity: 0;
`;

const AboutSection = () => {
  const lineOneRef = useRef(null);
  const lineTwoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Background color animation - ends earlier
    gsap.to("#movie-section", {
      scrollTrigger: {
        trigger: "#movie-section",
        start: "top 80%",
        end: "40% center",
        // markers: true,
        scrub: 2,
        onUpdate: (self) => {
          const progress = self.progress;
          const section = document.getElementById('movie-section');
          section.style.backgroundColor = gsap.utils.interpolate('#0a0a0a', '#FAFAFA', progress);
          
          // Update opacity of all Card elements with eased transition
          const cards = section.getElementsByClassName('image-card');
          Array.from(cards).forEach(card => {
            card.style.opacity = gsap.utils.interpolate(0, 1, progress);
          });
        }
      },
      ease: "power2.inOut"
    });

    // Line scrolling animation - starts after background transition
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#movie-section",
        // markers: true,
        start: "40% center",
        end: "200% 80%",
        scrub: 1.5,
        pin: true
      }
    });

    tl.to(lineOneRef.current, {
      marginTop: "-300vh",
    }, 'baba')
    .to(lineTwoRef.current, {
      marginTop: "-0vh",
    }, 'baba');

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const images = {
    line1: [
      "https://media.licdn.com/dms/image/v2/D5622AQFLWsRtUYt9Bg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1718451116734?e=1735171200&v=beta&t=8IJpTmVLqbSa1zKWckyVC8M71idothUGwHS6jqVjM08",
      "https://media.licdn.com/dms/image/v2/D5622AQG4RHowO1gD-Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1718451122237?e=1735171200&v=beta&t=dZymWYmDadsK17aBX4IokeHSrwCtoSn2B2mNT7lH-G4",
      "https://media.licdn.com/dms/image/v2/D4E22AQEKnczZtZwJPg/feedshare-shrink_1280/feedshare-shrink_1280/0/1726136863691?e=1735171200&v=beta&t=tNnQ2IfJalTz1Lb52eMrcXLpBVGMSTHYJWWlQPnO3N8",
      "https://media.licdn.com/dms/image/v2/D5622AQHgkQ-wpeJgMA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1718451109980?e=1735171200&v=beta&t=wWJmWiLxt13f4z3sCFS7ANw-v6If10lIx5UJYawuQl0",
      "https://sumerudigital.com/wp-content/uploads/2024/06/c71c38c1-0845-4620-a89c-12127d43502f.jpg",
      "https://sumerudigital.com/wp-content/uploads/2024/06/a77fd91d-293f-4612-b9e1-e4f2d6d5e803.jpg",
      "https://sumerudigital.com/wp-content/uploads/2024/06/d8adb02f-5de2-4c4a-9142-14e1c4e0097a.jpg",
      "https://sumerudigital.com/wp-content/uploads/2024/06/fe0fd97c-4e35-47b4-b878-723d4a2fd6be.jpg",
      "https://sumerudigital.com/wp-content/uploads/2024/06/11825bdf-fb4c-420e-bb42-ab940a166721.jpg",
      "https://www.cinecasero.uy/img/hmd/hmd-5.jpg",
    ],
    line2: [
      "https://media.licdn.com/dms/image/v2/D5622AQFLWsRtUYt9Bg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1718451116734?e=1735171200&v=beta&t=8IJpTmVLqbSa1zKWckyVC8M71idothUGwHS6jqVjM08",
      "https://media.licdn.com/dms/image/v2/D5622AQG4RHowO1gD-Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1718451122237?e=1735171200&v=beta&t=dZymWYmDadsK17aBX4IokeHSrwCtoSn2B2mNT7lH-G4",
      "https://media.licdn.com/dms/image/v2/D4E22AQEKnczZtZwJPg/feedshare-shrink_1280/feedshare-shrink_1280/0/1726136863691?e=1735171200&v=beta&t=tNnQ2IfJalTz1Lb52eMrcXLpBVGMSTHYJWWlQPnO3N8",
      "https://media.licdn.com/dms/image/v2/D5622AQHgkQ-wpeJgMA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1718451109980?e=1735171200&v=beta&t=wWJmWiLxt13f4z3sCFS7ANw-v6If10lIx5UJYawuQl0",
      "https://sumerudigital.com/wp-content/uploads/2024/06/c71c38c1-0845-4620-a89c-12127d43502f.jpg",
      "https://sumerudigital.com/wp-content/uploads/2024/06/a77fd91d-293f-4612-b9e1-e4f2d6d5e803.jpg",
      "https://sumerudigital.com/wp-content/uploads/2024/06/d8adb02f-5de2-4c4a-9142-14e1c4e0097a.jpg",
      "https://sumerudigital.com/wp-content/uploads/2024/06/fe0fd97c-4e35-47b4-b878-723d4a2fd6be.jpg",
      "https://sumerudigital.com/wp-content/uploads/2024/06/11825bdf-fb4c-420e-bb42-ab940a166721.jpg",
      "https://www.cinecasero.uy/img/hmd/hmd-5.jpg",
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
       
      </TextArea>

      <LineOne>
        <InnerLine ref={lineOneRef}>
          {images.line1.map((img, index) => (
            <Card 
              key={`line1-${index}`} 
              bgImage={img} 
              className="image-card"
            />
          ))}
        </InnerLine>
      </LineOne>

      <LineOne>
        <InnerLine ref={lineTwoRef} isSecond>
          {images.line2.map((img, index) => (
            <Card 
              key={`line2-${index}`} 
              bgImage={img}
              className="image-card"
            />
          ))}
        </InnerLine>
      </LineOne>
    </Section>
  );
};

export default AboutSection;