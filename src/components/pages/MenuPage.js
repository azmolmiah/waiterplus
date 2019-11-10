import React from 'react';

import TopNav from '../layouts/TopNav';
import BottomNav from '../layouts/BottomNav';
import Footer from '../layouts/Footer';

const MenuPage = ({ isMobile }) => {
  return (
    <div>
      <h1>Menu Page</h1>
      <Footer />
      {isMobile ? <BottomNav /> : <TopNav />}
    </div>
  );
};

export default MenuPage;
