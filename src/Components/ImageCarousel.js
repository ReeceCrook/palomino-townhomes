import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

function ImageCarousel({ pics, showFullscreenButton=true, onClick=null  }){
    const [isFullscreen, setIsFullscreen] = useState(false);
    

    const fullscreenHandler = () => {
        const homeTabs = document.querySelector('.homeTabs');
        const navTabs = document.querySelector('.dropdown');
        const container = document.querySelector('.image-gallery-fullscreen-button');

        if(container){
            container.addEventListener('click', () => {
                setIsFullscreen((current) => !current);
            })
        }

        if (isFullscreen === true) {
            if(homeTabs) homeTabs.classList.add('hidden');
            if(navTabs) navTabs.classList.add('hidden');
            console.log(homeTabs.classList, "1<== homeTabs, navTabs ==>", isFullscreen)

        } else {
            if(homeTabs){
                homeTabs.classList.remove('hidden')
                console.log(homeTabs.classList, "2<== homeTabs, navTabs ==>", isFullscreen)
            }
                if(navTabs && navTabs.classList.contains('hidden')){
                    navTabs.classList.remove('hidden');
                } 

        }
    }


    fullscreenHandler();

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