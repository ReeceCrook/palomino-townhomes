import React from 'react'
import "../App.css"
import finalCovs from '../assets/hoaDocs/FinalCovenants.pdf'
import byLaws from '../assets/hoaDocs/Bylaws.pdf'
import platMap from '../assets/mainPics/CleanPalominoPlat.jpg'

function CommunityInfo() {

  return (
    <div className='CommunityInfoWrapper'>
      <div className='finalCovenants'>
        <h2>
          Declaration of Covenants,<br />
          Conditions and Restrictions
        </h2>
        <a href={finalCovs} target="_blank" rel="noopener noreferrer">View PDF</a>
      </div>
      <div className='byLaws'>
        <h2>
          ByLaws<br />
          of Palomino Ranch Patio Homes<br />
          Homeowners Association, Inc..
        </h2>
        <a href={byLaws} target="_blank" rel="noopener noreferrer">View PDF</a>
      </div>
      <div className='platMap'>
        <h2>Plat Map</h2>
        <a href={platMap} target="_blank" rel="noopener noreferrer">View PDF</a>
      </div>
    </div>
  );
}

export default CommunityInfo;