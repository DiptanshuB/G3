import React from 'react';
import './Projects.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <div className="projects-container">
        <div className="projects-gallery">
          <div className="gallery-item">
            <img src={project1} alt="Modern office building" />
          </div>
          <div className="gallery-item">
            <img src={project2} alt="Residential complex" />
          </div>
          <div className="gallery-item">
            <img src={project3} alt="Public space design" />
          </div>
          <div className="gallery-item">
            <img src={project4} alt="Interior design" />
          </div>
        </div>
        <div className="projects-info">
          <h2>Our Featured Projects</h2>
          <p>
            We take pride in our innovative architectural designs, focusing on sustainability, 
            functionality, and aesthetic excellence. Browse through some of our recent works.
          </p>
          <button className="explore-btn">Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 