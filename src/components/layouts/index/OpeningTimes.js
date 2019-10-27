import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

// Make table day and times into objects then map through them in the table boy

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
    </div>
  );
};

export default OpeningTimes;
