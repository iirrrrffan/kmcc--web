import React from "react";

const ServiceArea = () => {
  return (
    <section className="service-area py-16 bg-gradient-to-b from-gray-200 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500 mb-12">
          Our Premium Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="relative group transform transition duration-300 hover:scale-105">
            <div className="service__card bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden">
              <div className="relative p-8">
                <div className="service__icon flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-green-400 rounded-full shadow-md">
                  <img
                    src="assets/images/icon/service1.png"
                    alt="Registration Icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="service__content mt-12 text-center">
                  <h3 className="text-2xl font-bold text-black mb-4 transition-all group-hover:text-green-300">
                    Thuqba Registration
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    To communicate and support each other in times of need.
                  </p>
                  <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-medium rounded-full shadow-lg hover:from-green-600 hover:to-green-800 focus:outline-none transform transition duration-300 hover:scale-105">
                   Register
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-green-700 via-transparent to-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="relative group transform transition duration-300 hover:scale-105">
            <div className="service__card bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden">
              <div className="relative p-8">
                <div className="service__icon flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-green-400 rounded-full shadow-md">
                  <img
                    src="assets/images/icon/service2.png"
                    alt="Membership Icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="service__content mt-12 text-center">
                  <h3 className="text-2xl font-bold text-black mb-4 transition-all group-hover:text-green-300">
                    Thuqba Membership Status
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Ensure your dear ones in Riyadh have registered with KMCC.
                  </p>
                  
                  <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-medium rounded-full shadow-lg hover:from-green-600 hover:to-green-800 focus:outline-none transform transition duration-300 hover:scale-105">
                   Check
                  </button>
                 
                </div>
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-green-700 via-transparent to-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Add more services */}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
