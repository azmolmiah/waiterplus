import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Header = () => {
  return (
    <div
      style={{
        background:
          "url('https://modhubon.com/webapp-php-live/assets/img/home_bg-1.jpg') no-repeat center center fixed",
        backgroundSize: 'cover',
        minHeight: '65vh',
        paddingTop: '15%'
      }}
    >
      <CssBaseline />

      <Grid item xs={12}>
        <Grid container justify='center'>
          <img
            src='https://modhubon.com/webapp-php-live/assets/img/full_logo.png'
            alt='Restaurant Logo'
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify='center'>
          <Card>
            <CardContent>
              <h5>July Discount 2019</h5>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
