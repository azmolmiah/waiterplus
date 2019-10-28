import React from 'react';
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import ScheduleIcon from '@material-ui/icons/Schedule';

const OpeningTimes = () => {
  const state = [
    { day: 'Sun', time: 'Closed' },
    { day: 'Mon', time: '05:00pm - 11:00pm' },
    { day: 'Tue', time: '05:00pm - 11:00pm' },
    { day: 'Wed', time: '05:00pm - 11:00pm' },
    { day: 'Thu', time: '10:00am - 10:00pm' },
    { day: 'Fri', time: '01:00pm - 04:00am' },
    { day: 'Sat', time: '05:00pm - 11:00pm' }
  ];

  return (
    <div>
      <Grid container>
        <Grid item xs={2} style={{ paddingTop: '5%' }}>
          <ScheduleIcon style={{ fontSize: 40, color: 'red' }} />
        </Grid>

        <Grid item xs={10}>
          <h1>Opening Times</h1>
          Times may change on public holidays
          <Table>
            <TableBody>
              {state.map(row => {
                return (
                  <TableRow key={row.day}>
                    <TableCell>{row.day}</TableCell>
                    <TableCell>{row.time}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </div>
  );
};

export default OpeningTimes;
