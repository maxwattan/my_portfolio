import React from 'react';
import './ProjectSection.css'; // Assuming you have styles here

function ProjectSection({ projects }) {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}