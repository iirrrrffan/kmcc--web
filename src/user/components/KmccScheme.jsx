import React from 'react';

const KmccScheme = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-gray-500 to-indigo-600 p-8 flex flex-col items-center justify-center space-y-10">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-white text-center animate-fade-in-down">
        KMCC Scheme
      </h1>

      {/* First Layer: Saudi KMCC Membership Status Check */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 space-y-6 transform transition-transform duration-500 hover:translate-y-[-10px] animate-slide-in-left">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Saudi KMCC Membership Status</h2>
        <p className="text-gray-600 text-center">
          Verify your Saudi KMCC membership status instantly with just a click.
        </p>
        <button
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Check Membership Status
        </button>
      </div>

      {/* Second Layer: Saudi Security Scheme Status Check */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 space-y-6 transform transition-transform duration-500 hover:translate-y-[-10px] animate-slide-in-right">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Saudi Security Scheme Status</h2>
        <p className="text-gray-600 text-center">
          Check the current status of your Saudi Security Scheme application.
        </p>
        <button
          className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-3 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Check Security Scheme Status
        </button>
      </div>
    </div>
  );
};

export default KmccScheme;
