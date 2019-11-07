import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background:
      'url("https://${alias}.com/webapp-php-live/assets/img/login_bg-1.jpg") no-repeat center center',
    backgroundSize: 'cover',
    padding: '10%'
  }
}));

const AccountPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Account Page</h1>
    </div>
  );
};

export default AccountPage;
