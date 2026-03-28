import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { LoadScriptNext } from '@react-google-maps/api';
import '../css/App.css';
import NavBar from './Navbar';
import Home from './Home';
import FloorPlans from './FloorPlans';
import Loading from './Loading.js';
import Contact from './Contact.js';
import Directions from './Directions.js'
const CommunityInfo = lazy(() => import('./CommunityInfo.js'));

function App() {
  return (
    <div className="App">
      <LoadScriptNext
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}
        loadingElement={<div>Loading map...</div>}
      >
        <NavBar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/floor-plans" element={<FloorPlans />} />
            <Route path="/community-info" element={<CommunityInfo />} />
            <Route path="/directions" element={<Directions />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </Suspense>
      </LoadScriptNext>
    </div>
  );
}

export default App;
