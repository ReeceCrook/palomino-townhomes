import React, { useState } from "react";
import ImageGallery from "react-image-gallery";

function ImageCarousel({ pics, showFullscreenButton=true, onClick=null  }){
    // const [isFullscreen, setIsFullscreen] = useState(false);

    // const toggleFullscreen = () => {
    //     const container = document.querySelector('.image-gallery-fullscreen-button');
    
    //     if (container) {
    //       if (isFullscreen) {
    //         document.exitFullscreen();
    //       } else {
    //         container.click();
    //       }
    
    //       setIsFullscreen((prevFullscreen) => !prevFullscreen);
    //     }
    //   };

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