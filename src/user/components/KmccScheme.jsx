import React from "react";

const KmccScheme = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      {/* Container: Schemes Section */}
      <div className="flex w-full max-w-6xl space-x-10">
        {/* Left Side: Schemes */}
        <div className="flex w-full space-x-10">
          {/* Card: 1*/}
          <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 space-y-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-lg font-medium text-gray-200 text-center tracking-wide">
                KMCC
              </h3>
              <h2 className="text-3xl font-semibold text-white text-center">
                Check Your Scheme Status
              </h2>
              <p className="text-gray-300 text-center">
                Verify your KMCC membership status instantly with just a click.
              </p>
            </div>
            <a
              href="https://www.mykmcc.org/security-scheme-status"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-3 px-5 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
                Check
              </button>
            </a>
          </div>

          {/* Card: 2*/}
          <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 space-y-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-lg font-medium text-gray-200 text-center tracking-wide">
                KMCC
              </h3>
              <h2 className="text-3xl font-semibold text-white text-center">
                Membership Status
              </h2>
              <p className="text-gray-300 text-center">
                Check the current status of your application.
              </p>
            </div>
            <a
              href="https://www.mykmcc.in/search"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-3 px-5 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
                Check
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KmccScheme;
