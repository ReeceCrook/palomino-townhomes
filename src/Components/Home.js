import React from 'react'
import Logo from '../data/PalominoRanch-Logotype.png'
import ImageCarousel from './ImageCarousel'

function Home() {
  return (
    <div>
        <img src={Logo} alt='MB logo' className='mb-logo' />
        <ImageCarousel />
    </div>
  )
}

export default Home 