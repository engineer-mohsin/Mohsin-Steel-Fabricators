// Footer.jsx
import React from "react";
import "../stylesheets/Footer.css";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/MSF Logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo & Description */}
        <div className="footer-col logo-col">
          <a href="/">
            <img src={logoImage} alt="Logo" />
          </a>
          <p>
            Delivering top-grade steel products with unmatched durability and
            performance. Your trusted partner in construction and fabrication.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/clients">Clients</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>
            <FaPhoneAlt className="icon" /> +92 318 9480688
          </p>
          <p>
            <FaEnvelope className="icon" /> info@msfsteel.com
          </p>
        </div>

        {/* Column 4: Socials */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/923189480688"
              target="_blank"
              rel="noreferrer"
              className="whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} <b>Mohsin Steel Fabricators</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
