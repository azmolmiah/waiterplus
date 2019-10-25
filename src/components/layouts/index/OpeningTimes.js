import React from 'react';
import Container from '@material-ui/core/Container';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const OpeningTimes = () => {
  return (
    <div>
      <h1>Opening Times</h1>
      Times may change on public holidays
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Sun</TableCell>
            <TableCell>Closed</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Mon</TableCell>
            <TableCell>05:00pm - 11:00pm</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tue</TableCell>
            <TableCell>05:00pm - 11:00pm</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wed</TableCell>
            <TableCell>05:00pm - 11:00pm</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Thu</TableCell>
            <TableCell>10:00am - 10:00pm</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Fri</TableCell>
            <TableCell>01:00pm - 04:00am</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sat</TableCell>
            <TableCell>05:00pm - 11:00pm</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default OpeningTimes;
