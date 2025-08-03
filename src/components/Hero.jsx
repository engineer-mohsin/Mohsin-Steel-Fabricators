import React, { useEffect, useState, useRef } from "react";
import "../stylesheets/Hero.css";

// Static image imports
import img1 from "../assets/images/img-1.jpg";
import img2 from "../assets/images/img-2.jpg";
import img3 from "../assets/images/img-3.jpg";
import img4 from "../assets/images/img-4.jpg";
import img5 from "../assets/images/img-5.jpg";
import img6 from "../assets/images/img-6.jpg";
import img7 from "../assets/images/img-7.jpg";
import img8 from "../assets/images/img-8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  const clearTimers = () => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return clearTimers;
  }, []);

  const handleManualSlide = (direction) => {
    clearTimers();
    direction === "prev" ? prevSlide() : nextSlide();
    timeoutRef.current = setTimeout(startAutoSlide, 5000);
  };

  const handleIndicatorClick = (index) => {
    clearTimers();
    setCurrentIndex(index);
    timeoutRef.current = setTimeout(startAutoSlide, 5000);
  };

  return (
    <section className="hero">
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Forging Strength in Every Steel</h1>
            <p className="hero-subtitle">
              Premium steel products built to last — engineered for power,
              precision, and performance.
            </p>
          </div>

          <button className="slider-btn left" onClick={() => handleManualSlide("prev")}>
            &#10094;
          </button>
          <button className="slider-btn right" onClick={() => handleManualSlide("next")}>
            &#10095;
          </button>

          <div className="slider-indicators">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`indicator ${idx === currentIndex ? "active" : ""}`}
                style={{
                  backgroundImage: `url(${img})`,
                  opacity: idx === currentIndex ? 1 : 0.4,
                }}
                onClick={() => handleIndicatorClick(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
