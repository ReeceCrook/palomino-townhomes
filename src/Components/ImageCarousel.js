import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

function ImageCarousel({ pics, showFullscreenButton=true, onClick=null  }){
    const [isFullscreen, setIsFullscreen] = useState(false);

    function fullscreenHandler() {
        const homeTabs = document.querySelector('.tabs.homeTabs')
        const navTabs = document.querySelector('.tabs.dropdown')
        const container = document.querySelector('.image-gallery-fullscreen-button');

        if(container){
            console.log(container)

            container.addEventListener('click', () => {
                setIsFullscreen((currnet) => !currnet)
            })
        }

        if (isFullscreen === true) {
            if (homeTabs) homeTabs.style.display = 'none';
            if (navTabs) navTabs.style.display = 'none';
        }

        if(isFullscreen === true) {
            homeTabs.style.display = 'none';
            navTabs.style.display = 'none';
        }
    }

    useEffect(() => {
        fullscreenHandler();
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