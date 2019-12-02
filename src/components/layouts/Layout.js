import React, { Fragment, useState, useEffect } from "react";

import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const Layout = props => {
  const [nav, setNav] = useState(null);

  // When the component loads on each page
  useEffect(() => {
    if (window.innerWidth < 420) {
      setNav(<BottomNav />);
    } else {
      setNav(<TopNav />);
    }
  }, []);

  // When the window is resize check if less than mobile size
  window.onresize = () => {
    if (window.innerWidth < 420) {
      setNav(<BottomNav />);
    } else {
      setNav(<TopNav />);
    }
  };
  return (
    <Fragment>
      {props.children}
      {nav}
    </Fragment>
  );
};

export default Layout;
