import React from 'react';
import Grid from '@material-ui/core/Grid';

import OpeningTimes from './details/OpeningTimes';
import Phone from './details/Phone';
import Address from './details/Address';
import DeliveryInfo from './details/DeliveryInfo';

const Details = ({ phone, address1, address2, address3, building_number }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={4}>
          <OpeningTimes />
        </Grid>
        <Grid item xs={12} md={4}>
          <Phone phone={phone} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Address
            address1={address1}
            address2={address2}
            address3={address3}
            building_number={building_number}
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
