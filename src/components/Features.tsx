import React from 'react';
import './Features.css';
import architectImage from '../assets/architect.png';

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="features-container">
        <div className="features-content">
          <div className="features-header">
            <h2>Features you will love and enjoy</h2>
            <p>
              Our architectural approach combines innovation with timeless design principles. 
              We focus on creating spaces that are both functional and aesthetically pleasing.
            </p>
          </div>
          <div className="features-cards">
            <div className="feature-card">
              <h3>Innovative Designs</h3>
              <p>
                We employ cutting-edge design techniques and innovative approaches to create unique architectural solutions.
              </p>
            </div>
            <div className="feature-card">
              <h3>Sustainable Architecture</h3>
              <p>
                Our buildings incorporate sustainable materials and energy-efficient systems to minimize environmental impact.
              </p>
            </div>
            <div className="feature-card">
              <h3>Expert Planning</h3>
              <p>
                Our team of experienced architects ensures meticulous planning at every stage of your project.
              </p>
            </div>
            <div className="feature-card">
              <h3>Client-Focused Approach</h3>
              <p>
                We prioritize your vision and requirements, collaborating closely to bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
        <div className="features-image">
          <img src={architectImage} alt="Professional architect" />
          <div className="experience-badge">
            <span className="years">10+</span>
            <span className="text">Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 