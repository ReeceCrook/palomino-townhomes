import React, {useState} from 'react'
import finalCovs from '../assets/hoaDocs/FinalCovenants.pdf'
import byLaws from '../assets/hoaDocs/Bylaws.pdf'
import platMap from '../assets/mainPics/CleanPalomino.Plat.jpg'

function CommunityInfo() {
  const [isPlatModalOpen, setIsPlatModalOpen] = useState(false)

  return (
    <div className='backroundImgDiv'>
      <div className='communityInfoWrapper'>
        <div className='communityInfoWrapperInner'>
            <div className='platMap'>
              <h2>Plat Map/Availability</h2>
                <button
                  className="platMapButton"
                  onClick={() => setIsPlatModalOpen(true)}
                >
              View Plat Map
            </button>
          </div>
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
        </div>
      </div>
        {isPlatModalOpen && (
          <div className='modalWrapper' onClick={() => setIsPlatModalOpen(false)}>
            <div className='modalContent' onClick={e => e.stopPropagation()}>
              <button className='closeModal' onClick={() => setIsPlatModalOpen(false)} aria-label="Close TownHome Plat Map">❌</button>
              <img src={platMap} alt='MasterBilt Palomino Townhomes Colorado Springs Colorado Plat Map' className='platMapImg'/>
            </div>
          </div>
        )}
    </div>
  );
}

export default CommunityInfo;