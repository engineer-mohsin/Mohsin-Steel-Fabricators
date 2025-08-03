import React from "react";
import "../stylesheets/Gallery.css";

import client from "../assets/images/Mohsin.jpg";

const clients = [
  {
    name: "Ali Khan",
    image: client,
    review: "Top-notch fabrication! Strong build and reliable delivery.",
    rating: 5,
    year: 2023,
  },
  {
    name: "Sana Steelworks",
    image: client,
    review:
      "The team exceeded our expectations. Quality and service were excellent.",
    rating: 4,
    year: 2024,
  },
  {
    name: "Bilal Enterprises",
    image: client,
    review: "Solid craftsmanship and timely communication.",
    rating: 4.5,
    year: 2022,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <div className="stars">
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={i}>★</span>
      ))}
      {halfStar && <span className="half">★</span>}
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-header">Our Satisfied Clients</h2>
      <div className="gallery-grid">
        {clients.map((client, index) => (
          <div className="gallery-card" key={index}>
            <div className="card-image">
              <img src={client.image} alt={client.name} />
            </div>
            <div className="card-content">
              <h3 className="client-name">{client.name}</h3>
              <p className="client-review">"{client.review}"</p>
              <div className="card-rating">
                {renderStars(client.rating)}
                <span className="year">({client.year})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
