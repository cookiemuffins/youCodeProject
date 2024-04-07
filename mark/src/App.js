import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MenuBorder from './MenuBorder';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Discover from './Discover';
import Apparel from './Apparel';
import Gear from './Gear';

// import { BrowseRouter as Router, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <header className="App-header">
        <MenuBorder />
        <Routes>
          <Route path="/discover" element={<Discover />}/>
          <Route path="/apparel" element={<Apparel />}/>
          <Route path="/gear" element={<Gear />}/>
        </Routes>
        </header>
    </Router>

    </div>
  );
}

export default App;
