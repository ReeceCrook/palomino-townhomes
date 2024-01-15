import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

function ImageCarousel({ pics, showFullscreenButton=true, onClick=null  }){
    const [isFullscreen, setIsFullscreen] = useState(false);
    

    function fullscreenHandler() {
        const homeTabs = document.querySelector('.homeTabs')
        const navTabs = document.querySelector('.dropdown')
        const container = document.querySelector('.image-gallery-fullscreen-button');

        if(container){
            container.addEventListener('click', () => {
                setIsFullscreen((current) => !current)
            })
        }

        if (isFullscreen === true) {
            if (homeTabs) homeTabs.style.display = 'none';
            if (navTabs) navTabs.style.display = 'none';
        } else {
            if (homeTabs) homeTabs.style.display = '';
            if (navTabs) navTabs.style.display = 'inline-block';
        }
    }

    useEffect(() => {
        fullscreenHandler();
    }, [isFullscreen]);

    console.log(isFullscreen)

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