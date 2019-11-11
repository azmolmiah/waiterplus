import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  picker: {
    width: '100%',
    paddingInlineEnd: '1.5rem'
  }
});

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = date => {
    setSelectedDate(date);
    console.log(date);
  };

  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Container>
        <Grid container justify='center'>
          <Grid item md={6} sm={12}>
            <KeyboardDatePicker
              margin='normal'
              id='date-picker-dialog'
              label='Date (Click Icon)'
              format='MM/dd/yyyy'
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
              className={classes.picker}
            />
          </Grid>

          <Grid item md={6} sm={12}>
            <KeyboardTimePicker
              margin='normal'
              id='time-picker'
              label='Time (Click Icon)'
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time'
              }}
              className={classes.picker}
            />
          </Grid>
        </Grid>
      </Container>
    </MuiPickersUtilsProvider>
  );
}
