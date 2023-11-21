import React from "react";
import images from "../images";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel loader
import { Carousel } from "react-responsive-carousel";

function ImageCarousel(){

    return (
        <div className='carousel-wrapper'>
            <Carousel showArrows={true} >
                {
                    images.map(image => <img src={image.src} alt={image.description} />)
                }
            </Carousel>
      </div>
    )
}

export default ImageCarousel