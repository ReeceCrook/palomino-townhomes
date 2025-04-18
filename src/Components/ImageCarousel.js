import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "yet-another-react-lightbox/styles.css";
import previousIcon from "../assets/Icons/left-chevron.png"
import nextIcon from "../assets/Icons/right-chevron.png"

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <img 
        src={nextIcon} 
        alt="Next icon created by tenBystry - Flaticon" 
        title="Next icon created by tenBystry - Flaticon"
        style={{ width: "40px", height: "40px" }}
      />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <img 
        src={previousIcon} 
        alt="Left arrow icon created by tenBystry - Flaticon" 
        title="Left arrow icon created by tenBystry - Flaticon"
        style={{ width: "40px", height: "40px" }}
      />
    </div>
  );
}


function ImageCarousel({ pics }) {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(true);
  const [infoHasBeenShown, setInfoHasBeenShown] = useState(false);
  const infoTimerRef = useRef(null);

  const mainSettings = {
    asNavFor: slider2,
    ref: (slider) => setSlider1(slider),
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: true,
    swipe: true,
    dots: false,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    afterChange: (currentIndex) => {
      setShowInfo(false);
      setInfoHasBeenShown(true);
    },
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const thumbSettings = {
    asNavFor: slider1,
    ref: (slider) => setSlider2(slider),
    slidesToShow: 8,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: pics.length < 8 ? false : true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  
  const handleMouseEnter = () => {
    if (!infoHasBeenShown) {
      setShowInfo(true);
      infoTimerRef.current = setTimeout(() => {
        setShowInfo(false);
        setInfoHasBeenShown(true);
      }, 1200)
    }
  };

  return (
    <div className="synchronized-carousel">
      <div 
      className="main-slider-wrapper" 
      style={{ position: "relative"}}
      onMouseEnter={handleMouseEnter}
      >
        {showInfo && (
          <div className="thought-bubble">
            Click For Fullscreen
            <span className="bubble-tail bubble-tail-1"></span>
            <span className="bubble-tail bubble-tail-2"></span>
          </div>
        )}
        <Slider {...mainSettings}>
          {pics.map((pic, idx) => (
            <div key={idx} className="main-slide">
              <img
                src={pic.original}
                alt={`Slide ${idx}`}
                style={{ width: "100%", height: "auto", cursor: "pointer", padding: "0px"}}
                onClick={() => setLightboxOpen(true)}
              />
            </div>
          ))}
        </Slider>
      </div>
        <div className="thumb-slider-wrapper">
        <Slider {...thumbSettings}>
            {pics.map((pic, idx) => (
            <div key={idx} className="thumb-slide" style={{ margin: 0, padding: 0 }}>
                <img
                src={pic.thumbnail}
                alt={`Thumbnail ${idx}`}
                style={{
                    width: "100%",
                    height: "80px",
                    objectFit: "cover",
                    cursor: "pointer",
                    display: "block",
                }}
                />
            </div>
            ))}
        </Slider>
        </div>

      <Lightbox
        slides={pics.map((pic) => ({ src: pic.original }))}
        open={lightboxOpen}
        index={currentIndex}
        close={() => setLightboxOpen(false)}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 4,
          zoomSpeed: 0.2,
        }}
      />
    </div>
  );
}

export default ImageCarousel;
