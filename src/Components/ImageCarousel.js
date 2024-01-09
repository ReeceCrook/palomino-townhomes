import React from "react";
import { homeImages } from "../carousel";
import ImageGallery from "react-image-gallery";

function ImageCarousel(){

    return (
        <div className='carousel-wrapper'>
            <ImageGallery items={homeImages} />
      </div>
    )
}

export default ImageCarousel