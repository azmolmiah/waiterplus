import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import withSizes from 'react-sizes';

import HomePage from './components/pages/HomePage';
import BookingsPage from './components/pages/BookingsPage';
import CheckoutPage from './components/pages/CheckoutPage';
import AccountPage from './components/pages/AccountPage';
import MenuPage from './components/pages/MenuPage';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = ({ isMobile }) => {
  return (
    <Router>
      <CssBaseline />
      <div className='App'>
        <Provider store={store}>
          <Switch>
            <Route
              exact
              path='/'
              render={props => <HomePage {...props} isMobile={isMobile} />}
            />
            <Route exact path='/bookings' component={BookingsPage} />
            <Route exact path='/menu' component={MenuPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/account'
              render={props => <AccountPage {...props} isMobile={isMobile} />}
            />
          </Switch>
        </Provider>
      </div>
    </Router>
  );
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 480
});

export default withSizes(mapSizesToProps)(App);
