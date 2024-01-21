import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { Location } from './components/Location';
import When from './components/When';
import Where from './components/Where';
import Footer from './components/Footer';
import './App.css';

const App = () => {

  return (
    <div>
      <Header/>
      <Location/>
      <When/>
      <Where/>
      <Footer/>
    </div>
  );
};

export default App;
