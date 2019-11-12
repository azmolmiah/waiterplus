import "date-fns";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "10%"
  },
  picker: {
    width: "100%",
    paddingInlineEnd: "1.5rem"
  },
  formControl: {
    width: "100%"
  }
});

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [age, setAge] = useState("");

  const handleDateChange = date => {
    setSelectedDate(date);
    console.log(date);
  };

  const handleChange = e => {
    setAge(e.target.value);
  };

  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Container className={classes.root}>
        <h2>Book your table here</h2>
        <Grid container justify="center">
          <Grid item md={4} sm={12}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date (Click Icon)"
              format="dd/MM/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
              className={classes.picker}
            />
          </Grid>

          <Grid item md={4} sm={12}>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time (Click Icon)"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
              className={classes.picker}
            />
          </Grid>

          <Grid item md={4} sm={12}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Seats</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </MuiPickersUtilsProvider>
  );
}
