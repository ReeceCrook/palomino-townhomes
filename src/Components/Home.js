import React, { useEffect, useState } from 'react'
import '../css/Home.css';
import Logo from '../assets/mainPics/PalominoRanch-Logotype.png'
import ImageCarousel from './ImageCarousel'
import { homeImages } from '../images'

const MOBILE_BREAKPOINT = '(max-width: 770px)';

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT);
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className='homeDiv'>
      <img src={Logo} alt='palomino ranch townhomes logo' className='palominoLogo' />
      <div className='homeImageGalleryWrapper'>
        <ImageCarousel pics={homeImages} />
      </div>
      <div className={isMobile ? 'mobileCircle' : 'circle'}>
        <p>
          Call to tour our model!<br />
          <a href="tel:7199643526">719-964-3526</a><br />
        </p>
      </div>
    </div>
  )
}

export default Home
