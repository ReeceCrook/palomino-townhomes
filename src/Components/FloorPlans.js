import React from 'react'
import '../FloorPlan.css'
import { floorPlanImages } from '../carousel'
import ImageCarousel from './ImageCarousel'
 


function FloorPlans() {

  return (
    <div className='floorPlanWrapper'>
      <div className='card1'>
        <div className='cardTextDiv'>
          <h2>3 Bedroom 2.5 Bath</h2>
          <p>
            Unfinished Basement<br />
            1 car detached garage
          </p>
        </div>
        <ImageCarousel pics={floorPlanImages[0]} showFullscreenButton={false} />
      </div>
      <div className='card2'>
        <div className='cardTextDiv'>
          <h2>2 Bedroom 2.5 Bath</h2>
          <p>
            Unfinished Basement<br />
            1 car detached garage
          </p>
        </div>
        <ImageCarousel pics={floorPlanImages[1]} showFullscreenButton={false} />
      </div>
      <div className='card3'>
        <div className='cardTextDiv'>
          <h2>3 Bedroom 2.5 Bath</h2>
          <p>
            Master on the Main<br />
            Unfinished Basement<br />
            2 car detached garage
          </p>
        </div>
        <ImageCarousel pics={floorPlanImages[2]} showFullscreenButton={false} />
      </div>
    </div>
  )
}

export default FloorPlans