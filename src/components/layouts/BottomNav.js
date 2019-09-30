import React from 'react';
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
    maxWidth: '100%'
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
      style={{
        backgroundColor: 'coral'
      }}
    >
      <BottomNavigationAction label='Home' value='home' icon={<HomeIcon />} />
      <BottomNavigationAction
        label='Bookings'
        value='bookings'
        icon={<EventIcon />}
      />
      <BottomNavigationAction
        label='Menu'
        value='menu'
        icon={<MenuBookIcon />}
      />
      <BottomNavigationAction
        label='Cart'
        value='cart'
        icon={<LocalMallIcon />}
      />
      <BottomNavigationAction
        label='Account'
        value='account'
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
}
