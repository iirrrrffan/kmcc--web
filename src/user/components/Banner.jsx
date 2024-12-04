import React from "react";
import image from "../../assets/frds.jpg";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-full">
        <img
          src={image}
          alt="Banner"
          className="object-cover w-full h-full"
        />    
        {/* Overlay Section */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start p-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
              Connecting Communities
            </h2>
            <button className="px-6 py-3 bg-green-600 text-white text-lg font-medium rounded shadow-lg hover:bg-green-700 transition duration-300">
              Learn Moreeeee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
