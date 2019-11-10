import React from 'react';

import TopNav from '../layouts/TopNav';
import BottomNav from '../layouts/BottomNav';
import Footer from '../layouts/Footer';

const PrivacyPage = ({ isMobile }) => {
  return (
    <div>
      <h1>PrivacyPage</h1>
      <Footer />
      {isMobile ? <BottomNav /> : <TopNav />}
    </div>
  );
};

export default PrivacyPage;
