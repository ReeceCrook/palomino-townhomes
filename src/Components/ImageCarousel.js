import React, { useState, useRef, useEffect, useCallback } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "yet-another-react-lightbox/styles.css";
import '../css/ImageCarousel.css';
import previousIcon from "../assets/Icons/left-chevron.png"
import nextIcon from "../assets/Icons/right-chevron.png"
import infoIcon from "../assets/Icons/info-icon.png"

const INFO_BAR_TIMEOUT_MS = 1200;

function NextArrow({ onClick }) {
  return (
    <div onClick={onClick} className="carouselArrow carouselNextArrow">
      <img
        src={nextIcon}
        alt="Next icon created by tenBystry - Flaticon"
        title="Next icon created by tenBystry - Flaticon"
        className="carouselArrowIcon"
      />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div onClick={onClick} className="carouselArrow carouselPrevArrow">
      <img
        src={previousIcon}
        alt="Left arrow icon created by tenBystry - Flaticon"
        title="Left arrow icon created by tenBystry - Flaticon"
        className="carouselArrowIcon"
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

  useEffect(() => {
    return () => {
      if (infoTimerRef.current) clearTimeout(infoTimerRef.current);
    };
  }, []);

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
    afterChange: () => {
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
    infinite: pics.length >= 8,
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

  const handleMouseEnter = useCallback(() => {
    if (!infoHasBeenShown) {
      setShowInfo(true);
      infoTimerRef.current = setTimeout(() => {
        setShowInfo(false);
        setInfoHasBeenShown(true);
      }, INFO_BAR_TIMEOUT_MS);
    }
  }, [infoHasBeenShown]);

  const handleClick = useCallback(() => {
    if (!infoHasBeenShown) {
      if (infoTimerRef.current) clearTimeout(infoTimerRef.current);
      setShowInfo(false);
      setInfoHasBeenShown(true);
    }
  }, [infoHasBeenShown]);

  return (
    <div className="synchronizedCarousel">
      <div
        className="mainSliderWrapper"
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        {showInfo && (
          <div className="infoBar">
            <img
              src={infoIcon}
              alt=""
              className="infoBarIcon"
            />
            <div className="infoBarMessage">
              Click for fullscreen
            </div>
          </div>
        )}
        <Slider {...mainSettings}>
          {pics.map((pic) => (
            <div key={pic.original} className="mainSlide">
              <img
                src={pic.original}
                alt={`Slide`}
                onClick={() => setLightboxOpen(true)}
              />

              {pic.ctaLink && (
                <a
                  href={pic.ctaLink}
                  className="slideCtaHotspot"
                  aria-label="Explore Floorplans"
                  onClick={(e) => {e.stopPropagation();}}
                />
              )}
            </div>
          ))}
        </Slider>
      </div>
      <div className="thumbSliderWrapper">
        <Slider {...thumbSettings}>
          {pics.map((pic) => (
            <div key={pic.thumbnail} className="thumbSlide">
              <img
                src={pic.thumbnail}
                alt={`Thumbnail`}
              />
            </div>
          ))}
        </Slider>
      </div>

      <Lightbox
        slides={pics.map((pic) => ({
            src: pic.original,
            ctaLink: pic.ctaLink,
            ctaLabel: pic.ctaLabel,
          }))}
        open={lightboxOpen}
        index={currentIndex}
        close={() => setLightboxOpen(false)}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 4,
          zoomSpeed: 0.2,
        }}
        on={{
          view: ({ index }) => setCurrentIndex(index),
        }}
        render={{
          controls: () => {
            const activePic = pics[currentIndex];

            if (currentIndex !== 0 || !activePic?.ctaLink) return null;

            return (
              <a
                href={activePic.ctaLink}
                className="lightboxCtaButton"
                aria-label={activePic.ctaLabel || "Explore Floorplans"}
                onClick={(e) => e.stopPropagation()}
              />

            );
          },
        }}
      />
    </div>
  );
}

export default ImageCarousel;
