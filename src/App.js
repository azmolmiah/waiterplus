import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import BottomNav from './components/layouts/BottomNav';
import RestaurantInfo from './components/restaurant/RestaurantInfos';
import HomePage from './components/layouts/index/HomePage';
import store from './store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <RestaurantInfo />
        <HomePage />
        <BottomNav />
      </Provider>
    </div>
  );
}

export default App;
