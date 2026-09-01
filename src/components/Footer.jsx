import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://github.com/mr-mohamedmx" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={20} />
        </a>
        <a href="https://linkedin.com/in/mr-mohamed-a80a54337" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:Mohamedriyal2003@gmail.com" aria-label="Email">
          <Mail size={20} />
        </a>
      </div>
      
      <div className="footer-text font-mono">
        <p>Designed & Built by Mohamed Riyal</p>
        <p className="copyright">&copy; {year} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
