import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "f9690162-77ce-467d-8cda-3b6943a52d2f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
        setTimeout(() => setResult(""), 3000); // clear message after 3 seconds
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission Error", error);
      setResult("An error occurred while sending.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">
        <span className="font-mono text-accent text-lg mr-2">05.</span> Get In Touch
      </h2>

      <div className="contact-content">
        <p className="contact-text">
          I'm currently looking for new opportunities, specifically a Software Engineering Internship
          where I can apply my technical skills and contribute to real-world projects. Whether you have
          a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="contact-wrapper">
          <div className="contact-info-cards">
            <a href="mailto:Mohamedriyal2003@gmail.com" className="contact-card">
              <Mail className="contact-icon text-accent" size={28} />
              <div className="contact-details">
                <h3 className="contact-method">Email</h3>
                <p className="contact-detail">Mohamedriyal2003@gmail.com</p>
              </div>
            </a>

            <div className="contact-card">
              <Phone className="contact-icon text-accent" size={28} />
              <div className="contact-details">
                <h3 className="contact-method">Phone</h3>
                <p className="contact-detail">0763500658</p>
              </div>
            </div>

            <div className="contact-card">
              <MapPin className="contact-icon text-accent" size={28} />
              <div className="contact-details">
                <h3 className="contact-method">Location</h3>
                <p className="contact-detail">Bandaragama, Sri Lanka</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" name="name" className="form-input" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" className="form-input" required placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" className="form-textarea" required placeholder="Hello! I'd like to get in touch..."></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
            {result && <span style={{ color: result.includes("Error") || result.includes("error") ? "red" : "var(--accent-color)", marginTop: "10px", display: "block" }}>{result}</span>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
