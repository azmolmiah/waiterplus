import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: 'white',
    textDecoration: 'none'
  },
  bg: {
    backgroundColor: '#93278f'
  }
}));

const TopNav = ({ name }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.bg}>
        <Container>
          <Toolbar className={classes.link}>
            <Typography edge='start' variant='h6' className={classes.title}>
              <Link to='/'>{name}</Link>
            </Typography>
            <Button>
              <Link to='/'>Home</Link>
            </Button>
            <Button>
              <Link to='menu'>Menu</Link>
            </Button>
            <Button>
              <Link to='checkout'>Checkout</Link>
            </Button>
            <Button>
              <Link to='account'>Account</Link>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default TopNav;
