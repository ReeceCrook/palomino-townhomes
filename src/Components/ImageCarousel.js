import React from "react";
import { homeImages } from "../carousel";
import ImageGallery from "react-image-gallery";

function ImageCarousel({ pics, fullscreenBooleen=false, showFullscreenButton=true, onClick=null  }){

    return (
        <div className='carousel-wrapper'>
            <ImageGallery 
                items={pics} 
                showFullscreenButton={showFullscreenButton} 
                onClick={onClick} 
                isFullscreen={true} 
            />
      </div>
    )
}

export default ImageCarousel