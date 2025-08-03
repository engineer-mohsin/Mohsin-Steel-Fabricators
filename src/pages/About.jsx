import React from "react";
import "../stylesheets/About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-intro">
          At <strong>Mohsin Steel Fabricators</strong>, we bring decades of expertise in metal design, welding, and structural steel solutions. From residential gates to industrial-scale projects, we deliver precision, durability, and unmatched quality.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To provide top-quality steel fabrication services that combine innovative engineering and skilled craftsmanship — ensuring every project is strong, safe, and stunning.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To become Pakistan's most trusted name in steelwork, known for our commitment to excellence, timely delivery, and client satisfaction.
            </p>
          </div>

          <div className="about-card">
            <h3>Why Choose Us</h3>
            <ul>
              <li>Experienced team of welders & designers</li>
              <li>Modern machinery & tools</li>
              <li>Strict quality assurance & on-time delivery</li>
              <li>Custom metalwork solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
