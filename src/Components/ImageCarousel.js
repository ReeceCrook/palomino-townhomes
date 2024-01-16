import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

function ImageCarousel({ pics, showFullscreenButton=true, onClick=null  }){
    const [isFullscreen, setIsFullscreen] = useState(false);
    
    useEffect(() => {
        const fullscreenHandler = () => {
          const homeTabs = document.querySelector('.homeTabs');
          const navTabs = document.querySelector('.dropdown');
    
          if (isFullscreen) {
            if (homeTabs) homeTabs.classList.add('hidden');
            if (navTabs) navTabs.classList.add('hidden');
          } else {
            if (homeTabs) homeTabs.classList.remove('hidden');
            if (navTabs && navTabs.classList.contains('hidden')) {
              navTabs.classList.remove('hidden');
            }
          }
        };
    
        const handleResize = () => {
          const newIsFullscreen = window.innerHeight < window.screen.height;
          setIsFullscreen(newIsFullscreen);
          fullscreenHandler();
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [isFullscreen]);


    return (
        <div className='carousel-wrapper'>
            <ImageGallery 
                items={pics} 
                showFullscreenButton={showFullscreenButton} 
            />
      </div>
    )
}

export default ImageCarousel