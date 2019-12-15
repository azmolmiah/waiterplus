import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const Header = ({ alias, title, discount }) => {
  const useStyles = makeStyles(() => ({
    root: {
      background: `url('https://${alias}.com/webapp-php-live/assets/img/home_bg-1.jpg') no-repeat center center fixed`,
      backgroundSize: "cover",
      maxHeight: "65vh",
      padding: "5% 0"
    },
    card: { margin: "1rem 1rem 0 1rem" },
    cardContent: { maxWidth: "242.5px" },
    cardTitle: {
      fontSize: "1.25rem",
      letterSpacing: "2px",
      fontWeight: "lighter",
      margin: 0.5
    },
    cardText: {
      margin: 0.5
    }
  }));
  const classes = useStyles();
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={classes.root}>
        <Grid container justify="center">
          <img
            src={`https://${alias}.com/webapp-php-live/assets/img/full_logo.png`}
            alt="Restaurant Logo"
          />
        </Grid>

        <Grid container justify="center">
          {discount.map((disc, index) => (
            <Card key={index} className={classes.card}>
              <CardContent className={classes.cardContent}>
                <h5 className={classes.cardTitle}>{disc.label}</h5>
                <p className={classes.cardText}>{disc.description}</p>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </div>
    </Fragment>
  );
};

export default Header;
