import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MenuBorder from './MenuBorder';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Discover from './Discover';
import Apparel from './Apparel';
import Gear from './Gear';
import Home from './Home';

// import { BrowseRouter as Router, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <header className="App-header">
        <MenuBorder />
        <Routes>
          <Route path="/discover" element={<Discover/>}/>
          <Route path="/apparel" element={<Apparel />}/>
          <Route path="/gear" element={<Gear />}/>
          <Route path ="/home" element={<Home />}/>
        </Routes>
        </header>
    </Router>
    </div>
  );
}

export default App;
