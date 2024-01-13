import React from 'react'
import '../App.css'
 import { floorPlanImages } from '../carousel'
 import ImageCarousel from './ImageCarousel'


function FloorPlans() {
  return (
    <div className='floorPlanWrapper'>
      <div className='card1'>
        <ImageCarousel pics={floorPlanImages[0]} />
        <h2 style={{"font-weight": "bold"}}>3 Bedroom 2.5 Bath</h2>
        <p>
          Unfinished Basement<br />
          1 car detached garage
        </p>
      </div>
      <div className='card2'>
        
      </div>
      <div className='card3'>
        
      </div>
    </div>
  )
}

export default FloorPlans