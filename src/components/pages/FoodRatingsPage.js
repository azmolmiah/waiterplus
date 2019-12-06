import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFoodRatings } from "../../actions/foodRatingsActions";
import { getDetails } from "../../actions/detailsActions";

import Layout from "../layouts/Layout";

import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";

const FoodRatingsPage = ({
  foodRating: { foodRatings },
  detail: { details, loading },
  getDetails,
  getFoodRatings
}) => {
  useEffect(() => {
    getFoodRatings();
    getDetails();
    //eslint-disable-next-line
  }, []);
  if (loading || foodRatings === null || details === null) {
    return (
      <div style={{ position: "absolute", top: "50%", left: "50%" }}>
        <CircularProgress />
      </div>
    );
  } else {
    const { RatingKey } = foodRatings.establishments[0];
    const {
      outlet: { name, footer_description }
    } = details.value;
    return (
      <Layout footer_description={footer_description} name={name}>
        <Container maxWidth="md" style={{ padding: "5% 0" }}>
          <img src={`./fsa/${RatingKey}.jpg`} alt={RatingKey} />
        </Container>
      </Layout>
    );
  }
};

FoodRatingsPage.propTypes = {
  detail: PropTypes.object.isRequired,
  foodRating: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  detail: state.details,
  foodRating: state.foodRatings
});

export default connect(mapStateToProps, {
  getDetails,
  getFoodRatings
})(FoodRatingsPage);
