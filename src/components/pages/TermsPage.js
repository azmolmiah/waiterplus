import React from 'react';

import TopNav from '../layouts/TopNav';
import BottomNav from '../layouts/BottomNav';
import Footer from '../layouts/Footer';

const TermsPage = ({ isMobile }) => {
  return (
    <div>
      <h1>TermsPage</h1>
      <Footer />
      {isMobile ? <BottomNav /> : <TopNav />}
    </div>
  );
};

export default TermsPage;
