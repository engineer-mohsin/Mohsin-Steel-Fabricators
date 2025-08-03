// Map.jsx
import React from "react";
import "../stylesheets/Map.css";

const Map = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <h2>Our Location</h2>
        <div className="map-embed">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.3395797952244!2d71.53766187497468!3d33.998621622680526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d930cd87cc857b%3A0xc07a1c8dbec78b0e!2sMohsin%20Steel%20Fabricators!5e0!3m2!1sen!2s!4v1722676515620!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
