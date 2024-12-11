import React from 'react';

const AboutHimaya = () => {
  return (
    <div className="bg-gradient-to-b from-blue-300 via-white to-blue-50 py-16 px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden">
        <h1 className="text-5xl font-extrabold text-blue-700 text-center mb-8">
          About Himaya
        </h1>
        
        <p className="text-xl text-gray-700 font-medium mb-6 text-center">
          <span className="font-semibold text-blue-600">"Standing by families, always."</span>
        </p>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          <strong>Himaya @ Thuqbah</strong> is a humanitarian initiative undertaken by Thuqbah KMCC. 
          The program aims to provide member chikhilsa sahayam (assistance). 
          Many expatriate families face immense hardship after the sudden demise of a family member, 
          struggling to meet basic needs such as food, children's education, and medical expenses. 
        </p>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          <strong>"Himaya @ Thuqbah"</strong> seeks to alleviate the suffering of these families by providing them 
          with necessary assistance to help them navigate through these difficult times.
        </p>
      </div>
    </div>
  );
}

export default AboutHimaya;
