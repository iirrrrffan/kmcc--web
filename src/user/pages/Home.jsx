import React from 'react';
import UNav from '../components/UNav';
import Footer from '../components/Footer';
import KmccScheme from '../components/KmccScheme';
import BannerTwoArea from '../components/banner/BannerTwoArea';
import ServiceArea from '../components/service/ServiceArea';

const Home = () => {
  return (
    <div className="relative">
      {/* Navigation */}
      <div className="fixed top-0 w-full z-50">
        <UNav />
      </div>

      {/* Add padding to ensure banner is fully visible */}
      <div className="pt-[80px]"> {/* Adjust this value to match the height of the navbar */}
        <BannerTwoArea />
      </div>

      <div>
        <ServiceArea />
      </div>

      <div>
        <KmccScheme />
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
