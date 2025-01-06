import React from 'react';
import UNav from '../components/UNav';
import HeadOne from '../components/Head/HeadOne';
import Footer from '../components/Footer';

const Himaya = () => {
  return (
    <div>
    <HeadOne/>
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
    <UNav/>
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        {/* Title Section */}
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 mb-12">
          KMCC Himaya Thuqba: Empowering Communities and Securing Lives
        </h1>

        {/* Introduction */}
        <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center">
          The Kerala Muslim Cultural Centre (KMCC) is a globally recognized organization known for its relentless efforts in social service, cultural preservation, and community empowerment. Among its wide array of initiatives, the KMCC Himaya Thuqba program holds a special place for its commitment to ensuring the well-being of expatriates, especially those residing in Riyadh, Saudi Arabia.
        </p>

        {/* Vision */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-green-400 mb-4">The Vision Behind Himaya Thuqba</h2>
          <p className="text-gray-300 leading-relaxed">
            The KMCC Himaya Thuqba initiative was established with a clear vision: to safeguard the rights, dignity, and welfare of expatriates. Living far from home can often be challenging, with individuals facing various social, legal, and economic hurdles. Recognizing these struggles, KMCC Himaya Thuqba strives to provide a safety net for its members and their families, ensuring they have access to support during critical times.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-green-400 mb-4">Key Features of KMCC Himaya Thuqba</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="text-xl font-semibold text-green-300">Membership Benefits</h3>
              <p className="text-gray-300 leading-relaxed">
                Himaya Thuqba offers an exclusive membership program aimed at bringing together individuals under a unified umbrella of protection and care. Members enjoy a range of benefits, including assistance during medical emergencies, financial aid, and support in repatriation during unfortunate circumstances like deaths or legal issues.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-green-300">Medical Assistance</h3>
              <p className="text-gray-300 leading-relaxed">
                Himaya Thuqba provides comprehensive medical support, ensuring members and their families can avail themselves of medical aid during emergencies. For those lacking health insurance, the program provides financial support to cover medical expenses, ensuring no one is left vulnerable.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-green-300">Legal Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Many expatriates in Saudi Arabia face legal challenges due to unfamiliarity with the local laws. Himaya Thuqba acts as a bridge, offering legal aid and representation to resolve issues such as employment disputes and visa complications, protecting the rights of members.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-green-300">Repatriation Services</h3>
              <p className="text-gray-300 leading-relaxed">
                In unfortunate circumstances like the demise of a member, Himaya Thuqba ensures dignified repatriation to Kerala and provides emotional and financial support to bereaved families.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-green-300">Educational Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Himaya Thuqba empowers the next generation through scholarships and financial aid for children of members, alongside workshops and programs to enhance career prospects for youth.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-green-300">Community Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Himaya Thuqba fosters community spirit among expatriates through regular events, cultural programs, and seminars that promote unity and cultural heritage.
              </p>
            </li>
          </ul>
        </div>

        {/* Importance */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-green-400 mb-4">Why Himaya Thuqba is Important for the Community</h2>
          <p className="text-gray-300 leading-relaxed">
            The expatriate community in Saudi Arabia, particularly those from Kerala, plays a crucial role in the state's economy. Himaya Thuqba serves as a beacon of hope by addressing challenges such as financial instability, lack of medical facilities, and social isolation, ensuring no one is left unsupported.
          </p>
        </div>

        {/* Impact */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-green-400 mb-4">The Impact of Himaya Thuqba</h2>
          <p className="text-gray-300 leading-relaxed">
            Over the years, Himaya Thuqba has touched countless lives by offering medical aid, resolving legal battles, reuniting families during crises, and empowering the next generation through education. These efforts have solidified its place as a lifeline for many expatriates.
          </p>
        </div>

        {/* Conclusion */}
        <div>
          <h2 className="text-3xl font-semibold text-green-400 mb-4">A Testament to KMCC’s Commitment</h2>
          <p className="text-gray-300 leading-relaxed">
            KMCC Himaya Thuqba is a shining example of how community-driven programs can transform lives. By addressing the holistic needs of expatriates, Himaya Thuqba fosters hope, resilience, and belonging, embodying the spirit of unity within the Kerala community in Saudi Arabia.
          </p>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Himaya;
