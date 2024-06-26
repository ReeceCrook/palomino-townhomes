import React, { useEffect, useState } from 'react'
import Logo from '../assets/mainPics/PalominoRanch-Logotype.png'
import ImageCarousel from './ImageCarousel'
import { homeImages } from '../images'


function Home() {
  const [isMobile, setIsMobile] = useState(false);
  // const [filteredImages, setFilteredImages] = useState([]);
  // const img = homeImages.filter(current => current.id === 4)

  // const filterImages = useCallback(() => {
  //   if (isMobile) {
  //     setFilteredImages(homeImages.filter(current => current.id !== 4));
  //   } else {
  //     setFilteredImages(homeImages);
  //   }
  // }, [isMobile]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 770px)').matches);
    };

    const handleResize = () => {
      checkIsMobile();
      // filterImages();
    };

    checkIsMobile();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // useEffect(() => {
  //   filterImages();
  // }, [isMobile, filterImages]);

  return (
    <div className='homeDiv'>
      <img src={Logo} alt='palomino ranch townhomes logo' className='palominoLogo' />
      <div className='homeImageGalleryWrapper'>
        <ImageCarousel pics={homeImages} />
      </div>
      <div className={`${isMobile ? 'mobile-circle' : 'circle'}`}>
          <p style={{ fontSize: "35px", marginTop: "45px"}}>
            Model Open<br/>
            Wed-Sun<br/>
            12p-5p
          </p>
        </div>
      {/* <div>
        {filteredImages === homeImages ? null :
          <img src={img[0].original} alt='First Time Home Buyer Incentive' className='firstTimeIncentive'></img>
        }
      </div> */}
    </div>
  )
}

export default Home 