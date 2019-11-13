import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getServices } from "../../actions/servicesActions";
import { getDetails } from "../../actions/detailsActions";

import Header from "../layouts/index/Header";
import About from "../layouts/index/About";
import Details from "../layouts/index/Details";
import GoogleMaps from "../layouts/index/GoogleMaps";
import TopNav from "../layouts/TopNav";
import BottomNav from "../layouts/BottomNav";
import Footer from "../layouts/Footer";

import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";

const HomePage = ({
  service: { services },
  detail: { details, loading },
  getDetails,
  getServices,
  isMobile
}) => {
  useEffect(() => {
    getServices();
    getDetails();
    //eslint-disable-next-line
  }, []);

  if (loading || services === null || details === null) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  } else {
    const { formated_opening_times } = services[0];

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
      <Fragment>
        <Header alias={alias} title={meta_title} />
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
        <Footer name={name} footer_description={footer_description} />
        {isMobile ? <BottomNav /> : <TopNav name={name} />}
      </Fragment>
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

export default connect(mapStateToProps, { getServices, getDetails })(HomePage);
