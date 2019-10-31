import React from 'react';

import Grid from '@material-ui/core/Grid';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Box from '@material-ui/core/Box/Box';

const Address = ({ address1, address2, city, building_number, postcode }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={2} style={{ paddingTop: '5%' }}>
          <LocationOnIcon style={{ fontSize: 40, color: 'red' }} />
        </Grid>
        <Grid item xs={10}>
          <h1>Address</h1>
          <Box>{building_number}</Box>
          <Box>{address1}</Box>
          <Box>{address2}</Box>
          <Box>{city}</Box>
          <Box>{postcode}</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Address;
