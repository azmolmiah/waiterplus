import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInfos } from '../../actions/infoActions';

import Header from '../layouts/index/Header';
import About from '../layouts/index/About';
import OpeningTimes from '../layouts/index/OpeningTimes';
import Details from '../layouts/index/Details';

import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';

const HomePage = ({ info: { infos, loading }, getInfos }) => {
  useEffect(() => {
    getInfos();
    //eslint-disable-next-line
  }, []);

  if (loading || infos === null) {
    return <CircularProgress />;
  } else {
    console.log(infos);
    const {
      outlet: { name, alias, short_description, long_description }
    } = infos.value;
    return (
      <Fragment>
        <CssBaseline />
        <Header alias={alias} />
        <About header={name} sub={short_description} about={long_description} />
        <OpeningTimes />
        <Details />
      </Fragment>
    );
  }
};

HomePage.propTypes = {
  info: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  info: state.info
});

export default connect(
  mapStateToProps,
  { getInfos }
)(HomePage);
