import React, { useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "yet-another-react-lightbox/styles.css";
import fullscreenImg from "../assets/Icons/image.png";

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        right: "10px",
        top: "45%",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
        color: "#000",
        fontSize: "100px",
        userSelect: "none",
      }}
    >
      ›
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
        top: "45%",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
        color: "#000",
        fontSize: "100px",
        userSelect: "none",
      }}
    >
      ‹
    </div>
  );
}

function ImageCarousel({ pics }) {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const mainSettings = {
    asNavFor: slider2,
    ref: (slider) => setSlider1(slider),
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: true,
    dots: false,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const thumbSettings = {
    asNavFor: slider1,
    ref: (slider) => setSlider2(slider),
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: true,
    arrows: true,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
  

  return (
    <div className="synchronized-carousel">
      <div className="main-slider-wrapper" style={{ position: "relative"}}>
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
        <button
          className="fullscreen-button"
          onClick={() => setLightboxOpen(true)}
        >
          <img src={fullscreenImg} alt="Fullscreen" style={{ width: "40px", height: "40px" }} />
        </button>
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
      />
    </div>
  );
}

export default ImageCarousel;
