import "date-fns";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    width: "100%"
  },
  root: {
    padding: "10%"
  },
  picker: {
    width: "100%"
  },
  formControl: {
    width: "100%"
  },
  select: {
    padding: "0.5rem"
  }
}));

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [seat, setSeat] = useState(2);
  const [time, setTime] = useState("");

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleChange = e => {
    setSeat(e.target.value);
  };

  const onBtnClick = e => {
    setTime(e.target.innerText);
  };

  const classes = useStyles();

  let quarterHours = ["00", "15", "30", "45"];
  let times = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 4; j++) {
      let time = i + ":" + quarterHours[j];
      if (i < 10) {
        time = "0" + time;
      }
      times.push(time);
    }
  }

  console.log(time, selectedDate, seat);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Container className={classes.root} maxWidth="md">
        <h1>Find a table</h1>
        <Grid container justify="space-between">
          <Grid item md={6} xs={9}>
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

          <Grid item md={6} xs={2}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Seats</InputLabel>
              <Select
                labelid="demo-simple-select-label"
                id="demo-simple-select"
                value={seat}
                onChange={handleChange}
                className={classes.select}
              >
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={4}>5</MenuItem>
                <MenuItem value={4}>6</MenuItem>
                <MenuItem value={4}>7</MenuItem>
                <MenuItem value={4}>8</MenuItem>
                <MenuItem value={4}>9</MenuItem>
                <MenuItem value={4}>10</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Divider />
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            {times.map((individualTime, index) => {
              return (
                <Grid item lg={4} xs={4} key={index}>
                  <Button
                    variant="outlined"
                    color="default"
                    className={classes.button}
                    onClick={onBtnClick}
                  >
                    {individualTime}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </MuiPickersUtilsProvider>
  );
}
