import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import RefreshIcon from '@material-ui/icons/Refresh';

const Footer = ({ name, footer_description }) => {
  const styles = {
    paddingTop: '4%',
    backgroundColor: '#4a1448',
    color: 'white'
  };

  return (
    <div style={styles}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Box pr={2}>
              <h2>{name}</h2>
              <p>{footer_description}</p>
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <h2>Customer Service</h2>
            <List>
              <li>
                <Link to='/account'>Login</Link>
              </li>
              <li>
                <Link to='/account'>Sign Up</Link>
              </li>
              <li>
                <a href='https://tawk.to/chat/5bd5d8ef65224c2640512780/default'>
                  Help Chat
                </a>
              </li>
            </List>
          </Grid>
          <Grid item xs={6} md={2}>
            <h2>Information</h2>
            <List>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>
                <a href='https://ratings.food.gov.uk/'>Food Hygiene Rating</a>
              </li>
              <li>
                <a href='https://www.allergyuk.org/'>Allergy and Intolerance</a>
              </li>
            </List>
          </Grid>
        </Grid>
        <Divider />
        <Grid container justify='center'>
          <Box m={1}>
            <img
              style={{ height: '30px' }}
              src='https://waiterplus.com/webappcdn/2.6.94/assets/img/payment-wallet.png'
              alt='wallet'
            />
          </Box>
          <Box m={1}>
            <img
              style={{ height: '30px' }}
              src='https://waiterplus.com/webappcdn/2.6.94/assets/img/payment-mastercard.png'
              alt='mastercard'
            />
          </Box>
          <Box m={1}>
            <img
              style={{ height: '30px' }}
              src='https://waiterplus.com/webappcdn/2.6.94/assets/img/payment-visa.png'
              alt='visa'
            />
          </Box>
          <Box m={1}>
            <img
              style={{ height: '30px' }}
              src='https://waiterplus.com/webappcdn/2.6.94/assets/img/payment-paypal.png'
              alt='paypal'
            />
          </Box>
        </Grid>
        <Divider />
      </Container>
      <div style={{ backgroundColor: 'rgba(0,0,0,.2)' }}>
        <Grid container justify='center'>
          <Box pt={1}>
            &copy; {new Date().getFullYear()} Powered by: WaiterPlus 2.6.94
          </Box>
        </Grid>
        <Grid container justify='center'>
          <Box mb={8}>
            <RefreshIcon style={{ fontSize: 13 }} /> Reset App
          </Box>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
