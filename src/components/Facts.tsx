import React from 'react';
import './Facts.css';
// We'll use placeholder icons until we find the actual icons
import { ReactComponent as ProjectIcon } from '../assets/icons/project-icon.svg';
import { ReactComponent as ClientIcon } from '../assets/icons/client-icon.svg';
import { ReactComponent as EmailIcon } from '../assets/icons/email-icon.svg';
import { ReactComponent as AwardIcon } from '../assets/icons/award-icon.svg';

const Facts: React.FC = () => {
  return (
    <section className="facts">
      <div className="facts-container">
        <div className="facts-header">
          <h2>Some Facts</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="facts-grid">
          <div className="fact-card">
            <div className="fact-icon">
              <ProjectIcon />
            </div>
            <h3>1458</h3>
            <p>Project Finished</p>
          </div>
          <div className="fact-card">
            <div className="fact-icon">
              <ClientIcon />
            </div>
            <h3>590</h3>
            <p>Clients Worked</p>
          </div>
          <div className="fact-card">
            <div className="fact-icon">
              <EmailIcon />
            </div>
            <h3>22578</h3>
            <p>Email Send</p>
          </div>
          <div className="fact-card">
            <div className="fact-icon">
              <AwardIcon />
            </div>
            <h3>54</h3>
            <p>Awards Winnings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts; 