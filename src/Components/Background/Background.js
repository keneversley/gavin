import React, { useState, useEffect } from 'react';
import './Background.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

const images = [image1, image2, image3]; // Array of images

export const Background = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <img
      src={images[currentImageIndex]}
      className="background fade-in"
      alt="Background"
    />
  );
};

export default Background;
