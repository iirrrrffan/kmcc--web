import React, { useEffect, useState } from 'react';
import UNav from '../components/UNav';
import Footer from '../components/Footer';
import KmccScheme from '../components/KmccScheme';
import BannerTwoArea from '../components/banner/BannerTwoArea';
import ServiceArea from '../components/service/ServiceArea';
import HeadOne from '../components/Head/HeadOne';
import AboutKmcc from '../components/AboutKmcc';
import AboutHimaya from '../components/AboutHimaya';
import Content1 from '../contents/Content1';
import Content2 from '../contents/Content2';
import Content3 from '../contents/Content3';

const Home = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      // Determine scroll direction
      if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
        setIsScrollingUp(false); // Scrolling down
      } else {
        setIsScrollingUp(true); // Scrolling up
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <div className="relative">
      {/* Top Bar and Navbar */}
      <HeadOne />
      <div
        className={`top-0 w-full z-50 fixed transition-transform duration-300 pt-[54px] ${
          isScrollingUp ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        
        <UNav />
        
      </div>

      {/* Content */}
      <div >
        <BannerTwoArea />
      </div>

      <div>
        <AboutKmcc/>
      </div>
      <div>
        <Content1/>
      </div>
   <div>
        <AboutHimaya/>
      </div>
      <div>
        <ServiceArea />
      </div>
      <div>
        <KmccScheme />
      </div>
      <div>
        <Content2/>
      </div>
      <div>
        <Content3/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
