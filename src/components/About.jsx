import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">
        <span className="font-mono text-accent text-lg mr-2">01.</span> About Me
      </h2>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Mohamed Riyal, an HNDIT undergraduate at SLIATE with hands-on experience developing 
            web and desktop applications. My journey in software development has equipped me with a strong 
            foundation in building full-stack applications and solving real-world problems through code.
          </p>
          <p>
            I have practical experience working with a variety of technologies including React.js for the 
            frontend, ASP.NET Core Web API, C#, and Java for the backend, supported by SQL Server and MySQL databases.
          </p>
          <p>
            I've developed several academic projects, such as a comprehensive full-stack e-commerce 
            application that includes authentication, product management, payment functionality, and an admin dashboard.
          </p>
          <p>
            Currently, I'm seeking a <strong>Software Engineering Internship</strong> to apply my technical 
            skills, gain industry experience, and contribute to impactful software development projects.
          </p>
          <div className="about-resume-btn">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="about-image-wrapper">
          <div className="about-image">
            <img src="/profile.jpg" alt="Mohamed Riyal" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
