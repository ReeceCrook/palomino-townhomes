import {React, useState,lazy, Suspense} from 'react';
import { Route, Routes } from "react-router-dom";
import '../App.css';
import NavBar from './Navbar';
import Home from './Home';
import FloorPlans from './FloorPlans';
import Loading from './Loading.js';
import Contact from './Contact.js';
const CommunityInfo = lazy(() => import('./CommunityInfo.js'));
const Directions = lazy(() => import('./Directions.js'));



function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/floorPlans" element={<FloorPlans />} />
          <Route path="/communityInfo" element={<CommunityInfo />} />
          <Route path="/directions" element={<Directions />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;