import { React, lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { LoadScriptNext } from '@react-google-maps/api';
import '../css/App.css';
import NavBar from './Navbar';
import Home from './Home';
// import AvailableHomes from './AvailableHomes.js';
import FloorPlans from './FloorPlans';
import Loading from './Loading.js';
import Contact from './Contact.js';
import Directions from './Directions.js'
const CommunityInfo = lazy(() => import('./CommunityInfo.js'));
const API_KEY = "AIzaSyBb37nQzzMw7_9NBshKx5uOTCj9oe9pxq0";

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
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path='/available-homes' element={<AvailableHomes />} /> */}
            <Route exact path="/floor-plans" element={<FloorPlans />} />
            <Route exact path="/community-info" element={<CommunityInfo />} />
            <Route exact path="/directions" element={<Directions />} />
            <Route exact path="/contact-us" element={<Contact />} />
          </Routes>
        </Suspense>
      </LoadScriptNext>
    </div>
  );
}

export default App;