import React, { useState } from 'react';
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
      />
      <BottomNavigationAction
        label='Bookings'
        value='bookings'
        icon={<Event className={classes.icon} />}
      />
      <BottomNavigationAction
        label='Menu'
        value='menu'
        icon={<MenuBook className={classes.icon} />}
      />
      <BottomNavigationAction
        label='Cart'
        value='cart'
        icon={<LocalMall className={classes.icon} />}
      />
      <BottomNavigationAction
        label='Account'
        value='account'
        icon={<AccountCircle className={classes.icon} />}
      />
    </BottomNavigation>
  );
}
