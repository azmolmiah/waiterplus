import React from 'react';
import OpeningTimes from './details/OpeningTimes';
import Grid from '@material-ui/core/Grid';

const Details = () => {
  return (
    <div>
      <Grid item xs={12} md={3}>
        <OpeningTimes />
      </Grid>
    </div>
  );
};

export default Details;
