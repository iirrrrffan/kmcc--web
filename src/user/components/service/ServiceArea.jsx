import React from "react";

const ServiceArea = () => {
  return (
    <section className="service-area py-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-500">
          Our Premium Service
        </h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          {/* Service 1 - Membership Status */}
          <div className="group transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              <div className="text-center mt-12">
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  Thuqba Membership Status
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Ensure your dear ones in Riyadh have registered with KMCC.
                </p>
                <button className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-medium rounded-full shadow-lg hover:bg-green-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  <i className="fas fa-check-circle text-xl"></i>
                  Check Membership Status
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
