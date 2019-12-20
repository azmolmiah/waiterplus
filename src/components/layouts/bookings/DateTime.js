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
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
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
  select: {
    width: "100%"
  },
  formControl: {
    paddingTop: "1rem"
  },
  active: {
    background: "#3f51b5",
    color: "#ffffff"
  }
}));

export default function MaterialUIPickers() {
  const classes = useStyles();
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    seats: 2
  });

  let quarterHours = ["00", "15", "30", "45"];
  let times = [];
  for (let i = 16; i < 24; i++) {
    for (let j = 0; j < 4; j++) {
      let time = i + ":" + quarterHours[j];
      times.push(time);
    }
  }

  selectedDate.setHours(Number(time.slice(0, 2)));
  selectedDate.setMinutes(Number(time.slice(3, 5)));
  selectedDate.setSeconds(0);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const onDateClick = e => {
    setTime(e.target.innerText);
    e.target.parentElement.classList.add(classes.active);
  };

  const onSubmit = e => {
    console.log(values);
    console.log(`Date and time selected: ${selectedDate}`);
    e.preventDefault();
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form>
        <Container className={classes.root} maxWidth="md">
          <h1 style={{ margin: 0 }}>Book a table</h1>
          <Grid container justify="space-between">
            <TextField
              id="Name"
              label="Name"
              name="name"
              className={classes.button}
              onChange={handleChange}
              required
            />
            <TextField
              id="Email"
              label="Email"
              name="email"
              className={classes.button}
              onChange={handleChange}
              required
            />
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

            <Grid item md={6} xs={2} className={classes.formControl}>
              <InputLabel>Seats</InputLabel>
              <Select
                name="seat"
                value={values.seats}
                onChange={handleChange}
                className={classes.select}
              >
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{ marginTop: "0.5rem" }}
            >
              {times.map((individualTime, index) => {
                return (
                  <Grid item lg={3} xs={3} key={index}>
                    <Button
                      variant="outlined"
                      color="default"
                      className={classes.button}
                      onClick={onDateClick}
                    >
                      {individualTime}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
              onClick={onSubmit}
              style={{ marginTop: "1rem" }}
            >
              Submit
            </Button>
          </Grid>
        </Container>
      </form>
    </MuiPickersUtilsProvider>
  );
}
