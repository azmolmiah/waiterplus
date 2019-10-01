import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#93278f'
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
        icon={<HomeIcon style={{ color: '#fff' }} />}
      />
      <BottomNavigationAction
        label='Bookings'
        value='bookings'
        icon={<EventIcon style={{ color: '#fff' }} />}
      />
      <BottomNavigationAction
        label='Menu'
        value='menu'
        icon={<MenuBookIcon style={{ color: '#fff' }} />}
      />
      <BottomNavigationAction
        label='Cart'
        value='cart'
        icon={<LocalMallIcon style={{ color: '#fff' }} />}
      />
      <BottomNavigationAction
        label='Account'
        value='account'
        icon={<AccountCircleIcon style={{ color: '#fff' }} />}
      />
    </BottomNavigation>
  );
}
