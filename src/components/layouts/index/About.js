import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const About = ({ header, sub, about, aboutAlias }) => {
  const useStyles = makeStyles(() => ({
    root: {
      padding: "5% 0"
    },
    bg: {
      background: `url('https://${aboutAlias}.com/webapp-php-live/assets/img/home_bg-2.jpg') no-repeat center center fixed`,
      backgroundSize: "cover",
      Height: "20vh",
      color: "white",
      padding: "5%"
    }
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container justify="center">
          <h1>{header}</h1>
          <Box width="100%" textAlign="center">
            <h4>{sub}</h4>
          </Box>
          <Box width="100%" textAlign="center">
            <p>{about}</p>
          </Box>
        </Grid>
      </Container>
      <div className={classes.bg}>
        <Box textAlign="center">
          <h1>Welcome</h1>
          <h4>To Our New App</h4>
        </Box>
      </div>
    </div>
  );
};

export default About;
