import React from 'react';
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import TimelapseIcon from '@material-ui/icons/Timelapse';

const DeliveryInfo = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={2} style={{ paddingTop: '5%' }}>
          <TimelapseIcon style={{ fontSize: 40, color: 'red' }} />
        </Grid>
        <Grid item xs={10}>
          <h1>Delivery Info</h1>
          Delivery can incur charges based on order value or distance.
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Order value from £8.00 (No fee)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Order value from £10.00 (No fee)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Distance from 0 to 3 mile (£0.60 fee)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryInfo;
