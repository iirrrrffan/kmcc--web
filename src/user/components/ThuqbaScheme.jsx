import React from 'react';
import { Link } from 'react-router-dom';

const ThuqbaScheme = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 via-indigo-700 to-purple-800 p-8 flex flex-col items-center justify-center space-y-10">
      {/* Header */}
      <h1 
        className="text-5xl font-extrabold text-white text-center drop-shadow-xl animate-bounce"
      >
        Thuqba Scheme
      </h1>

      {/* First Layer: Registration Section */}
      <div 
        className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 space-y-6 transform transition-transform duration-500 hover:scale-105 hover:rotate-1"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">Thuqba Registration</h2>
        <p className="text-gray-600 text-center leading-relaxed">
          Register now to join the Thuqba Scheme and unlock amazing benefits tailored just for you.
        </p>
        <button
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transform transition duration-300 hover:translate-y-1 hover:shadow-lg"
        >
          Go to Registration Page
        </button>
      </div>

      {/* Second Layer: Membership Status Section */}
      <div 
        className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 space-y-6 transform transition-transform duration-500 hover:scale-105 hover:-rotate-1"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">Check Membership Status</h2>
        <p className="text-gray-600 text-center leading-relaxed">
          Already a member? Verify your membership status and stay connected with Thuqba.
        </p>
        <Link to={"/log"}>
        <button
          className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transform transition duration-300 hover:translate-y-1 hover:shadow-lg"
        >
          Check Membership Status
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ThuqbaScheme;
