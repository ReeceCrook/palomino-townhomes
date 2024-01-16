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
    
        const handleFullscreen = () => {
          if (!isFullscreen) {
            const element = document.documentElement;
    
            if (element.requestFullscreen) {
              element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) {
              element.webkitRequestFullscreen();
            }
          }
    
          setIsFullscreen(!isFullscreen);
          fullscreenHandler();
        };
    
        if (showFullscreenButton) {
          const fullscreenButton = document.querySelector('.image-gallery-fullscreen-button');
    
          if (fullscreenButton) {
            fullscreenButton.addEventListener('click', handleFullscreen);
          }
    
          return () => {
            if (fullscreenButton) {
              fullscreenButton.removeEventListener('click', handleFullscreen);
            }
          };
        }
      }, [isFullscreen, showFullscreenButton]);


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