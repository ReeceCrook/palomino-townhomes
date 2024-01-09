import React from 'react'
import Logo from '../assets/darkModePics/PalominoRanch-Logotype.png'
// import mbLogo from '../assets/darkModePics/ColorMtns2.png'
import palominoMap from '../assets/mainPics/PalominoMap.jpg'
import ImageCarousel from './ImageCarousel'

function Home() {
  return (
    <div className='homeDiv'>
      {/* <img src={mbLogo} alt='Mountains' className='mountains' /> */}
      <img src={Logo} alt='palomino Logo' className='palominoLogo' />
      <ImageCarousel />
      <img src={palominoMap} alt='Palomino Map' className='palominoMap' />
    </div>
  )
}

export default Home 