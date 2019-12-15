import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getServices } from "../../actions/servicesActions";
import { getDetails } from "../../actions/detailsActions";

import Header from "../layouts/index/Header";
import About from "../layouts/index/About";
import Details from "../layouts/index/Details";
import GoogleMaps from "../layouts/index/GoogleMaps";

import Layout from "../layouts/Layout";

import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";

const HomePage = ({
  service: { services },
  detail: { details, loading },
  getDetails,
  getServices
}) => {
  useEffect(() => {
    getServices();
    getDetails();
    //eslint-disable-next-line
  }, []);

  console.log(services, details);

  if (loading || services === null || details === null) {
    return (
      <div style={{ position: "absolute", top: "50%", left: "50%" }}>
        <CircularProgress />
      </div>
    );
  } else {
    const { formated_opening_times, discount } = services[0];

    const {
      outlet: {
        name,
        alias,
        short_description,
        long_description,
        footer_description
      },
      meta_title,
      phone1,
      address1,
      address2,
      city,
      building_number,
      postcode,
      longitude,
      latitude
    } = details.value;

    return (
      <Layout footer_description={footer_description} name={name}>
        <Header alias={alias} title={meta_title} discount={discount} />
        <About
          header={name}
          sub={short_description}
          about={long_description}
          aboutAlias={alias}
        />
        <Container>
          <Details
            phone={phone1}
            address1={address1}
            address2={address2}
            city={city}
            building_number={building_number}
            postcode={postcode}
            formated_opening_times={formated_opening_times}
          />
        </Container>
        <GoogleMaps longitude={Number(longitude)} latitude={Number(latitude)} />
      </Layout>
    );
  }
};

HomePage.propTypes = {
  service: PropTypes.object.isRequired,
  detail: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  service: state.services,
  detail: state.details
});

export default connect(mapStateToProps, {
  getServices,
  getDetails
})(HomePage);
