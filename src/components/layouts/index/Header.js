import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Header = ({ alias, title }) => {
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div
        style={{
          background: `url('https://${alias}.com/webapp-php-live/assets/img/home_bg-1.jpg') no-repeat center center fixed`,
          backgroundSize: 'cover',
          maxHeight: '65vh',
          padding: '15%'
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
    </Fragment>
  );
};

export default Header;
