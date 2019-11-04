import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import HomePage from './components/pages/HomePage';
import TopNav from './components/layouts/TopNav';
import BottomNav from './components/layouts/BottomNav';

import store from './store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <HomePage />
        <BottomNav />
      </Provider>
    </div>
  );
}

export default App;
