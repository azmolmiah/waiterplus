import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import HomePage from './components/pages/HomePage';
import TopNav from './components/layouts/TopNav';
import BottomNav from './components/layouts/BottomNav';
import Footer from './components/layouts/Footer';

import store from './store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <HomePage />
        <Footer />
        <BottomNav />
      </Provider>
    </div>
  );
}

export default App;
