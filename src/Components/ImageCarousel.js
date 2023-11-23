import React from "react";
import { homeImages } from "../Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel loader
import { Carousel } from "react-responsive-carousel";

function ImageCarousel(){

    return (
        <div className='carousel-wrapper'>
            <Carousel showArrows={true}>
                {
                    homeImages.map(image => {
                        return (
                            <div key={image.id} className="carousel-image">
                                <img src={image.src} alt={image.description} />
                            </div>
                        )
                    })
                }
            </Carousel>
      </div>
    )
}

export default ImageCarousel