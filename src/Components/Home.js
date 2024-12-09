import React, { useEffect, useState } from 'react'
import Logo from '../assets/mainPics/PalominoRanch-Logotype.png'
import ImageCarousel from './ImageCarousel'
import { homeImages } from '../images'


function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 770px)').matches);
    };

    const handleResize = () => {
      checkIsMobile();
    };

    checkIsMobile();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='homeDiv'>
      <img src={Logo} alt='palomino ranch townhomes logo' className='palominoLogo' />
      <div className='homeImageGalleryWrapper'>
        <ImageCarousel pics={homeImages} />
      </div>
      <div className={`${isMobile ? 'mobile-circle' : 'circle'}`}>
        <p>
          Call to tour our model!<br />
          <a href="tel:7199643526">719-964-3526</a><br />
        </p>
      </div>
    </div>
  )
}

export default Home 