import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDetails } from "../../actions/detailsActions";
import Layout from "../layouts/Layout";

import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";

const CookiePage = ({ detail: { details, loading }, getDetails }) => {
  useEffect(() => {
    getDetails();
    //eslint-disable-next-line
  }, []);
  if (loading || details === null) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  } else {
    const {
      outlet: { name, footer_description }
    } = details.value;
    return (
      <Layout footer_description={footer_description} name={name}>
        <h1>CookiePage</h1>
      </Layout>
    );
  }
};

CookiePage.propTypes = {
  detail: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  detail: state.details
});

export default connect(mapStateToProps, {
  getDetails
})(CookiePage);
