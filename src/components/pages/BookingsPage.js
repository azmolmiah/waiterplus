import React, { Fragment } from 'react';

import TopNav from '../layouts/TopNav';
import BottomNav from '../layouts/BottomNav';
import Footer from '../layouts/Footer';
import DateTime from '../layouts/bookings/DateTime';

const BookingsPage = ({ isMobile }) => {
  return (
    <Fragment>
      <DateTime />
      <Footer />
      {isMobile ? <BottomNav /> : <TopNav />}
    </Fragment>
  );
};

export default BookingsPage;
