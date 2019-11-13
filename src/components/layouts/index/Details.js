import React from "react";

import Grid from "@material-ui/core/Grid";
import OpeningTimes from "./details/OpeningTimes";
import Phone from "./details/Phone";
import Address from "./details/Address";
import DeliveryInfo from "./details/DeliveryInfo";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    padding: "4% 0"
  }
}));

const Details = ({
  phone,
  address1,
  address2,
  city,
  building_number,
  postcode,
  formated_opening_times
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <OpeningTimes formated_opening_times={formated_opening_times} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Phone phone={phone} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Address
            address1={address1}
            address2={address2}
            city={city}
            building_number={building_number}
            postcode={postcode}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DeliveryInfo />
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
