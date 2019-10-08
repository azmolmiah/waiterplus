import React from 'react';
import './App.css';
import BottomNav from './components/layouts/BottomNav';
import RestaurantInfo from './components/restaurant/RestaurantInfos';
import Header from './components/layouts/Header';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <RestaurantInfo />
        <Header />
        <BottomNav />
      </Provider>
    </div>
  );
}

export default App;
