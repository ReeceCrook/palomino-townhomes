import React, { useEffect, useState } from 'react'
import Logo from '../assets/mainPics/PalominoRanch-Logotype.png'
import ImageCarousel from './ImageCarousel'
import { homeImages } from '../images'

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 770px)').matches);
    };

    const handleResize = () => {
      checkIsMobile();
      filterImages();
    };

    checkIsMobile();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    filterImages();
  }, [isMobile]);

  const filterImages = () => {
    if (isMobile) {
      setFilteredImages(homeImages.filter(current => current.id !== 4));
    } else {
      setFilteredImages(homeImages);
    }
  };

  const img = homeImages.filter(current => current.id === 4)
  console.log(img[0].original)
  return (
    <div className='homeDiv'>
      <img src={Logo} alt='palomino Logo' className='palominoLogo' />
      <div className='homeImageGalleryWrapper'>
        <ImageCarousel pics={filteredImages}  />
      </div>
      <div>
        {filteredImages === homeImages ? null :
          <img src={img[0].original} alt='First Time Home Buyer Incentive' className='firstTimeIncentive'></img>
        }
      </div>
    </div>
  )
}

export default Home 