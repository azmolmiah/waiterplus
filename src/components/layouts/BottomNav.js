import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {
  Home,
  MenuBook,
  LocalMall,
  AccountCircle,
  Event
} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#93278f'
  },
  icon: {
    color: 'white'
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const homeLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to='/' {...props} />
  ));

  const bookingsLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to='/bookings' {...props} />
  ));

  const menuLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to='/menu' {...props} />
  ));

  const checkoutLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to='/checkout' {...props} />
  ));

  const loginLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to='/login' {...props} />
  ));

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label='Home'
        value='home'
        icon={<Home className={classes.icon} />}
        component={homeLink}
      />

      <BottomNavigationAction
        label='Bookings'
        value='bookings'
        icon={<Event className={classes.icon} />}
        component={bookingsLink}
      />

      <BottomNavigationAction
        label='Menu'
        value='menu'
        icon={<MenuBook className={classes.icon} />}
        component={menuLink}
      />

      <BottomNavigationAction
        label='Checkout'
        value='checkout'
        icon={<LocalMall className={classes.icon} />}
        component={checkoutLink}
      />

      <BottomNavigationAction
        label='Login'
        value='login'
        icon={<AccountCircle className={classes.icon} />}
        component={loginLink}
      />
    </BottomNavigation>
  );
}
