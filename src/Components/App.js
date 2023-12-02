import React from 'react';
import { Route, Routes } from "react-router-dom";
import '../App.css';
import NavBar from './Navbar';
import Home from './Home';
import FloorPlans from './FloorPlans';
import Inventory from './Inventory';
import HoaDocs from './HoaDocs';
import AboutUs from './AboutUs';
import Contact from './Contact';
import DarkMode from './DarkMode/DarkMode.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <DarkMode />
      <Routes>
        <Route path="/floorPlans" element={<FloorPlans />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/hoaDocs" element={<HoaDocs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;