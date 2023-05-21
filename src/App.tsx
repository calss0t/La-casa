import React from 'react';
import './App.css';
import Header from './Components/Header';
import TopBlock from './Components/TopBlock';
// import { BookingForm } from '../Selector';
import About from './Components/About';
import Breakfast from './Components/Breakfast';
import Rooms from './Components/Rooms';

function App() {
  return (
    <div className='App'>
      <Header />
      <TopBlock />
      <About />
      <Breakfast />
      <Rooms />
    </div>
  );
}



export default App;

