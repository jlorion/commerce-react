import React from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';



function App() {
  return (
    
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>

      </Router>

  );
}

export default App;
