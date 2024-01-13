import React from "react";
import { homeImages } from "../carousel";
import ImageGallery from "react-image-gallery";

function ImageCarousel({ pics }){

    return (
        <div className='carousel-wrapper'>
            <ImageGallery items={pics} />
      </div>
    )
}

export default ImageCarousel