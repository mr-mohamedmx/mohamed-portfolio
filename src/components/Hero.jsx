import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "I build web and desktop applications.",
    "I develop full-stack & management systems.",
    "I create exceptional digital experiences."
  ];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const handleType = () => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    setText(
      isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
    );

    setTypingSpeed(isDeleting ? 30 : 150);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500);
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content-wrapper">
        <div className="hero-text">
          <p className="hero-greeting font-mono text-accent">Hi, my name is</p>
          <h1 className="hero-name">Mohamed Riyal.</h1>
          <h2 className="hero-title">
            {text}
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            I'm a Software Engineering Intern and HNDIT undergraduate with a passion for building 
            exceptional digital experiences. Currently, I'm focused on applying my technical skills 
            and gaining industry experience.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">Check out my projects</a>
            
            <div className="social-links">
              <a href="https://github.com/mr-mohamedmx" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/mr-mohamed-a80a54337" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:Mohamedriyal2003@gmail.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-image-container">
          <img src="/profile.jpg" alt="Mohamed Riyal" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
