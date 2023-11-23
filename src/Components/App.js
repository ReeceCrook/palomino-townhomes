import React from 'react';
import { Route, Routes } from "react-router-dom";
import '../App.css';
import mbLogo from '../data/MB 2016 Logo.jpg'
import NavBar from './Navbar';
import Home from './Home';
import FloorPlans from './FloorPlans';
import Inventory from './Inventory';
import HoaDocs from './HoaDocs';
import AboutUs from './AboutUs';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <img src={mbLogo} alt='mbLogo' className='mbLogo' />
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