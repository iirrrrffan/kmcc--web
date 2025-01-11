import React from 'react';
import image1 from "../../assets/10-2.jpg";
import image2 from "../../assets/1-3.jpg";
import image3 from "../../assets/484958.jpg";

const Gallery = () => {
  const images = [image1, image2, image3];

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <img src={src} alt={`Gallery item ${index + 1}`} className="w-full h-full object-cover transform hover:scale-105 transition-all duration-300" />
              <div className="absolute inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
