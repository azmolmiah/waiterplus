import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInfos } from '../../actions/infoActions';

const RestaurantInfos = ({ info: { infos, loading }, getInfos }) => {

  useEffect(() => {

    getInfos();

    //eslint-disable-next-line
  }, []);

  if (loading || infos === null) {
    return <h4>Loading...</h4>;
  } else {
    console.log(infos);
  }

  return <Fragment></Fragment>
};

RestaurantInfos.propTypes = {
  info: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  info: state.info
});

export default connect(
  mapStateToProps,
  { getInfos }
)(RestaurantInfos);
