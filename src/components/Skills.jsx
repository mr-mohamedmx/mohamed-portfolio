import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'C#', 'JavaScript', 'SQL']
    },
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS3', 'React.js']
    },
    {
      title: 'Backend',
      skills: ['ASP.NET Core Web API']
    },
    {
      title: 'Databases',
      skills: ['SQL Server', 'MySQL']
    },
    {
      title: 'Tools & Concepts',
      skills: ['Visual Studio', 'VS Code', 'OOP', 'REST APIs', 'CRUD', 'Database Design', 'Authentication']
    },
    {
      title: 'Soft Skills',
      skills: ['Teamwork', 'Communication', 'Problem Solving', 'Time Management']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">
        <span className="font-mono text-accent text-lg mr-2">02.</span> Skills & Expertise
      </h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="skill-item font-mono">
                  <span className="text-accent mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
