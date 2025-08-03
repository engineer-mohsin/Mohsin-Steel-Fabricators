import React from "react";
import "../stylesheets/ProductCard.css";

const ProductCard = ({ name, image, description, onClick }) => {
  return (
    <div className="service-card" onClick={() => onClick({ name, image })}>
      <div className="service-image">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="service-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
