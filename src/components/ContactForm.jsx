// ContactForm.jsx
import React, { useState } from "react";
import "../stylesheets/ContactForm.css";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigateToHome = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data. Replace this with backend/API call.
    console.log("Form submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", number: "", message: "" });
    navigateToHome("/");
  };

  return (
    <section className="contact-form-section">
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="number"
            placeholder="Your Phone Number"
            required
            value={formData.number}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Write your message..."
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
