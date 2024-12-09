import React, { useState, useRef } from "react";
import ImageGallery from "react-image-gallery";

function ImageCarousel({ pics, showFullscreenButton = true }) {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const galleryRef = useRef(null);

    // Toggles fullscreen mode by triggering the gallery's fullscreen method
    const toggleFullScreen = () => {
        if (galleryRef.current) {
            if (!isFullScreen) {
                galleryRef.current.fullScreen(); // Enter fullscreen
            } else {
                document.exitFullscreen(); // Exit fullscreen
            }
        }
    };

    const handleImageClick = () => {
        toggleFullScreen();
    };

    // Ensures we track fullscreen state when the user toggles fullscreen
    const handleScreenChange = (isFullscreen) => {
        setIsFullScreen(isFullscreen);
    };

    return (
        <div className={isFullScreen ? "fullscreen" : "carousel-wrapper"}>
            <ImageGallery
                ref={galleryRef}
                items={pics}
                showFullscreenButton={showFullscreenButton}
                onScreenChange={handleScreenChange}
                onClick={handleImageClick}
                showPlayButton={false} // Disables play button for simplicity
            />
        </div>
    );
}

export default ImageCarousel;
