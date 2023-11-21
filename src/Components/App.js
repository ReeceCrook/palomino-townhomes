import React from 'react';
import '../App.css';
import Logo from '../data/MB 2016 Logo.jpg'
import ImageCarousel from './ImageCarousel';

function App() {
  return (
    <div className="App">
      <div className='top-div'>
        <img src={Logo} alt='MB logo' className='mb-logo' />
        <ImageCarousel />
      </div>
    </div>
  );
}

export default App;