import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

function ImageCarousel({ pics, showFullscreenButton=true, onClick=null  }){
    
    useEffect(() => {
        const fullscreenHandler = () => {
          const homeTabs = document.querySelector('.homeTabs');
          const navTabs = document.querySelector('.dropdown');
    
          if (document.fullscreenElement) {
            console.log("in if")
            if (homeTabs) homeTabs.classList.add('hidden');
            if (navTabs) navTabs.classList.add('hidden');
          } else {
            console.log("in else")
            if (homeTabs) homeTabs.classList.remove('hidden');
            if (navTabs && navTabs.classList.contains('hidden')) {
              navTabs.classList.remove('hidden');
            }
          }
        };
    
        const fullscreenChangeHandler = () => {
          fullscreenHandler();
        };
    
        document.addEventListener('fullscreenchange', fullscreenChangeHandler);
    
        return () => {
          document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
        };
      }, []);


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