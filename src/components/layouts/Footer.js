import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const Footer = () => {
  const styles = {
    padding: '4% 0',
    backgroundColor: '#4a1448',
    color: 'white'
  };
  return (
    <div style={styles}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <h2>Brief About</h2>
            <p>
              Modhubon of Oldham is proud to offer the best Indian cuisine, with
              age old recipes from Indian sub continent.
            </p>
          </Grid>
          <Grid item xs={12} md={3}>
            <h2>Customer Service</h2>
            <List>
              <li>Login</li>
              <li>Sign Up</li>
              <li>Help Chat</li>
            </List>
          </Grid>
          <Grid item xs={12} md={3}>
            <h2>Information</h2>
            <List>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Food Hygiene Rating</li>
              <li>Allergy and Intolerance</li>
            </List>
          </Grid>
        </Grid>
        <Divider light />
        <Grid container justify='center'>
          <img
            src='https://waiterplus.com/webappcdn/2.6.94/assets/img/payment-wallet.png'
            alt='wallet'
          />
          <img
            src='https://waiterplus.com/webappcdn/2.6.94/assets/img/payment-mastercard.png'
            alt='mastercard'
          />
          <img
            src='https://waiterplus.com/webappcdn/2.6.94/assets/img/payment-visa.png'
            alt='visa'
          />
          <img
            src='https://waiterplus.com/webappcdn/2.6.94/assets/img/payment-paypal.png'
            alt='paypal'
          />
        </Grid>
        <Divider light />
      </Container>
    </div>
  );
};

export default Footer;
