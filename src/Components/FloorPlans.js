import React from 'react'
import '../FloorPlan.css'
import { floorPlanImages } from '../images.js'
import ImageCarousel from './ImageCarousel'
 


function FloorPlans() {

  return (
    <div className='floorPlanWrapper'>
      <div className='card1'>
        <div className='cardTextDiv'>
          <h2>3 Bedroom 2.5 Bath</h2>
          <p>
            Master on the Main<br />
            Unfinished Basement<br />
            Optional 2 car detached garage
          </p>
        </div>
        <ImageCarousel pics={floorPlanImages[2]} showFullscreenButton={true} />
      </div>
      <div className='card2'>
        <div className='cardTextDiv'>
          <h2>2 Bedroom 2.5 Bath</h2>
          <p>
            Unfinished Basement<br />
            1 car detached garage
          </p>
        </div>
        <ImageCarousel pics={floorPlanImages[1]} showFullscreenButton={true} />
      </div>
      <div className='card3'>
        <div className='cardTextDiv'>
          <h2>3 Bedroom 2.5 Bath</h2>
          <p>
            Unfinished Basement<br />
            1 car detached garage
          </p>
        </div>
        <ImageCarousel pics={floorPlanImages[0]} showFullscreenButton={true} />
      </div>
    </div>
  )
}

export default FloorPlans