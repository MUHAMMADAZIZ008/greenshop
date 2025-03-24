"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import BannerContent from "./components/banner-content";
const Banner = () => {
  return (
    <div className="container pt-[18px] pb-[40px]">
      <Swiper
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        className="banner__swiper"
      >
        <SwiperSlide>
          <BannerContent />
        </SwiperSlide>
        <SwiperSlide>
          <BannerContent />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
