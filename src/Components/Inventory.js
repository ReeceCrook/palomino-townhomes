import React, { useState } from 'react'
import cleanPalomino from '../data/CleanPalomino-plat.png'
import units from '../units'

function Inventory() {

  const [hoveredPosition, setHoveredPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setHoveredPosition({ x: offsetX, y: offsetY });
  };
  

  
  let boolenArr = []

  units.map(current => {
    if (hoveredPosition.x <= current.x[0] && 
      hoveredPosition.x >= current.x[1] && 
      hoveredPosition.y <= current.y[0] && 
      hoveredPosition.y >= current.y[1]) {
        boolenArr = []
        boolenArr.push(true, current.name) 
        return boolenArr
    } else {
      boolenArr.push(false)
      return boolenArr
    }
  })

  return (
    <div>
      <img 
        src={cleanPalomino} 
        alt='Inventory' 
        onMouseMove={handleMouseMove}
        style={{
          marginTop: '20px'
        }}
      />
      {boolenArr[0] ? <p style={{
        color: 'black',
        position: "absolute",
        top: hoveredPosition.y + hoveredPosition.y * 0.2,
        left: hoveredPosition.x + hoveredPosition.y * 0.5,
        padding: '10px',
        background: '#f0f0f0',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}>: 
        Hovered at: ({hoveredPosition.x}, {hoveredPosition.y})
         Unit: {boolenArr[1]}
      </p>: false}
    </div>
  )
}

export default Inventory;