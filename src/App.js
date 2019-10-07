import React from 'react';
import './App.css';
import BottomNav from './components/layouts/BottomNav';
import RestaurantInfo from './components/restaurant/RestaurantInfos';

function App() {
  return (
    <div className='App'>
      <RestaurantInfo />
      <BottomNav />
    </div>
  );
}

export default App;
