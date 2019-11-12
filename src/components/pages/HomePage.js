import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDetails } from "../../actions/detailsActions";
import { getServices } from "../../actions/servicesActions";

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
  detail: { details, loading },
  service: { services },
  getDetails,
  getServices,
  isMobile
}) => {
  useEffect(() => {
    getDetails();
    getServices();
    //eslint-disable-next-line
  }, []);

  if (loading || details === null) {
    return <CircularProgress />;
  } else {
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
    console.log(details, services);
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
  detail: PropTypes.object.isRequired,
  service: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  detail: state.details,
  service: state.services
});

export default connect(mapStateToProps, { getDetails, getServices })(HomePage);
