// src/components/WhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../stylesheets/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "923189480688"; // Replace with your number (without +)
  const message = "Hello! I have a query."; // Optional pre-filled message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
