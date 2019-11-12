import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDetails } from "../../actions/detailsActions";

import BottomNav from "../layouts/BottomNav";
import TopNav from "../layouts/TopNav";
import Footer from "../layouts/Footer";
import LoginForm from "../layouts/account/LoginForm";

import CircularProgress from "@material-ui/core/CircularProgress";

const AccountPage = ({
  detail: { details, loading },
  getDetails,
  isMobile
}) => {
  useEffect(() => {
    getDetails();
    //eslint-disable-next-line
  }, []);

  if (loading || details === null) {
    return <CircularProgress />;
  } else {
    const {
      outlet: { name, alias, footer_description }
    } = details.value;

    return (
      <Fragment>
        <LoginForm alias={alias} />
        <Footer name={name} footer_description={footer_description} />
        {isMobile ? <BottomNav /> : <TopNav name={name} />}
      </Fragment>
    );
  }
};

AccountPage.propTypes = {
  detail: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  detail: state.detail
});

export default connect(mapStateToProps, { getDetails })(AccountPage);
