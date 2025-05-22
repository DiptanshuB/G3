import React from 'react';
import './Sponsors.css';
import amazonLogo from '../assets/images/sponsors/amazon.png';
import googleLogo from '../assets/images/sponsors/google.png';
import figmaLogo from '../assets/images/sponsors/figma.png';
import spotifyLogo from '../assets/images/sponsors/spotify.png';
import teleramaLogo from '../assets/images/sponsors/telerama.png';

const Sponsors: React.FC = () => {
  return (
    <section className="sponsors">
      <div className="sponsors-container">
        <div className="sponsors-header">
          <h2>Our Sponsors</h2>
          <p>
            Our valued partners who support and believe in our architectural vision
          </p>
        </div>
        <div className="sponsors-grid">
          <div className="sponsor-logo">
            <img src={amazonLogo} alt="Amazon" />
          </div>
          <div className="sponsor-logo">
            <img src={googleLogo} alt="Google" />
          </div>
          <div className="sponsor-logo">
            <img src={figmaLogo} alt="Figma" />
          </div>
          <div className="sponsor-logo">
            <img src={spotifyLogo} alt="Spotify" />
          </div>
          <div className="sponsor-logo">
            <img src={teleramaLogo} alt="Telerama" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors; 