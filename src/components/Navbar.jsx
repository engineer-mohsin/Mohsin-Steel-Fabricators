import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import logoImage from "../assets/images/MSF Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  const isActive = (path) => location.pathname === path;

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923189480688", "_blank");
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <a href="/" className="logo-link" onClick={closeMenu}>
              <img src={logoImage} alt="" />
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Nav Links */}
          <div className={`nav-links-container ${menuOpen ? "active" : ""}`}>
            <ul className="nav-links">
              <li>
                <Link
                  to="/"
                  className={isActive("/") ? "active" : ""}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className={isActive("/services") ? "active" : ""}
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  className={isActive("/clients") ? "active" : ""}
                  onClick={closeMenu}
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={isActive("/about") ? "active" : ""}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={isActive("/contact") ? "active" : ""}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-cta-mobile">
                <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
                  WhatsApp
                </button>
              </li>
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="nav-cta">
            <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
              WhatsApp
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
