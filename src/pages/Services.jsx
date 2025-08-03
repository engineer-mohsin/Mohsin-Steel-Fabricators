import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ImageModal from "../components/ImageModal";
import "../stylesheets/Services.css";

// ✅ Use different relevant images instead of using `gates` for all
import gates from "../assets/images/gate.jpeg";

const ProductData = [
  {
    name: "Main Entrance Gates",
    image: gates,
    description:
      "Strong, custom steel gates for residential and industrial use.",
  },
  {
    name: "Steel Staircases & Railings",
    image: gates,
    description: "Modern steel stairs with custom-designed railings.",
  },
  {
    name: "Heavy Duty Metal Doors",
    image: gates,
    description: "Secure steel doors built for durability and performance.",
  },
  {
    name: "Modern Steel Furniture",
    image: gates,
    description: "Durable chairs, beds, and benches with a modern finish.",
  },
  {
    name: "Work Benches & Tables",
    image: gates,
    description: "Custom-built steel tables ideal for homes or offices.",
  },
  {
    name: "Gate Automation Ready Frames",
    image: gates,
    description: "Frames compatible with motorized gate systems.",
  },
  {
    name: "Balcony & Stair Railings",
    image: gates,
    description: "Stylish railings crafted for both indoor and outdoor spaces.",
  },
  {
    name: "Fire-Rated Metal Doors",
    image: gates,
    description:
      "High-security, fire-resistant doors for critical applications.",
  },
  {
    name: "Wall-Mounted Steel Cabinets",
    image: gates,
    description:
      "Space-saving steel cabinets for residential or commercial use.",
  },
  {
    name: "Luxury Steel Sofa Sets",
    image: gates,
    description: "Elegant furniture frames made from precision-welded steel.",
  },
  {
    name: "Office & Cafe Tables",
    image: gates,
    description: "Custom steel tables for modern workspaces and dining areas.",
  },
];

const Services = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => setModalData(data);
  const closeModal = () => setModalData(null);

  return (
    <section className="services-grid-section">
      <div className="services-grid-header">
        <h2>Steel Fabrication Services</h2>
        <p>From gates to cabinets — we craft steel to suit every purpose.</p>
      </div>

      <div className="services-grid">
        {ProductData.map((service, idx) => (
          <ProductCard key={idx} {...service} onClick={openModal} />
        ))}
      </div>

      <ImageModal
        image={modalData?.image}
        name={modalData?.name}
        onClose={closeModal}
      />
    </section>
  );
};

export default Services;
