import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDetails } from "../../actions/detailsActions";

import Layout from "../layouts/Layout";
import LoginForm from "../layouts/account/LoginForm";

import CircularProgress from "@material-ui/core/CircularProgress";

const AccountPage = ({ detail: { details, loading }, getDetails }) => {
  useEffect(() => {
    getDetails();
    //eslint-disable-next-line
  }, []);

  if (loading || details === null) {
    return <CircularProgress />;
  } else {
    const {
      outlet: { alias, name, footer_description }
    } = details.value;

    return (
      <Layout footer_description={footer_description} name={name}>
        <LoginForm alias={alias} />
      </Layout>
    );
  }
};

AccountPage.propTypes = {
  detail: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  detail: state.details
});

export default connect(mapStateToProps, { getDetails })(AccountPage);
