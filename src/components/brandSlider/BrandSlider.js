import React, { useRef } from "react";

import Slider from "react-slick";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import sliderImg1 from "../../assets/slider_brand_images/boss.png";
import sliderImg2 from "../../assets/slider_brand_images/medicine.png";
import sliderImg3 from "../../assets/slider_brand_images/guess.png";
import sliderImg4 from "../../assets/slider_brand_images/tommy_hilfiger.png";
import sliderImg5 from "../../assets/slider_brand_images/armani_exchange.png";
import sliderImg6 from "../../assets/slider_brand_images/karl_lagerfeld.png";
import sliderImg7 from "../../assets/slider_brand_images/superdry.png";
import sliderImg8 from "../../assets/slider_brand_images/emporio_armani.png";
import sliderImg9 from "../../assets/slider_brand_images/polo.png";
import sliderImg10 from "../../assets/slider_brand_images/ea7.png";
import sliderImg11 from "../../assets/slider_brand_images/adidas_originals.png";
import sliderImg12 from "../../assets/slider_brand_images/tommy_jeans.png";
import sliderImg13 from "../../assets/slider_brand_images/hugo.png";
import sliderImg14 from "../../assets/slider_brand_images/pepe_jeans.png";
import sliderImg15 from "../../assets/slider_brand_images/g_star.png";
import sliderImg16 from "../../assets/slider_brand_images/puma.png";
import sliderImg17 from "../../assets/slider_brand_images/nike.png";
import sliderImg18 from "../../assets/slider_brand_images/martens.png";
import sliderImg19 from "../../assets/slider_brand_images/kappa.webp";
import sliderImg20 from "../../assets/slider_brand_images/gant.png";
import sliderImg21 from "../../assets/slider_brand_images/columbia.png";
import sliderImg22 from "../../assets/slider_brand_images/mark_opolo.png";
import sliderImg23 from "../../assets/slider_brand_images/wrangler.png";
import sliderImg24 from "../../assets/slider_brand_images/cat.png";
import sliderImg25 from "../../assets/slider_brand_images/ray_ban.png";
import sliderImg26 from "../../assets/slider_brand_images/all_saints.png";
import sliderImg27 from "../../assets/slider_brand_images/champion.png";
import sliderImg28 from "../../assets/slider_brand_images/under_armour.png";
import sliderImg29 from "../../assets/slider_brand_images/adidas.png";
import sliderImg30 from "../../assets/slider_brand_images/north_face.webp";

import "../../sass/brandSlider.scss";

const BrandSlider = () => {
  const brandImages = [
    sliderImg1,
    sliderImg2,
    sliderImg3,
    sliderImg4,
    sliderImg5,
    sliderImg6,
    sliderImg7,
    sliderImg8,
    sliderImg9,
    sliderImg10,
    sliderImg11,
    sliderImg12,
    sliderImg13,
    sliderImg14,
    sliderImg15,
    sliderImg16,
    sliderImg17,
    sliderImg18,
    sliderImg19,
    sliderImg20,
    sliderImg21,
    sliderImg22,
    sliderImg23,
    sliderImg24,
    sliderImg25,
    sliderImg26,
    sliderImg27,
    sliderImg28,
    sliderImg29,
    sliderImg30,
  ];

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
