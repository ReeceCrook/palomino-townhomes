import React, { useState, useRef } from "react";
import ImageGallery from "react-image-gallery";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function ImageCarousel({ pics, showFullscreenButton = true }) {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const galleryRef = useRef(null);

    const toggleFullScreen = () => {
        if (galleryRef.current) {
            if (!isFullScreen) {
                galleryRef.current.fullScreen();
            } else {
                document.exitFullscreen();
            }
        }
    };

    const handleImageClick = () => {
        toggleFullScreen();
    };

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
                showPlayButton={false}
                renderItem={(item) => (
                    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <TransformWrapper
                            initialScale={1}
                            minScale={1}
                            maxScale={4}
                            doubleClick={{ disabled: false }}
                            pinch={{ step: 5 }}
                            wrapperStyle={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <TransformComponent>
                                <img
                                    src={item.original}
                                    alt={item.description || ""}
                                    style={{ display: "block", margin: "0 auto", maxWidth: "100%", height: "auto" }}
                                />
                            </TransformComponent>
                        </TransformWrapper>
                    </div>
                )}
            />
        </div>
    );
}

export default ImageCarousel;
