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
// import HomeIcon from '@material-ui/icons/Home';
// import MenuBookIcon from '@material-ui/icons/MenuBook';
// import LocalMallIcon from '@material-ui/icons/LocalMall';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import EventIcon from '@material-ui/icons/Event';

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
        icon={<Home style={{ color: '#fff' }} />}
      />
      <BottomNavigationAction
        label='Bookings'
        value='bookings'
        icon={<Event style={{ color: '#fff' }} />}
      />
      <BottomNavigationAction
        label='Menu'
        value='menu'
        icon={<MenuBook style={{ color: '#fff' }} />}
      />
      <BottomNavigationAction
        label='Cart'
        value='cart'
        icon={<LocalMall style={{ color: '#fff' }} />}
      />
      <BottomNavigationAction
        label='Account'
        value='account'
        icon={<AccountCircle style={{ color: '#fff' }} />}
      />
    </BottomNavigation>
  );
}
