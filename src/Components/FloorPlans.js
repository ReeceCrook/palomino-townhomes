import React from 'react'
import '../App.css'
import { Carousel } from 'react-responsive-carousel'
import { floorPlanImages } from '../Carousel'

function FloorPlans() {
  return (
    <div>
      <div className='model-1551'>
      <h3>Model-1551</h3>
        <Carousel showArrows={true}>
          {
            floorPlanImages.filter(current => current.model === 1551).map(image => {
              return (
                <div key={image.id} className="carousel-image">
                  <img src={image.src} alt={image.description} />
                </div>
              )
            })
          }
        </Carousel>
      </div>
      <div className='model-1558'>
        <h3>Model-1558</h3>
        <Carousel showArrows={true}>
          {
            floorPlanImages.filter(current => current.model === 1558).map(image => {
              return (
                <div key={image.id} className="carousel-image">
                  <img src={image.src} alt={image.description} />
                </div>
              )
            })
          }
        </Carousel>
      </div>
    </div>
  )
}

export default FloorPlans