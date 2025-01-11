import React, { useState, useEffect } from "react";
import { FaImages } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import image1 from "../../assets/1-3.jpg";
import image2 from "../../assets/10-2.jpg";
import image3 from "../../assets/484958.jpg";

const Content3 = () => {
  const navigate = useNavigate(); // Hook to enable navigation

  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3];

  
  const handleRedirect = () => {
    navigate('/gallery'); 
  };

  // Change the background image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
    
      className="min-h-screen bg-gray-900 flex flex-col items-center justify-center space-y-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-50">
      {/* Background Sliding Images */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Background ${index}`}
            className={`absolute w-full h-full object-cover transition-transform duration-1000 ${
              index === currentImage ? "translate-y-0" : "-translate-y-full"
            }`}
            style={{ transition: "transform 1s ease-in-out" }}
          />
        ))}
      </div>

      </div>

      <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg animate-fade-in-down z-10">
        Welcome to Gallery
      </h1>

      <p className="text-white text-center text-lg drop-shadow-lg z-10 max-w-3xl mx-4">
        Discover an amazing journey filled with opportunities. Our content will keep you engaged and informed. Click the button below to proceed.
      </p>
      
      <div
  onClick={handleRedirect}
  className="p-6 bg-white/30 backdrop-blur-md rounded-full shadow-lg text-white hover:bg-white/50 transition duration-300">
  <FaImages className="text-3xl" /> {/* Icon only */}
</div>
    </div>
  );
};

export default Content3;
