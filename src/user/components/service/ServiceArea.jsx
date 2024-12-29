import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceArea = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/log");
  };

  return (
    <section className="service-area py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        {/* Title Section */}
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-300 to-green-500 mb-12">
          Our Premium Service
        </h2>

        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl group transform transition-all duration-500 hover:scale-105">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/20 hover:border-white/50 transition-all">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-green-600 to-green-800 opacity-70 rounded-3xl pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-4xl font-semibold text-white mb-6">
                  Thuqba Membership Status
                </h3>
                <p className="text-gray-300 text-lg mb-8">
                  Ensure your dear ones in Riyadh are registered with KMCC and enjoy exclusive benefits.
                </p>
                <button
                  onClick={handleNavigation}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-medium rounded-full shadow-lg hover:from-green-600 hover:to-green-800 transition-transform duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <i className="fas fa-check-circle text-xl"></i>
                  Check Membership Status
                </button>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 border-2 border-white/30 rounded-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
