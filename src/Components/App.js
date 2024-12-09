import { React, lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { LoadScriptNext } from '@react-google-maps/api';
import '../App.css';
import NavBar from './Navbar';
import Home from './Home';
import FloorPlans from './FloorPlans';
import Loading from './Loading.js';
import Contact from './Contact.js';
import Directions from './Directions.js'
const CommunityInfo = lazy(() => import('./CommunityInfo.js'));
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

function App() {
  return (
    <div className="App">
      <LoadScriptNext
        googleMapsApiKey={API_KEY}
        loadingElement={<div>Loading map...</div>}
      >
        <NavBar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/floor-plans" element={<FloorPlans />} />
            <Route exact path="/community-info" element={<CommunityInfo />} />
            <Route exact path="/directions" element={<Directions />} />
            <Route exact path="/contact-us" element={<Contact />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </LoadScriptNext>
    </div>
  );
}

export default App;