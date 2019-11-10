import React from 'react';

import TopNav from '../layouts/TopNav';
import BottomNav from '../layouts/BottomNav';
import Footer from '../layouts/Footer';

const CheckoutPage = ({ isMobile }) => {
  return (
    <div>
      <h1>Checkout Page</h1>
      <Footer />
      {isMobile ? <BottomNav /> : <TopNav />}
    </div>
  );
};

export default CheckoutPage;
