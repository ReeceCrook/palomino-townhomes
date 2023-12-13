import {React, lazy, Suspense} from 'react';
import { Route, Routes } from "react-router-dom";
import '../App.css';
import NavBar from './Navbar';
import Home from './Home';
import FloorPlans from './FloorPlans';
import DarkMode from './DarkMode/DarkMode.js';
import Footer from './Footer.js';
import Loading from './Loading.js';
const AboutUs = lazy(() => import('./AboutUs'));
const Inventory = lazy(() => import('./Inventory.js'));
const HoaDocs = lazy(() => import('./HoaDocs.js'));
const Contact = lazy(() => import('./Contact.js'));


function App() {
  return (
    <div className="App">
      <NavBar />
      <DarkMode />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/floorPlans" element={<FloorPlans />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/hoaDocs" element={<HoaDocs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;