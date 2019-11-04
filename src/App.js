import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import withSizes from 'react-sizes';
import HomePage from './components/pages/HomePage';
import TopNav from './components/layouts/TopNav';
import BottomNav from './components/layouts/BottomNav';

import store from './store';

const App = ({ isMobile }) => {
  return (
    <div className='App'>
      <Provider store={store}>
        <HomePage />
        {isMobile ? <BottomNav /> : <TopNav />}
      </Provider>
    </div>
  );
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 480
});

export default withSizes(mapSizesToProps)(App);
