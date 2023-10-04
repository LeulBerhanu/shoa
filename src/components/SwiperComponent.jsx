import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

import Card from "./card/Card";

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={40}
        centeredSlides={true}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className="flex justify-center items-center object-cover">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className=" object-cover">
            <Card />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
