import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInfos } from '../../actions/infoActions';

import BottomNav from '../layouts/BottomNav';
import TopNav from '../layouts/TopNav';
import Footer from '../layouts/Footer';
import LoginForm from '../layouts/account/LoginForm';

import CircularProgress from '@material-ui/core/CircularProgress';

const AccountPage = ({ info: { infos, loading }, getInfos, isMobile }) => {
  useEffect(() => {
    getInfos();
    //eslint-disable-next-line
  }, []);

  if (loading || infos === null) {
    return <CircularProgress />;
  } else {
    const {
      outlet: { name, alias, footer_description }
    } = infos.value;
    return (
      <Fragment>
        <LoginForm alias={alias} />
        <Footer name={name} footer_description={footer_description} />
        {isMobile ? <BottomNav /> : <TopNav name={name} />}
      </Fragment>
    );
  }
};

AccountPage.propTypes = {
  info: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  info: state.info
});

export default connect(
  mapStateToProps,
  { getInfos }
)(AccountPage);
