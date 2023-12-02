import React from 'react'
import Logo from '../assets/darkModePics/PalominoRanch-Logotype.png'
import mbLogo from '../assets/darkModePics/ColorMtns2.png'

import ImageCarousel from './ImageCarousel'

function Home() {
  return (
    <div>
      <img src={mbLogo} alt='mountains' className='mountains' />
      <img src={Logo} alt='palomino-Logo' className='palomino-Logo' />
      <ImageCarousel />
    </div>
  )
}

export default Home 