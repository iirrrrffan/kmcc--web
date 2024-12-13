import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import image1 from "../../assets/frds.jpg"; // Import the images


const Content3 = () => {
  const navigate = useNavigate(); // Hook to enable navigation

  // Function to handle the redirect
  const handleRedirect = () => {
    navigate('/another-page'); // Replace '/another-page' with the route you want to redirect to
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center space-y-8 relative"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg animate-fade-in-down z-10">
        Welcome to Gallery
      </h1>

      <p className="text-white text-center text-lg drop-shadow-lg z-10 max-w-3xl mx-4">
        Discover an amazing journey filled with opportunities. Our content will keep you engaged and informed. Click the button below to proceed.
      </p>

      {/* Button to trigger redirect */}
      <button
        onClick={handleRedirect}
        className="px-10 py-4 bg-gradient-to-r from-green-500 to-green-800 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-green-800 z-10"
      >
        See all
      </button>
    </div>
  );
};

export default Content3;
