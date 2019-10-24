import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Header = ({ alias }) => {
  return (
    <div
      style={{
        background: `url('https://${alias}.com/webapp-php-live/assets/img/home_bg-1.jpg') no-repeat center center fixed`,
        backgroundSize: 'cover',
        minHeight: '65vh',
        paddingTop: '15%'
      }}
    >
      <Grid container justify='center'>
        <img
          src={`https://${alias}.com/webapp-php-live/assets/img/full_logo.png`}
          alt='Restaurant Logo'
        />
      </Grid>

      <Grid container justify='center'>
        <Card>
          <CardContent>
            <h5>July Discount 2019</h5>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Header;
