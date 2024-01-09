import React from 'react'
import Logo from '../assets/darkModePics/PalominoRanch-Logotype.png'
import palominoMap from '../assets/mainPics/PalominoMap.jpg'
import ImageGallery from "react-image-gallery";
import { homeImages } from '../carousel';
import Inventory from './Inventory';

export const Demo = () => {
  return (
    <div className='homeDiv'>
        {/* <img src={mbLogo} alt='Mountains' className='mountains' /> */}
        <img src={Logo} alt='palomino Logo' className='palominoLogo' />
        <ImageGallery items={homeImages} />
        <img src={palominoMap} alt='Palomino Map' className='palominoMap' />
        <Inventory />
    </div>
  )
}
