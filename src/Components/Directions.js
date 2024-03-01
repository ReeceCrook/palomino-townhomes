import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';


function Directions() {
  
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    transition: '0'
  };

  const center = {
    lat: 38.90873105888053,
    lng: -104.71440132092197,
  };

  return (
    <div className='directionsWrapper'>
      <h1>Directions</h1>
      <LoadScript
        googleMapsApiKey="AIzaSyB3cApC-B3MXt39hL_s8fyaA3l0Jn_I8rY"
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <MarkerF position={center} />
        </GoogleMap>
      </LoadScript>
      <a 
        href='https://maps.app.goo.gl/n6xQhkay1Xtk9vbG9' 
        target='_blank' 
        rel="noopener noreferrer"
        className='mapDirectionsATag'
      >
        Palomino Townhomes<br />
        5217 Palomino Ranch Point<br />
        Colorado Springs, Co. 80922
      </a>
    </div>
  )
}

export default Directions
