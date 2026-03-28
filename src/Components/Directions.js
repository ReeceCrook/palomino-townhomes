import React from 'react';
import '../css/Directions.css';
import { GoogleMap, MarkerF } from '@react-google-maps/api';

const center = {
  lat: 38.90897932355048,
  lng: -104.71423023899487
};

function Directions() {

  return (
    <div className='directionsWrapper'>
      <h1>Directions</h1>

      <GoogleMap
        mapContainerClassName="mapContainer"
        center={center}
        zoom={15}
      >
        <MarkerF position={center} />
      </GoogleMap>
      <a
        href='https://maps.app.goo.gl/kZGZBtfFjVg5rDvc7'
        target='_blank'
        rel="noopener noreferrer"
        className='mapDirectionsLink'
        aria-label="Open Google Maps for Palomino Townhomes"
      >
        Palomino Townhomes<br />
        5113 Palomino Ranch Point<br />
        Colorado Springs, Co. 80922
      </a>
      <div className='infoBox'>
        <span className="infoIcon">⚠️</span>
        <span className="infoMessage">Enter off of Tutt Blvd.</span>
      </div>
    </div>
  )
}

export default Directions
