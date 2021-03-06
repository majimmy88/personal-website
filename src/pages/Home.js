import React, { useEffect } from 'react';

import Header from './../components/Header';
import About from './../components/About';
import Technologies from './../components/Technologies';
import WorkCarousel from './../components/WorkCarousel';
import Footer from './../components/Footer';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-left bg-fixed bg-hero-pattern box-border p-0 m-0 flex flex-col sm:bg-left-bottom lg:flex-row lg:bg-left-top lg:bg-cover">
      <div className="bg-transparent w-full h-72 lg:w-1/3 lg:h-screen lg:sticky top-0">
        <Header />
      </div>
      <div className="bg-white w-full pt-10 px-5 lg:w-2/3 lg:px-16">
        <About />
        <hr className="my-8" />
        <Technologies />
        <hr className="my-8" />
        <WorkCarousel />
        <hr className="my-8" />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
