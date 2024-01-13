import React from 'react'
import '../FloorPlan.css'
 import { floorPlanImages } from '../carousel'
 import ImageCarousel from './ImageCarousel'
 


function FloorPlans() {
  return (
    <div className='floorPlanWrapper'>
      <div className='card1'>
        <ImageCarousel pics={floorPlanImages[0]} />
        <h2 style={{"fontWeight": "bold"}}>3 Bedroom 2.5 Bath</h2>
        <p>
          Unfinished Basement<br />
          1 car detached garage
        </p>
      </div>
      <div className='card2'>
        <ImageCarousel pics={floorPlanImages[1]} />
          <h2 style={{"fontWeight": "bold"}}>2 Bedroom 2.5 Bath</h2>
          <p>
            Unfinished Basement<br />
            1 car detached garage
          </p>
      </div>
      <div className='card3'>
        <ImageCarousel pics={floorPlanImages[2]} />
        <h2 style={{"fontWeight": "bold"}}>3 Bedroom 2.5 Bath</h2>
        <p>
          Master on the Main<br />
          Unfinished Basement<br />
          2 car detached garage
        </p>
      </div>
    </div>
  )
}

export default FloorPlans