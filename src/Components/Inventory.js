import React, { useState } from 'react'
import "../App.css"
import cleanPalomino from '../assets/mainPics/Optimized-CleanPalomino-plat.jpg'
import units from '../units'

function Inventory() {

  const [hoveredPosition, setHoveredPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setHoveredPosition({ x: offsetX, y: offsetY });
  };
  
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
      {units.map(current => {
        if (current.message &&
          hoveredPosition.x <= current.x[0] &&
          hoveredPosition.x >= current.x[1] &&
          hoveredPosition.y <= current.y[0] &&
          hoveredPosition.y >= current.y[1]) {
            const lines = current.message ? current.message.split('\n').map((line, index) =>
              <React.Fragment key={index}>{line}<br /></React.Fragment>
            ): false;
            return (
              <p className='inventoryHovered' style={{
                top: hoveredPosition.y,
                left: hoveredPosition.x,
              }}>
                Unit: {current.name} <br></br><br></br>
                {current.message ? lines: ""}
              </p>
            );
      }})};
    </div>
  );
}

export default Inventory;