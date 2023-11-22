import React from 'react'
import Logo from '../data/Screenshot 2023-11-21 221052.png'
import ImageCarousel from './ImageCarousel'

function Home() {
  return (
    <div>
      <h1>Home</h1>
        <img src={Logo} alt='MB logo' className='mb-logo' />
        <ImageCarousel />
    </div>
  )
}

export default Home 