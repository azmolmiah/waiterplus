import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const About = ({ header, sub, about, aboutAlias }) => {
  return (
    <Fragment>
      <Container maxWidth='md' style={{ padding: '5%' }}>
        <Grid container justify='center'>
          <h1>{header}</h1>
        </Grid>
        <Grid container justify='center'>
          <Box textAlign='center'>
            <h4>{sub}</h4>
          </Box>
        </Grid>
        <Grid container justify='center'>
          <Box textAlign='center'>
            <p>{about}</p>
          </Box>
        </Grid>
      </Container>
      <div
        style={{
          background: `url('https://${aboutAlias}.com/webapp-php-live/assets/img/home_bg-2.jpg') no-repeat center center fixed`,
          backgroundSize: 'cover',
          Height: '20vh'
        }}
      >
        <Box textAlign='center' style={{ padding: '5%', color: 'white' }}>
          <h1>Welcome</h1>
          <h4>To Our New App</h4>
        </Box>
      </div>
    </Fragment>
  );
};

export default About;
