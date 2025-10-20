import React from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';


function Directions() {

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    transition: '0'
  };

  const center = {
    lat: 38.90897932355048,
    lng: -104.71423023899487
  };
  return (
    <div className='directionsWrapper'>
      <h1>Directions</h1>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        <MarkerF position={center} />
      </GoogleMap>
      <a
        href='https://maps.app.goo.gl/kZGZBtfFjVg5rDvc7'
        target='_blank'
        rel="noopener noreferrer"
        className='mapDirectionsATag'
        aria-label="Open Google Maps for Palomino Townhomes"
      >
        Palomino Townhomes<br />
        5217 Palomino Ranch Point<br />
        Colorado Springs, Co. 80922
      </a>
      <div className='info-box'>
        <span className="info-icon">⚠️</span>
        <span className="info-message">Enter off of Tutt Blvd.</span>
      </div>
    </div>
  )
}

export default Directions
