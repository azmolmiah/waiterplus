import React from 'react';
import Header from './Header';
import About from './About';
import OpeningTimes from './OpeningTimes';
import Details from './Details';

const HomePage = () => {
  return (
    <div>
      <Header />
      <About />
      <OpeningTimes />
      <Details />
    </div>
  );
};

export default HomePage;
