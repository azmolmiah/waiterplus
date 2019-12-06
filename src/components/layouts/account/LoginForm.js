import React from "react";

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const LoginForm = ({ alias }) => {
  const useStyles = makeStyles(() => ({
    root: {
      background: `url('https://${alias}.com/webapp-php-live/assets/img/login_bg-1.jpg')
      `,
      backgroundSize: "cover",
      padding: "10%"
    },
    textField: {
      width: "100%"
    },
    button: {
      display: "block",
      width: "100%"
    }
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item lg={6}>
            <Card>
              <CardContent>
                <Box mb={5}>
                  <h2>Login / Register</h2>
                  <p>To begin please enter your email</p>
                </Box>
                <Box mb={2}>
                  <TextField
                    id="standard-basic"
                    className={classes.textField}
                    label="Email"
                    margin="normal"
                    name="email"
                    autoComplete="email"
                  />
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Continue
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LoginForm;
