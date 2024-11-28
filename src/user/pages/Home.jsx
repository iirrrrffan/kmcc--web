import React from 'react';
import UNav from '../components/UNav';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import ThuqbaScheme from '../components/ThuqbaScheme';
import KmccScheme from '../components/KmccScheme';

const Home = () => {
  return (
    <div className="relative">
      {/* Navigation */}
      <div className="absolute top-0 w-full z-50">
        <UNav />
      </div>
      
      {/* Banner */}
      <div>
        <Banner />
      </div>

      <div>
        <ThuqbaScheme/>
      </div>

      <div>
        <KmccScheme/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
