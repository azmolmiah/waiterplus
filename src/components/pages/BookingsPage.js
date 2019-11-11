import React from 'react';

import TopNav from '../layouts/TopNav';
import BottomNav from '../layouts/BottomNav';
import Footer from '../layouts/Footer';
import DateTime from '../layouts/bookings/DateTime';

const BookingsPage = ({ isMobile }) => {
  return (
    <div>
      <h1>Bookings Page</h1>
      <DateTime />
      <Footer />
      {isMobile ? <BottomNav /> : <TopNav />}
    </div>
  );
};

export default BookingsPage;
