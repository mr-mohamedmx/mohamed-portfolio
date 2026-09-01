import React from 'react';
import './Education.css';

const Education = () => {
  const educationList = [
    {
      institution: 'Sri Lanka Institute of Advanced Technological Education (SLIATE)',
      degree: 'Higher National Diploma in Information Technology (HNDIT)',
      duration: '2024 – Present',
      location: 'Dehiwala, Sri Lanka'
    },
    {
      institution: 'Arafa National School',
      degree: 'GCE Advanced Level (A/L) - Technology Stream',
      duration: '2020 – 2022',
      location: ''
    }
  ];

  const certificates = [
    { name: 'Web Design for Beginners', issuer: 'University of Moratuwa' },
    { name: 'Figma UI/UX Design Course', issuer: 'Alison' }
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">
        <span className="font-mono text-accent text-lg mr-2">04.</span> Education & Certificates
      </h2>
      
      <div className="education-content">
        <div className="education-block">
          <h3 className="sub-section-title">Education</h3>
          <div className="timeline">
            {educationList.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="degree">{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>
                  <div className="timeline-meta font-mono">
                    <span>{edu.duration}</span>
                    {edu.location && <span>{edu.location}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="certificates-block">
          <h3 className="sub-section-title">Certifications</h3>
          <ul className="certificates-list">
            {certificates.map((cert, index) => (
              <li key={index} className="certificate-item">
                <span className="text-accent text-xl mr-2">▹</span>
                <div>
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer font-mono">{cert.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
