import React, { useState } from 'react'
import cleanPalomino from '../data/CleanPalomino-plat.png'

function Inventory() {

  const [hoveredPosition, setHoveredPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setHoveredPosition({ x: offsetX, y: offsetY });
  };
  
  // case hoveredPosition.x <= 825 && hoveredPosition.x >= 670 && hoveredPosition.y <=  && hoveredPosition.y >= :
  //hoveredPosition.x <= 825 && hoveredPosition.x >= 670 && hoveredPosition.y <= 388 && hoveredPosition.y >= 332:
  // if (hoveredPosition.x <= 825 && hoveredPosition.x >= 670 && hoveredPosition.y <= 326 && hoveredPosition.y >= 260) {

  // }else if(hoveredPosition.x <= 825 && hoveredPosition.x >= 670 && hoveredPosition.y <= 388 && hoveredPosition.y >= 332) {

  // } else {
    
  // }

  const block1 = hoveredPosition.x <= 825 && hoveredPosition.x >= 670
  const block2 = hoveredPosition.x <= 570 && hoveredPosition.x >= 460
  const block3 = hoveredPosition.x <= 436 && hoveredPosition.x >= 315
  const block4 = hoveredPosition.x <= 304 && hoveredPosition.x >= 107
  const block5 = hoveredPosition.x <= 216 && hoveredPosition.x >= 58

  const unit1 = block1 && hoveredPosition.y <= 326 && hoveredPosition.y >= 260 ? true: false
  const unit2 = block1 && hoveredPosition.y <= 388 && hoveredPosition.y >= 332 ? true: false
  const unit3 = block1 && hoveredPosition.y <= 446 && hoveredPosition.y >= 392 ? true: false
  const unit4 = block1 && hoveredPosition.y <= 504 && hoveredPosition.y >= 452 ? true: false
  const unit5 = block1 && hoveredPosition.y <= 563 && hoveredPosition.y >= 510 ? true: false
  const unit6 = block1 && hoveredPosition.y <= 621 && hoveredPosition.y >= 569 ? true: false
  const unit7 = block1 && hoveredPosition.y <= 680 && hoveredPosition.y >= 629 ? true: false
  const unit8 = block1 && hoveredPosition.y <= 754 && hoveredPosition.y >= 688 ? true: false

  const unit9 = block2 && hoveredPosition.y <= 285 && hoveredPosition.y >= 218 ? true: false
  const unit10 = block2 && hoveredPosition.y <= 345 && hoveredPosition.y >= 290 ? true: false
  const unit11 = block2 && hoveredPosition.y <= 403 && hoveredPosition.y >= 348 ? true: false
  const unit12 = block2 && hoveredPosition.y <= 460 && hoveredPosition.y >= 409 ? true: false
  const unit13 = block2 && hoveredPosition.y <= 523 && hoveredPosition.y >= 467 ? true: false
  const unit14 = block2 && hoveredPosition.y <= 580 && hoveredPosition.y >= 526 ? true: false
  const unit15 = block2 && hoveredPosition.y <= 639 && hoveredPosition.y >= 586 ? true: false
  const unit16 = block2 && hoveredPosition.y <= 710 && hoveredPosition.y >= 465 ? true: false

  const unit17 = block3 && hoveredPosition.y <= 286 && hoveredPosition.y >= 220 ? true: false
  const unit18 = block3 && hoveredPosition.y <= 346 && hoveredPosition.y >= 290 ? true: false
  const unit19 = block3 && hoveredPosition.y <= 403 && hoveredPosition.y >= 350 ? true: false
  const unit20 = block3 && hoveredPosition.y <= 462 && hoveredPosition.y >= 408 ? true: false
  const unit21 = block3 && hoveredPosition.y <= 522 && hoveredPosition.y >= 467 ? true: false
  const unit22 = block3 && hoveredPosition.y <= 580 && hoveredPosition.y >= 526 ? true: false
  const unit23 = block3 && hoveredPosition.y <= 640 && hoveredPosition.y >= 585 ? true: false
  const unit24 = block3 && hoveredPosition.y <= 710 && hoveredPosition.y >= 643 ? true: false

  const unit25 = block4 && hoveredPosition.y <= 342 && hoveredPosition.y >= 263 ? true: false
  const unit26 = block5 && hoveredPosition.y <= 401 && hoveredPosition.y >= 347 ? true: false
  const unit27 = block5 && hoveredPosition.y <= 260 && hoveredPosition.y >= 404 ? true: false
  const unit28 = block5 && hoveredPosition.y <= 518 && hoveredPosition.y >= 462 ? true: false
  const unit29 = block5 && hoveredPosition.y <= 577 && hoveredPosition.y >= 522 ? true: false
  const unit30 = block4 && hoveredPosition.y <= 636 && hoveredPosition.y >= 583 ? true: false
  const unit31 = block4 && hoveredPosition.y <= 710 && hoveredPosition.y >= 640 ? true: false


  return (
    <div>
      <h1>Inventory</h1>
      <img 
        src={cleanPalomino} 
        alt='Inventory' 
        onMouseMove={handleMouseMove} 
      />

      <p style={{
        color: 'black',
        position: 'absolute',
        top: hoveredPosition.y + 50,
        left: hoveredPosition.x - 45,
        padding: '10px',
        background: '#f0f0f0',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        Hovered at: ({hoveredPosition.x}, {hoveredPosition.y})
        {unit1 ? " unit1": unit2 ? " unit2": unit3 ? " unit3": unit4 ? " unit4": unit5? " unit5": unit6 ? ' unit6': 
        unit7 ? " unit7": unit8 ? " unit8": unit9 ? " unit9": unit10 ? " unit10": unit11? " unit11": unit12 ? ' unit12':
        unit13 ? " unit13": unit14 ? " unit14": unit15 ? " unit15": unit16 ? " unit16": unit17? " unit17": unit18 ? ' unit18':
        unit19 ? " unit19": unit20 ? " unit20": unit21 ? " unit21": unit22 ? " unit22": unit23? " unit23": unit24 ? ' unit24':
        unit25 ? " unit25": unit26 ? " unit26": unit27 ? " unit27": unit28 ? " unit28": unit29? " unit29": unit30 ? ' unit30': unit31 ? " unit31": " False"}
        
      </p>



    </div>
  )
}

export default Inventory