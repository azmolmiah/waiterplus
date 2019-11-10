import React from 'react';

import TopNav from '../layouts/TopNav';
import BottomNav from '../layouts/BottomNav';
import Footer from '../layouts/Footer';

const CookiePage = ({ isMobile }) => {
  return (
    <div>
      <h1>CookiePage</h1>
      <Footer />
      {isMobile ? <BottomNav /> : <TopNav />}
    </div>
  );
};

export default CookiePage;
