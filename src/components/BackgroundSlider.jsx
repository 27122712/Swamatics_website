import React, { useState, useEffect } from "react";

const BackgroundSlider = ({ images, interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{ backgroundImage: `url(${images[index]})` }}
    />
  );
};

export default BackgroundSlider;
