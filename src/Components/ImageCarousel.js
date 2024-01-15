import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

function ImageCarousel({ pics, showFullscreenButton=true, onClick=null  }){
    const [isFullscreen, setIsFullscreen] = useState(false);
    

    function fullscreenHandler() {
        const viewportWidth = window.innerWidth;
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
            if (homeTabs && viewportWidth > 600) homeTabs.style.display = 'inline-block';
            else if(homeTabs && viewportWidth <= 600) homeTabs.style.display = 'flex';
            if (navTabs) navTabs.style.display = 'inline-block';
        }
    }

    useEffect(() => {
        fullscreenHandler();
    }, [isFullscreen]);

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