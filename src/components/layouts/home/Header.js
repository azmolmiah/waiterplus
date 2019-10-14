import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const Header = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <h1>Modhubon</h1>
      </Container>
    </Fragment>
  );
};

export default Header;
