import React, { useState } from "react";
import ImageGallery from "react-image-gallery";

function ImageCarousel({ pics, showFullscreenButton = true, onClick = null }) {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    const handleImageClick = (event, index) => {
        toggleFullScreen();
    };

    console.log(isFullScreen)

    return (
        <div className={isFullScreen ? 'fullscreen' : 'carousel-wrapper'}>
            <ImageGallery
                items={pics}
                showFullscreenButton={showFullscreenButton}
                onClick={handleImageClick}
            />
        </div>
    )
}

export default ImageCarousel