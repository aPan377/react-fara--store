import React from "react";

import "../../sass/banners/homeHeadBanner.scss";
import bannerImg from "../../assets/banners/home_header_banner.jpg";

const HomeHeaderBanner = () => {
  return (
    <div className="homeHeaderBanner__container">
      <img src={bannerImg} alt="Discount banner" />
    </div>
  );
};

export default HomeHeaderBanner;
