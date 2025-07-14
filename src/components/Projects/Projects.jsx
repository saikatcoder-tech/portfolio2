import React, { useState } from 'react';
import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Show only 6 initially
  const visibleProjects = showAll ? mywork_data : mywork_data.slice(0, 3);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
        {/* <img src={theme_pattern} alt="decor" /> */}
      </div>

      <div className="projects-container">
        
        {visibleProjects.map((work, index) => (
           
          <div className="projects-components" key={index}>
            <img src={work.w_img} alt={work.title} />
            <div className="text-overlay">
              <a href={work.w_live} target="_blank" rel="noreferrer">🚀 Live</a>
              <a href={work.w_github} target="_blank" rel="noreferrer">💻 GitHub</a>
            </div>
          </div>
          
        ))}
      </div>
    
    
      <div className="projects-showmore" onClick={handleToggle}>
        <p>{showAll ? 'Show Less' : 'Show More'}</p>
        <img src={arrow_icon} alt="arrow" className={showAll ? 'rotate-arrow' : ''} />
      </div>
      </div>
      
    
  );
};

export default Projects;
