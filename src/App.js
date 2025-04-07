import './App.css';
import Banner from './components/banner/Banner';
import Feature from './components/features/Feature';
import Navbar from './components/navbar/Navbar';
import React from 'react';

function App() {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
      <div className='max-w-screen-2xl mx-auto px-16'>
        <Navbar/>
        <Banner/>
        <Feature/>
      </div>
    </div>
  );
}

export default App;
