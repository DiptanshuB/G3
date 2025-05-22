import React, { useEffect, useRef } from 'react';
import './Hero.css';
import heroImage from '../assets/architects.jpg';
import Typed from 'typed.js';

const Hero: React.FC = () => {
  // Create reference to store the DOM element containing the animation
  const typedHeadingRef = useRef<HTMLHeadingElement>(null);
  const typedSubheadingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Make sure typedHeadingRef.current is not null
    if (typedHeadingRef.current) {
      const typed = new Typed(typedHeadingRef.current, {
        strings: ['Brand New'],
        typeSpeed: 80,
        backSpeed: 0,
        loop: false,
        showCursor: false,
        onComplete: () => {
          // Start subheading typing after heading is complete
          if (typedSubheadingRef.current) {
            new Typed(typedSubheadingRef.current, {
              strings: ['Group of Architects'],
              typeSpeed: 80,
              backSpeed: 0,
              loop: false,
              showCursor: false,
              onComplete: () => {
                // Show paragraph with animation once both headings are typed
                const paragraph = document.querySelector('.hero-paragraph');
                if (paragraph) {
                  paragraph.classList.add('visible');
                  
                  // Wait for paragraph animation to complete before showing button
                  setTimeout(() => {
                    const button = document.querySelector('.hero-button');
                    if (button) {
                      button.classList.add('visible');
                    }
                  }, 500); // Wait 500ms after paragraph starts animating
                }
              }
            });
          }
        }
      });
      
      // Cleanup function to destroy Typed instance on component unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);
  
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 ref={typedHeadingRef}></h1>
        <h2 ref={typedSubheadingRef}></h2>
        <p className="hero-paragraph">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even
        </p>
        <button className="explore-btn hero-button">Explore More</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Architects team" />
      </div>
    </section>
  );
};

export default Hero; 