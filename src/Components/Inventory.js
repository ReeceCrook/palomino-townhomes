import React, { useState } from 'react'
import ImageGallery from "react-image-gallery";
import "../App.css"
import cleanPalomino from '../assets/mainPics/Optimized-CleanPalomino-plat.jpg'
import units from '../units'
import { floorPlanImages } from '../carousel'

function Inventory() {
  const [hoveredPosition, setHoveredPosition] = useState({ x: 0, y: 0 });
  const [floorPlanTrigger, setFloorPlanTrigger] = useState(false)
  
  const handleMouseMove = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setHoveredPosition({ x: offsetX, y: offsetY });
  };

  const foorPlanSwitch = () => {
    setFloorPlanTrigger((current) => !current)
  }

  // const leftPhotos = []
  // const rightPhotos = []

  // for(let i = 0; i < floorPlanImages.length; i++){
  //   floorPlanImages[i].map(current => {
  //     if (current.left === true){
  //       leftPhotos.push(current)
  //     } else {
  //       rightPhotos.push(current)
  //     }
  //   })
  // }

  return (
    <div className='inventory-wrapper'>
      <img 
        src={cleanPalomino} 
        alt='Inventory' 
        onMouseMove={handleMouseMove}
        style={{
          marginTop: '20px',
        }}
      />
      {floorPlanTrigger 
      ? <div>
          <div className="overlay" onClick={foorPlanSwitch}>
            <button style={{
              position: "absolute",
              top: 0,
              right: 0,
            }}>❌</button>
          </div>
          <div className="popup">
            <ImageGallery items={floorPlanImages[0]} />
          </div>
        </div>
      : false}
      {units.map(current => {
        if (current.message &&
          hoveredPosition.x <= current.x[0] &&
          hoveredPosition.x >= current.x[1] &&
          hoveredPosition.y <= current.y[0] &&
          hoveredPosition.y >= current.y[1]) {
            const lines = current.message.split('\n').map((line, index) =>
              <React.Fragment key={index}>{line}<br /></React.Fragment>
            );
            return (
              <p className='inventoryHovered' key={current.name} style={{
                top: hoveredPosition.y,
                left: hoveredPosition.x / .9,
              }}>
                Unit: {current.name} <br></br>
                {current.model}<br></br>
                {lines}<br></br>
                {current.message === "Under Contract" ? false : 
                <button onClick={foorPlanSwitch}>View Floor Plan</button>
                }
                
              </p>
            );
        } else {
          return false
        }
        
    })};
    </div>
  );
}

export default Inventory;