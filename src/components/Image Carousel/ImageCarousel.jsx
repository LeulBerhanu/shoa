import React, { useState } from "react";
import "./ImageCarousel.css";
import house from "../../img/house.png";

const ImageCarousel = () => {
  const images = [
    house,
    "https://via.placeholder.com/800x400/33FF57/000000",
    "https://via.placeholder.com/800x400/5733FF/FFFFFF",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button" onClick={prevImage}>
        &lt;
      </button>
      <div className="carousel-images">
        {images.map((url, index) => (
          <div
            key={index}
            className={`carousel-image ${
              index === currentImage ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${url})` }}
          ></div>
        ))}
      </div>
      <button className="carousel-button" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
