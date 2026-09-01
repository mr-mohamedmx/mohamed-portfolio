import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsList = [
    {
      title: 'Smart Attendance Management System',
      date: 'In Development',
      description: 'Full-stack application designed to automate student/employee attendance tracking, feature role-based access control, and generate real-time analytical reports.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MySQL / PostgreSQL'],
      github: '#',
      external: '',
      features: [
        'Automated attendance logging with instant status updates.',
        'Role-based dashboards tailored for Administrators, Managers, and Users.',
        'RESTful API backend for seamless data exchange and authentication.',
        'Exportable monthly and weekly attendance analytics & reports.',
        'Relational database architecture for reliable and optimized record storage.'
      ]
    },
    {
      title: 'Sport Vault — Sports Equipment E-commerce',
      date: '04/2026 – 07/2026',
      description: 'Full-stack web application featuring user authentication, product management, payment processing, and a comprehensive admin dashboard.',
      tech: ['React.js', 'ASP.NET Core Web API', 'SQL Server'],
      github: '#',
      external: '#',
      features: [
        'Secure user authentication and role-based access control (Admin/Customer).',
        'Dynamic product catalog with advanced search and filtering options.',
        'Shopping cart functionality with secure payment processing integration.',
        'Comprehensive admin dashboard for managing inventory, viewing orders, and tracking sales.',
        'RESTful API backend connected to a robust SQL Server database.'
      ]
    },
    {
      title: 'Accounting Management System',
      date: '03/2025 – 06/2025',
      description: 'Desktop system developed as a group project to manage financial records (income, expenses, reports) and stock management to track inventory levels, supported by a database backend.',
      tech: ['C#', 'SQL Database'],
      github: '#',
      external: '',
      features: [
        'Built a standalone desktop application tailored for small business accounting.',
        'Implemented modules for tracking income, expenses, and generating financial reports.',
        'Developed a real-time stock management feature that updates inventory levels upon transactions.',
        'Collaborated effectively within a team environment using source control and agile practices.',
        'Designed a normalized relational database schema for efficient data storage.'
      ]
    },
    {
      title: 'Saloon Website',
      date: '08/2024 – 01/2025',
      description: 'Responsive salon website presenting salon services in a simple, user-friendly design to enhance local business online presence.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
      external: '#',
      features: [
        'Designed a fully responsive layout that looks great on mobile, tablet, and desktop.',
        'Created interactive UI elements using Vanilla JavaScript (image carousels, mobile menus).',
        'Optimized images and assets for fast loading times.',
        'Organized salon services into a clean, easy-to-read pricing menu.'
      ]
    },
    {
      title: 'Snake Game',
      date: '03/2025 – 05/2025',
      description: 'Classic 2D Snake game built with score tracking, movement control logic, and precise collision detection.',
      tech: ['Java'],
      github: '#',
      external: '',
      features: [
        'Developed classic arcade gameplay mechanics entirely in Java.',
        'Implemented a game loop for smooth rendering and state updates.',
        'Engineered precise grid-based movement and collision detection logic.',
        'Added dynamic score tracking that increases as the player collects items.'
      ]
    }
  ];

  // Prevent scroll when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedProject]);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">
        <span className="font-mono text-accent text-lg mr-2">03.</span> Some Things I've Built
      </h2>
      
      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <div 
            key={index} 
            className="project-card clickable"
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-header">
              <div className="folder-icon">
                <span className="font-mono text-accent text-2xl">{'</>'}</span>
              </div>
              <div className="project-links" onClick={(e) => e.stopPropagation()}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub size={20} />
                  </a>
                )}
                {project.external && (
                  <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            <span className="project-date font-mono">{project.date}</span>
            <p className="project-description">{project.description}</p>
            
            <ul className="project-tech-list font-mono">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            
            <div className="view-more font-mono text-accent">
              View Details &rarr;
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X size={24} />
            </button>
            
            <h3 className="modal-title">{selectedProject.title}</h3>
            <span className="modal-date font-mono">{selectedProject.date}</span>
            
            <p className="modal-description">{selectedProject.description}</p>
            
            <div className="modal-features">
              <h4>Key Features & Responsibilities:</h4>
              <ul>
                {selectedProject.features.map((feature, i) => (
                  <li key={i}>
                    <span className="text-accent mr-2">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="modal-footer">
              <ul className="modal-tech-list font-mono">
                {selectedProject.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              
              <div className="modal-links">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{padding: '0.5rem 1rem'}}>
                    View Code
                  </a>
                )}
                {selectedProject.external && (
                  <a href={selectedProject.external} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{padding: '0.5rem 1rem'}}>
                    Live Site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
