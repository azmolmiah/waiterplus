import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInfos } from '../../actions/infoActions';

import Header from '../layouts/index/Header';
import About from '../layouts/index/About';
import Details from '../layouts/index/Details';

import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

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
      outlet: { name, alias, short_description, long_description },
      meta_title,
      phone1,
      address1,
      address2,
      address3,
      building_number
    } = infos.value;
    return (
      <Fragment>
        <CssBaseline />
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
            address3={address3}
            building_number={building_number}
          />
        </Container>
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
