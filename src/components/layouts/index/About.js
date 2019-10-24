import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const About = ({ header, sub, about }) => {
  return (
    <div>
      <Container maxWidth='md'>
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
    </div>
  );
};

export default About;
