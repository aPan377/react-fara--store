import React, { useRef } from "react";
import { useSelector } from "react-redux";

import Slider from "react-slick";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "../../sass/brandSlider.scss";

const BrandSlider = () => {
  const brandImages = useSelector((state) => state.brandSliderImages);

  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const slider = useRef();

  return (
    <div className="slider__container">
      <div
        className="slider__container__prevSlide"
        onClick={() => slider?.current?.slickPrev()}
      >
        <IoIosArrowBack />
      </div>
      <div className="slider__container__slider">
        <Slider {...settings} ref={slider}>
          {brandImages.map((brandImage, index) => (
            <a
              key={index}
              className="slider__container__slider__image__container"
            >
              <img src={brandImage} draggable="false" />
            </a>
          ))}
        </Slider>
      </div>
      <div
        className="slider__container__nextSlide"
        onClick={() => slider?.current?.slickNext()}
      >
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default BrandSlider;
