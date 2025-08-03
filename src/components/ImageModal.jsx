import React from "react";
import "../stylesheets/ImageModal.css";

const ImageModal = ({ image, name, onClose }) => {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ImageModal;
