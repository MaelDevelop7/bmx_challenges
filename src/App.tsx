import React, { JSX } from 'react';
import Home from './components/Home';
import Footer from './components/Footer';

import Tricks from './components/Tricks';
import './App.css'
export default function App(): JSX.Element {
  return (
    <div className="App">
      <Home />
      <Tricks />
      <Footer />
    </div>
  );
}
