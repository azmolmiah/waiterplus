import React, { Fragment, useState, useEffect } from "react";

import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import Footer from "./Footer";

const Layout = props => {
  const [nav, setNav] = useState(null);

  // When the component loads on each page
  useEffect(() => {
    if (window.innerWidth < 420) {
      setNav(<BottomNav />);
    } else {
      setNav(<TopNav name={props.name} />);
    }
    //eslint-disable-next-line
  }, []);

  // When the window is resize check if less than mobile size
  window.onresize = () => {
    if (window.innerWidth < 620) {
      setNav(<BottomNav />);
    } else {
      setNav(<TopNav name={props.name} />);
    }
  };

  return (
    <Fragment>
      {props.children}
      {nav}
      <Footer footer_description={props.footer_description} name={props.name} />
    </Fragment>
  );
};

export default Layout;
