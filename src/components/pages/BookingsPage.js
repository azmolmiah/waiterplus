import React from "react";

import Footer from "../layouts/Footer";
import Layout from "../layouts/Layout";
import DateTime from "../layouts/bookings/DateTime";

const BookingsPage = () => {
  return (
    <Layout>
      <DateTime />
      <Footer />
    </Layout>
  );
};

export default BookingsPage;
