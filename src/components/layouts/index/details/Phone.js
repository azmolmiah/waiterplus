import React from 'react';

import PhoneIcon from '@material-ui/icons/Phone';
import Grid from '@material-ui/core/Grid';

const Phone = ({ phone }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={2} style={{ paddingTop: '5%' }}>
          <PhoneIcon style={{ fontSize: 40, color: 'red' }} />
        </Grid>
        <Grid item xs={10}>
          <h1>Call Us</h1>
          {phone}
        </Grid>
      </Grid>
    </div>
  );
};

export default Phone;
