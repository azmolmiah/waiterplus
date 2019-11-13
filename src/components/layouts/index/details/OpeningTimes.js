import React from "react";

import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import ScheduleIcon from "@material-ui/icons/Schedule";

const OpeningTimes = ({ formated_opening_times }) => {
  console.log(formated_opening_times);
  return (
    <div>
      <Grid container>
        <Grid item xs={2} style={{ paddingTop: "5%" }}>
          <ScheduleIcon style={{ fontSize: 40, color: "red" }} />
        </Grid>

        <Grid item xs={10}>
          <h1>Opening Times</h1>
          Times may change on public holidays
          <Table>
            <TableBody>
              {formated_opening_times.map(row => {
                return (
                  <TableRow key={row.day}>
                    <TableCell style={{ paddingLeft: "0" }}>
                      {row.day}
                    </TableCell>
                    <TableCell>
                      {row.data[0].open_time} - {row.data[0].close_time}
                    </TableCell>
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
