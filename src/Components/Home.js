import React from 'react'
import Logo from '../assets/mainPics/PalominoRanch-Logotype.png'
import ImageCarousel from './ImageCarousel'
import { homeImages } from '../carousel'

function Home() {
  
  return (
    <div className='homeDiv'>
      <img src={Logo} alt='palomino Logo' className='palominoLogo' />
      <div className='homeImageGalleryWrapper'>
        <ImageCarousel pics={homeImages}  />
      </div>
    </div>
  )
}

export default Home 