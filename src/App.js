import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import withSizes from 'react-sizes';

import HomePage from './components/pages/HomePage';
import BookingsPage from './components/pages/BookingsPage';
import CheckoutPage from './components/pages/CheckoutPage';
import LoginPage from './components/pages/LoginPage';
import MenuPage from './components/pages/MenuPage';
import TopNav from './components/layouts/TopNav';
import BottomNav from './components/layouts/BottomNav';
import store from './store';

const App = ({ isMobile }) => {
  return (
    <Router>
      <div className='App'>
        <Provider store={store}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/bookings' component={BookingsPage} />
            <Route exact path='/menu' component={MenuPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/login' component={LoginPage} />
          </Switch>
          {isMobile ? <BottomNav /> : <TopNav />}
        </Provider>
      </div>
    </Router>
  );
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 480
});

export default withSizes(mapSizesToProps)(App);
