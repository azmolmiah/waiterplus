import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDetails } from "../../actions/detailsActions";
import Layout from "../layouts/Layout";
import DateTime from "../layouts/bookings/DateTime";

import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";

const BookingsPage = ({ detail: { details, loading }, getDetails }) => {
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
        <DateTime />
      </Layout>
    );
  }
};

BookingsPage.propTypes = {
  detail: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  detail: state.details
});

export default connect(mapStateToProps, { getDetails })(BookingsPage);
