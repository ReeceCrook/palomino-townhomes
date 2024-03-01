import {React, lazy, Suspense} from 'react';
import { Route, Routes } from "react-router-dom";
import '../App.css';
import NavBar from './Navbar';
import Home from './Home';
import FloorPlans from './FloorPlans';
import Loading from './Loading.js';
import Contact from './Contact.js';
import Directions from'./Directions.js'
const CommunityInfo = lazy(() => import('./CommunityInfo.js'));




function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;