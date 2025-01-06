import React from "react";

const KmccScheme = () => {
  return (
    <div className="min-h-[40vh] bg-gradient-to-b from-black to-gray-900 flex items-center justify-center p-6">
      {/* Container: Schemes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Card: 1 */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-[0px_4px_15px_rgba(72,255,72,0.5)]">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 opacity-10 rounded-lg"></div>
          <div className="relative z-10">
            <h3 className="text-base font-medium text-green-400 text-center uppercase tracking-wider">
              KMCC
            </h3>
            <h2 className="text-2xl font-semibold text-white text-center">
              Check Your Scheme Status
            </h2>
            <p className="text-gray-300 text-center mt-3 text-sm">
              Verify your KMCC membership status instantly with just a click.
            </p>
          </div>
          <a
            href="https://www.mykmcc.org/security-scheme-status"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4"
          >
            <button className="w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-[0px_4px_10px_rgba(72,255,72,0.7)] transition-transform duration-300 transform hover:scale-105">
              Check
            </button>
          </a>
        </div>

        {/* Card: 2 */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-[0px_4px_15px_rgba(72,255,72,0.5)]">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 opacity-10 rounded-lg"></div>
          <div className="relative z-10">
            <h3 className="text-base font-medium text-green-400 text-center uppercase tracking-wider">
              KMCC
            </h3>
            <h2 className="text-2xl font-semibold text-white text-center">
              Membership Status
            </h2>
            <p className="text-gray-300 text-center mt-3 text-sm">
              Check the current status of your application.
            </p>
          </div>
          <a
            href="https://www.mykmcc.in/search"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4"
          >
            <button className="w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-[0px_4px_10px_rgba(72,255,72,0.7)] transition-transform duration-300 transform hover:scale-105">
              Check
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default KmccScheme;
