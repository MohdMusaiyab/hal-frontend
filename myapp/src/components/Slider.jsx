import React, { useState, useEffect } from "react";
import "../styles/Slider.css";
const images = [
  "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg",
  "https://c4.wallpaperflare.com/wallpaper/938/819/714/hal-rudra-indian-army-wallpaper-preview.jpg",
  "https://media.gettyimages.com/id/871534998/photo/the-hindustan-aeronautics-limited-logo-from-the-indian.jpg?s=612x612&w=gi&k=20&c=nwQtNCMikmdIoROM5P3q1GNKUnGUwpuPGQokgqSpjmM=",
  // Add more image paths
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds for better viewing

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container ">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
