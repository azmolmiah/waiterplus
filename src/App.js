import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import withSizes from 'react-sizes';

import HomePage from './components/pages/HomePage';
import BookingsPage from './components/pages/BookingsPage';
import CheckoutPage from './components/pages/CheckoutPage';
import AccountPage from './components/pages/AccountPage';
import MenuPage from './components/pages/MenuPage';
import TermsPage from './components/pages/TermsPage';
import PrivacyPage from './components/pages/PrivacyPage';
import CookiePage from './components/pages/CookiePage';

import './App.css';
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
            <Route
              exact
              path='/bookings'
              render={props => <BookingsPage {...props} isMobile={isMobile} />}
            />
            <Route
              exact
              path='/menu'
              render={props => <MenuPage {...props} isMobile={isMobile} />}
            />
            <Route
              exact
              path='/checkout'
              render={props => <CheckoutPage {...props} isMobile={isMobile} />}
            />
            <Route
              exact
              path='/account'
              render={props => <AccountPage {...props} isMobile={isMobile} />}
            />
            <Route
              exact
              path='/termsofuse'
              render={props => <TermsPage {...props} isMobile={isMobile} />}
            />
            <Route
              exact
              path='/privacy'
              render={props => <PrivacyPage {...props} isMobile={isMobile} />}
            />
            <Route
              exact
              path='/cookies'
              render={props => <CookiePage {...props} isMobile={isMobile} />}
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
