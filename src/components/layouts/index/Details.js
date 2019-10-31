import React from 'react';

import Grid from '@material-ui/core/Grid';
import OpeningTimes from './details/OpeningTimes';
import Phone from './details/Phone';
import Address from './details/Address';
import DeliveryInfo from './details/DeliveryInfo';

const Details = ({
  phone,
  address1,
  address2,
  city,
  building_number,
  postcode
}) => {
  return (
    <div style={{ padding: '4% 0' }}>
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
